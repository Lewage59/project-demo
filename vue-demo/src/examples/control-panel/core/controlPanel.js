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
      height: this.option.panelArea.height
    });

    this.container = this.stage.container()
    this.layer = new Konva.Layer();

    this.stage.add(this.layer);
    this.layer.draw()
  }

  /**
   * 创建摇杆
   */
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

    // 摇杆样式
    const coverGroup = new Konva.Group({
      width: 100,
      height: 100
    });

    const triangleTop = new Konva.RegularPolygon({
      y: -30,
      sides: 3,
      radius: 8,
      fill: 'white'
    });

    const triangleLeft = new Konva.RegularPolygon({
      x: -30,
      sides: 3,
      radius: 8,
      fill: 'white',
      rotation: -90
    });

    const triangleBottom = new Konva.RegularPolygon({
      y: 30,
      sides: 3,
      radius: 8,
      fill: 'white',
      rotation: 180
    });

    const triangleRight = new Konva.RegularPolygon({
      x: 30,
      sides: 3,
      radius: 8,
      fill: 'white',
      rotation: 90
    });

    const centerCricle = new Konva.Circle({
      radius: 8,
      fill: 'white'
    })

    rockerGroup.add(coverGroup)
    coverGroup.add(triangleTop)
    coverGroup.add(triangleLeft)
    coverGroup.add(triangleBottom)
    coverGroup.add(triangleRight)
    coverGroup.add(centerCricle)

    coverGroup.zIndex(1)
    that.layer.draw()

    return rocker
  }

  /**
   * 显示 控制面板
   */
  show () {
    this.stage.show()
  }

  /**
   * 隐藏 控制面板
   */
  hide () {
    this.stage.hide()
  }

  /**
   * 设置/获取 控制面板透明度
   */
  opacity (val) {
    if (val === 'undefined') {
      return this.stage.opacity()
    }

    return this.stage.opacity(val)
  }
}