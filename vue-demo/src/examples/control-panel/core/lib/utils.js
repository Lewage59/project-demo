 
/**
 * 面板内容可拖拽区域
 * @param {x,y} pos 
 * @returns {x,y}
 */
export function dragBoundPanelArea (params) {
  const { width, height } = params
  
  return function (pos) {
    let { x, y } = pos

    if (x < 0) x = 0
    if (x >= width) x = width
    if (y < 0) y = 0
    if (y >= height) y = height

    return { x, y }
  }
}