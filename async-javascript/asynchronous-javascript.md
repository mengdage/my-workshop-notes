# Asynchronous JavaScript

Asynchronicity is the backbone of modern web development in JavaScript.

JavaScript is single threaded and has a synchronous execution model. 

### Call stack

All code executions happen here.

|             |

| function3() |

| function2() |

| function1() |

| global()    |

### Event loop

only put a callback into the call stack if the call stack is empty.

### Callback queue

setTimeout: facade function to browser's timeout funciton

## Problems

Not so good to pass a function to another function only for it to run later

## Benefits

Super explicit once you understand how it works under the hood.
