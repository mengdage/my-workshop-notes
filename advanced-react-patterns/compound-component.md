# Compound Component

When you have several components that need to share the same state, but the users needn't know about it, use compound component.

```html
<select>
  <option />
  <option />
  <option />
</select>
```

The parent holds the state and shares it with its children. It's an easy way to customize the component.

There are two kinds of compound components:

- [Basic compound component](#basic_compound_component)
- [Flexible compound component](#flexible_compound_component)

## Basic Compound Component

- Use static methods, `React.Children.map` and `React.cloneElement` to pass extra props to children elements.

- Can only pass props to immediate children element.

Example of compound component in the html select and option tags.

```javascript
class Toggle extends Component {
  static On = () => {}
  static Button = () => {}

  render () {
    React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {props: newProps})
      }
    })
  }
}

(<Toggle>
  <Toggle.On>This is on.</Toggle.On>
  <Toggle.Off>This is off.</Toggle.Off>
</Toggle>)
```

## Flexible Compound Component

Use context API to make values available to not immediate children component.

```javascript
const ToggleContext = React.createContext({
  on: false,
  toggle: () => {},
})

class Toggle extends React.Component {
  // 
  static Provider = ToggleContext.Provider
  static Consumer = ToggleContext.Consumer

  static On = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? children : null)}
    </ToggleContext.Consumer>
  )

  static Off = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? null : children)}
    </ToggleContext.Consumer>
  )

  toggle = () => {}

  // State must come after toggle
  state = {on: false, toggle: this.toggle}

  // Or create a context sub state
  state = { context: {
    on: false, toggle: this.toggle
  }}

  render () {
    // Create a value and assign it to Provider might cause some performance issue.
    const value = {
      on: this.state.on,
      toggle: this.toggle
    }

    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}

(<Toggle>
  <Toggle.On>This is on.</Toggle.On>
  <div><Toggle.Off>This is off.</Toggle.Off></div>
</Toggle>)
```
