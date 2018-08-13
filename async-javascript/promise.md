# Promise

## fetch

`fetch` use two facade functions that

1. initiate background web browser work
2. return a placeholder JS object

## How promise deferred functionality gets back into JavaScript to be run

setTimeout --> callback queue
promise deferred task  --> Microtask queue

## Conclusions

Promise, Web APIs, the Callback & Microtask Queues and Event loop allow us to defer our actions until the 'work' (an API request, timer etc) is completed and continue running our code line by line in the meantime.

Asynchronous JavaScript is the backbone of the modern web - letting us build fast 'non-block' applications. 
