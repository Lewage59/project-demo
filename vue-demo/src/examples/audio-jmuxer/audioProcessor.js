/**
 * 音频接受处理器
 */
import JMuxer from 'jmuxer';
import Socket from './socket' 

const DEFAULT_WS_URL = 'ws://localhost:8080'

export default class AudioProcessor {
	constructor(options) {
    const wsUrl = options.wsUrl || DEFAULT_WS_URL
		/**
		 * node: 'player',
		 * mode: 'audio',
		 * debug: true,
		 * flushingTime: 0,
     * wsUrl
		 */
		this.jmuxer = new JMuxer({
      mode: 'audio',
			onError(data) {
				console.log('Buffer error encountered', data);
			},
			...options
		});
		this.audioDom = document.getElementById(options.node)
		this.initWebSocket(wsUrl)
	}

	initWebSocket(url) {
		const that = this
		this.ws = new Socket({
			url,
			binaryType: 'arraybuffer',
			onmessage: function(event) {
				var data = that.parse(event.data);
				data && that.jmuxer.feed(data);
			}
		});
	}

	/**
	 * 音频解析
	 * @param {*} data AAC Buffer 视频流
	 * @returns 
	 */
  flag = 1
  bufferList = []
	parse(data) {
		let input = new Uint8Array(data)

    if (this.flag === 1) {
      this.bufferList = Array.from(input)
    }

    if (this.flag <= 43) {
      this.flag++;
      this.bufferList = this.bufferList.concat(Array.from(input));
      return false
    } 
    
    this.flag = 1

		return {
			audio: new Uint8Array(this.bufferList)
		};
	}

	onClose() {
		this.ws.handleClose()
	}

	onPlay() {
    this.audioDom.load()
    const playPromise = this.audioDom.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.audioDom.play()
      })
    }
	}

	onPause() {
		this.audioDom.pause()
	}

	onReload() {
		this.audioDom.load()
	}

  onDestroy() {
    this.ws.handleClose()
    this.audioDom.pause()
    this.jmuxer = null
  }
}