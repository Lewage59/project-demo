import Konva from 'konva'
import Rocker from './lib/rocker'

export default class ControlPanel {
  // 全局配置选项
  option

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

  _init () {
    const stage = new Konva.Stage({
      container: this.option.node,
      width: this.option.panelArea.width,
      height: this.option.panelArea.height,
    });

    const container = stage.container();
    container.tabIndex = 1;
    container.focus();
    
    const layer = new Konva.Layer();
    stage.add(layer);

    const rocker = new Rocker(container, {
      panelArea: this.option.panelArea,
      draggable: true
    })

    rocker.addEventListener('shakeChange', function (pos) {
      // console.log(pos)
    })
  
    layer.add(rocker.rockerGroup);
    layer.draw()
  }
}