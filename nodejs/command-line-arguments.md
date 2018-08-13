# Command Line Arguments

Command line arguments are string of text used to pass additional information to a program when an application is run through the CLI of an OS.

`$ [runtime] [script_name] [argument-1 argument-2 argument-3 ... argument-n]`

The runtime can be anything that can executes a program/scripts, `java`, `sh`, `node`, etc.

## Why use Command Cline Arguments

### Advantage

- You can pass information to an application before it starts. This is particularly useful if you want to perform large number configuration settings.
- Command line arguments are passed as strings to your program. String data types can easily be converted to other data types within an application, making the arguments very flexible.
- You can pass unlimited number of arguments via the command line.
- Command line arguments are used in conjunction with scripts and batch files, which is particularly useful for automated testing.

### Disadvantage

- The biggest disadvantage of passing information via the command line is that interface has steep learning curve, so it's difficult for most people to use unless they have a good deal of experience using CLI tools.
- Command line applications can be difficult to use unless you're using a desktop or laptop computer, so they're not typically used on smaller devices like phones or tablets.

## Passing Command Line Arguments in Node.js

- built-in way, `process.argv`
- `minimist` package
- `yargs` package

### process.argv

The `process.argv` is a global array you can use to access arguments without importing any libraries. You simply need to pass arguments to a Node.js application, and these arguments can be accessed within the application via the `process.argv` array.

```javascript
//process.argv
[
  '/absolute/path/to/the/node',
  '/absolute/path/to/the/file',
  'arg1',
  'arg2',
  ...
]
```

### minimist module

The minimist module will parse arguments from the process.argv array and transform it in to an easier-to-use associative array. In the associative array you can access the elements via index names in addition to the index numbers.

`minimist` is not as feature-rich as some other arg-parsing modules such as `yargs`. But it has some useful features such as defaults, aliasing.

minimist(args, {
  alias: {
    p: 'port'
  },
  default: {
    port: 8080
  }
})

## Referece

[Command Line Arguments in Node.js](http://stackabuse.com/command-line-arguments-in-node-js/)
