import { dragBoundPanelArea } from '../utils/tools'

// 键盘按键值行为映射
const keyBoardMap = new Map([
  ['KeyA', 'left'],
  ['KeyW', 'up'],
  ['KeyD', 'right'],
  ['KeyS', 'down']
])

// 行为方向映射
const directionMap = {
  up: {
    axis: 'y',
    direct: -1,
  },
  down: {
    axis: 'y',
    direct: 1,
  },
  left: {
    axis: 'x',
    direct: -1,
  },
  right: {
    axis: 'x',
    direct: 1,
  }
}

export default class Rocker {
  // 摇杆配置项
  option
  // 面板容器
  container
  // 触发按键事件集
  keyBoardEventSet

  constructor (container, option) {
    this.container = container
    this.option = option
    this._init()
  }

  // 初始化摇杆
  _init () {
    const that = this
    this.rockerGroup = new Konva.Group({
      x: this.option.x || 100,
      y: this.option.y || 280,
      width: this.option.width || 100,
      height: this.option.height || 100,
      draggable: this.option.draggable,
      dragBoundFunc: dragBoundPanelArea({
        width: this.option.panelArea.width,
        height: this.option.panelArea.height
      })
    });
  
    // 摇杆范围区域（外圆）
    this.externalCircle = new Konva.Circle({
      radius: 50,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 2,
      opacity: 0.8,
    });
  
    // 摇杆芯（内圆）
    this.innerCircle = new Konva.Circle({
      radius: 10,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 2,
      opacity: 0.8,
    });
  
    // 添加到组
    this.rockerGroup.add(this.externalCircle)
    this.rockerGroup.add(this.innerCircle)
  
    this.keyBoardEventSet = new Set()

    // 监听键盘按下行为
    this.container.addEventListener('keydown', function(e) {
      if (!keyBoardMap.has(e.code)) {
        return
      }
  
      // 记录按键事件
      that.keyBoardEventSet.add(e.code)
      that.renderRocker()
    });
  
    // 监听键盘松开行为
    this.container.addEventListener('keyup', function(e) {
      if (!keyBoardMap.has(e.code)) {
        return
      }
  
      // 移除移除事件
      that.keyBoardEventSet.delete(e.code)
      const ad = that.actionDirection(e.code)
  
      ad.axis === 'x' && that.innerCircle.x(0)
      ad.axis === 'y' && that.innerCircle.y(0)
  
      that.renderRocker()
    });
  }

  // 更新渲染摇杆面板
  renderRocker() {
    if (this.keyBoardEventSet.size === 0) {
      return
    }

    const kbEventSet = this.keyBoardEventSet.values()
    const ad = this.actionDirection(kbEventSet.next().value)
    let step = 50 * ad.direct
    
    if (this.keyBoardEventSet.size >= 2) {
      const edge = this.dragBoundCircleArea(50)
      const nextAd = this.actionDirection(kbEventSet.next().value)
      const nextStep = edge * nextAd.direct
      step = edge * ad.direct
      
      nextAd.axis === 'x' && this.innerCircle.x(nextStep);
      nextAd.axis === 'y' && this.innerCircle.y(nextStep);
    } 
    
    ad.axis === 'x' && this.innerCircle.x(step)
    ad.axis === 'y' && this.innerCircle.y(step)
  }

  // 计算圈内区域
  dragBoundCircleArea (radius) {
    return Math.sqrt(Math.pow(radius, 2) / 2)
  }

  // 判断当前行为方向
  actionDirection (key) {
    const direction = keyBoardMap.get(key)
    return directionMap[direction]
  }

  // 添加监听事件
  addEventListener (eventName, cb) {
    this[eventName](cb)
  }

  // 监听摇动改变
  shakeChange (cb) {
    const that = this
    this.innerCircle.on('xChange yChange', function() {
      const groupPos = that.rockerGroup.position()
      const circlePos = that.innerCircle.position()

      // 不监听复原位置
      if (circlePos.x === 0 && circlePos.y === 0) {
        return
      }
      
      cb({
        x: groupPos.x + circlePos.x,
        y: groupPos.y + circlePos.y
      })
    });
  }

  // 监听摇杆拖拽位置变化
  dragmove (cb) {
    const that = this
    this.rockerGroup.on('dragmove', function() {
      const groupPos = that.rockerGroup.position()

      cb({
        x: groupPos.x,
        y: groupPos.y
      })
    });
  }
}