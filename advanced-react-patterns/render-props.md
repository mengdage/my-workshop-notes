# Render Props

A render prop is a function prop that a component uses to know what to render.

The component can focus on managing states. It provides an interface for the user to render what they want by using these states.

```javascript
<Toggle onToggle={handleToggle}>
  {({on, toggle}) => (
    <div>
      ...
    </div>
  )}
</Toggle>
```

```javascript
class Toggle extends PureComponent {
  state = {on: false}
  toggle = () => {}
  render () {
    return this.props.children({on: this.state.one, toggle: toggle})
  }
}
```

## Render Props vs Component Injection

```javascript
// example of component injection
const ToggleChild = ({on, toggle}) => (<div>...</div>)

class Toggle extends PureComponent {
  state = {on: false}
  toggle = () => {}
  render () {
    return React.createElement(this.props.childre,
      {on: this.state.one, toggle: toggle}
    )
  }
}

<Toggle onToggle={handleToggle}>
  {ToggleChild}
</Toggle>
```

- ToggleChild can use lifecycle methods if you make it a class.
- Calling createElement adds a layer of nesting in the React tree and causes extra cost.
- Render props can do what component injection does.

```javascript
<Toggle onToggle={handleToggle}>
  {props => (<ToggleChild {...props} />)}
</Toggle>
```

## Render Props vs Compound Component

- Compound component hides the details and states. Interactions between the paren and children are implicit. If users don't care about these, use compound component.

- If the user needs more details and have full control over how things are rendered, use render props instead.

- Build the base component by using render props. And build compound component on top of that.

## Prop Collection & Prop Setters

```javascript
class Toggle extends React.Component {
  state = {on: false}
  toggle = () => {}

  // Prop setter returns what's passed and add extra properties.
  getTogglerProps = ({onClick, ...props} = {}) => ({
    'aria-expanded': this.state.on,
    onClick: callAll(onClick, this.toggle),
    ...props,
  })

  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
      // Prop collection groups several related props together.
      togglerProps: {
        'aria-expanded': this.state.on,
        onClick: this.toggle
      },
      getTogglerProps: this.getTogglerProps,
    }
  }
  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

(<Toggle onToggle={onToggle}>
    {({on, getTogglerProps}) => (
      <div>
        <Switch {...getTogglerProps({on})} />
        <hr />
        <button
          {...getTogglerProps({
            'aria-label': 'custom-button',
            onClick: onButtonClick,
            id: 'custom-button-id',
          })}
        >
          {on ? 'on' : 'off'}
        </button>
      </div>
    )}
  </Toggle>)
```



## Extra Readings

1. [common questions about render props](https://blog.kentcdodds.com/answers-to-common-questions-about-render-props-a9f84bb12d5d)

2. [Use a Render Prop!](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)
