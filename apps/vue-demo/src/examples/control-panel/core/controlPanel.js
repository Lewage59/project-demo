import Konva from 'konva'
import Rocker from './lib/rocker'
import { dragBoundPanelArea } from './utils/tools'

export default class ControlPanel {
  // 全局配置选项
  option
  // 舞台实例
  stage
  // 图层实例
  layer
  // 摇杆实例
  rocker

  constructor (option) {
    /**
     * option 参数
     * node Dom节点
     */

    // 默认获取结点长宽
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

    this.rocker = new Rocker(this.container, {
      panelArea: this.option.panelArea,
      name: 'rocker'
    })
    const rockerGroup = this.rocker.rockerGroup

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

    // const triangleTop = new Konva.RegularPolygon({
    //   y: -30,
    //   sides: 3,
    //   radius: 8,
    //   fill: 'white'
    // });

    // const triangleLeft = new Konva.RegularPolygon({
    //   x: -30,
    //   sides: 3,
    //   radius: 8,
    //   fill: 'white',
    //   rotation: -90
    // });

    // const triangleBottom = new Konva.RegularPolygon({
    //   y: 30,
    //   sides: 3,
    //   radius: 8,
    //   fill: 'white',
    //   rotation: 180
    // });

    // const triangleRight = new Konva.RegularPolygon({
    //   x: 30,
    //   sides: 3,
    //   radius: 8,
    //   fill: 'white',
    //   rotation: 90
    // });

    const upText = new Konva.Text({
      width: 40,
      height: 20,
      x: -20,
      y: -40,
      text: 'W',
      fontSize: 18,
      fill: 'white',
      align: 'center',
      verticalAlign: 'middle'
    });

    const downText = new Konva.Text({
      width: 40,
      height: 20,
      x: -20,
      y: 24,
      text: 'S',
      fontSize: 18,
      fill: 'white',
      align: 'center',
      verticalAlign: 'middle'
    });

    const leftText = new Konva.Text({
      width: 20,
      height: 40,
      x: -40,
      y: -18,
      text: 'A',
      fontSize: 18,
      fill: 'white',
      align: 'center',
      verticalAlign: 'middle'
    });

    const rightText = new Konva.Text({
      width: 20,
      height: 40,
      x: 20,
      y: -18,
      text: 'D',
      fontSize: 18,
      fill: 'white',
      align: 'center',
      verticalAlign: 'middle'
    });

    const centerCricle = new Konva.Circle({
      radius: 8,
      fill: 'white'
    })

    rockerGroup.add(coverGroup)
    // 图案
    // coverGroup.add(triangleTop)
    // coverGroup.add(triangleLeft)
    // coverGroup.add(triangleBottom)
    // coverGroup.add(triangleRight)
    // 文本
    coverGroup.add(upText)
    coverGroup.add(downText)
    coverGroup.add(leftText)
    coverGroup.add(rightText)
    coverGroup.add(centerCricle)

    coverGroup.zIndex(1)
    that.layer.draw()

    return this.rocker
  }

  /**
   * 面板容器区域
   */
  changePanelArea (area) {
    const { width, height } = area

    // 设置面板区域
    width && this.stage.width(width)
    height && this.stage.height(height)

    // 设置元素移动区域
    this.rocker.rockerGroup.dragBoundFunc(dragBoundPanelArea({
      width,
      height
    }))
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

  /**
   * 销毁结点
   */
  destroy () {
    this.stage.destroy()
  } 
}