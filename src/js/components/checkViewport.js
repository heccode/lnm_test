const checkViewport = (type, width) => {
  let mq
  let viewport = parseInt(width)
  switch (type) {
    case 'from':
      mq = 'min-width'
      break
    case 'to':
      mq = 'max-width'
      break
    default :
      mq = 'min-width'
  }

  return window.matchMedia('(' + mq + ': ' + viewport + 'px)').matches
}

export default checkViewport