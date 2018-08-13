const clearPromise = () => {
  return new Promise(resolve => {
    console.log(1)
    setTimeout(() => {
      resolve()
      console.log(2)
    }, 0
    )
  })
}

clearPromise().then(() => console.log(5))

setTimeout(() => console.log(3), 0)
setTimeout(() => console.log(4), 0)
setTimeout(() => console.log(6), 100)
