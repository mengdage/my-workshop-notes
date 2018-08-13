Object.keys(nextProps).forEach(prop => {
  if (nextProps[prop] !== this.props[prop]) {
    console.log(prop)
  }
})
