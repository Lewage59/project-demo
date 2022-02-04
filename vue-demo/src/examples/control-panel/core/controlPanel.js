import Konva from 'konva'
import Rocker from './lib/rocker'

export default class ControlPanel {
  // 全局配置选项
  option
  // 舞台实例
  stage
  // 图层实例
  layer

  constructor (option) {
    /**
     * option 参数
     * node Dom节点
     */

    const panel = document.getElementById(option.node)
    const panelArea = {
      width: panel.offsetWidth,
      height: panel.offsetHeight
    }

    this.option = {
      panelArea,
      ...option
    }

    this._init()
  }

  /**
   * 初始化 stage, layer
   */
  _init () {
    this.stage = new Konva.Stage({
      container: this.option.node,
      width: this.option.panelArea.width,
      height: this.option.panelArea.height,
    });

    this.container = this.stage.container()
    this.layer = new Konva.Layer();

    this.stage.add(this.layer);
    this.layer.draw()
  }

  createRocker (option) {
    const that = this
    const config = Object.assign({
      draggable: true,
      keyBoardable: true,
    }, option)

    const rocker = new Rocker(this.container, {
      panelArea: this.option.panelArea,
      name: 'rocker'
    })
    const rockerGroup = rocker.rockerGroup

    // 监听键盘事件
    if (config.keyBoardable) {
      this.container.tabIndex = 1
      this.container.focus()
    }

    // rocker.addEventListener('shakeChange', function (pos) {
    //   console.log(pos)
    // })xw
  
    this.layer.add(rockerGroup)
    this.layer.draw()

    this.stage.on('click tap', function(e) {
      let tf = that.stage.find('Transformer')

      if (tf.length > 0) {
        tf[0].destroy()
        that.layer.draw()
      }

      if (e.target === that.stage || !e.target?.parent?.attr?.name === 'rocker') {
        return
      }

      const MAX_WIDTH = 200

      tf = new Konva.Transformer({
        keepRatio: true,
        rotateEnabled: false,
        boundBoxFunc: function(oldBoundBox, newBoundBox) {
          if (Math.abs(newBoundBox.width) > MAX_WIDTH) {
            return oldBoundBox
          }
          return newBoundBox
        }
      })

      tf.nodes([rockerGroup])
      that.layer.add(tf)
      that.layer.draw()
    })

    return rocker
  }
}