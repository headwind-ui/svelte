function classnames(...classes) {
  let _classes = []
  classes.forEach((item) => {
    const type = typeof item
    switch (type) {
      case 'string':
        _classes.push(...item.split(' '))
        break
      case 'object':
        const validClassnames = Object.entries(item)
          .map(([key, value]) => [key, value ? true : false])
          .filter(([key, value]) => value)
          .map(([key, value]) => key)
        _classes.push(...validClassnames)
        break
      default:
        break
    }
  })
  return _classes.join(' ')
}

export default classnames
