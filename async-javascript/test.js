const users = {
  [Symbol.iterator]: function () {
    let i = 0
    return {
      next () {
        return i < 10 
          ? { value: i ++, done: false}
          : { done: true }
      }
    }
  }
}


for (u of users) {
  console.log(u)
}
