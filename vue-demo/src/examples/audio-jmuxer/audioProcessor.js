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
      node: 'player',
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
	parse(data) {
		let input = new Uint8Array(data),
				dv = new DataView(input.buffer),
				duration,
				audioLength,
				audio;

		// duration = dv.getUint16(0, true); // 第1，2字节表示时间间隔
		// audioLength = dv.getUint16(2, true); // 第3，4字节表示数据流长度
		// audio = input.subarray(4, (audioLength + 4)); // 获取音频AAC ADTS数据

		return {
			audio: input,
			// duration: duration
		};
	}

	onClose() {
		this.ws.handleClose()
	}

	onPlay() {
		this.audioDom.play()
	}

	onPause() {
		this.audioDom.pause()
	}

	onReload() {
		this.audioDom.load()
	}
}