# Higher Order Component

- Share the code and reduce the duplication of code.

- With HOC you get back a component at compile time. With render props, all happens at run time and you can do more flexible things.

- It's convenient to build HOC on top of render props.

- Render props can do anything HOC can do. But HOC provides nicers APIs for the user. By building a render props at first, and building HOC on top of that, you provide both of their features.

```javascript
function withToggle(Component) {
  function Wrapper(props, ref) {
    return (
      <Toggle.Consumer>
        {toggleContext => (
          <Component {...props} toggle={toggleContext} ref={ref} />
        )}
      </Toggle.Consumer>
    )
  }

  Wrapper.displayName=`withToggle(${Component.displayName || Component.name})`

  return hoistNonReactStatics(React.forwardRef(Wrapper), Component)
}
```
