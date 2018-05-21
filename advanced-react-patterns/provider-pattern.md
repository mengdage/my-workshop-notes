# Provider Pattern

## Props Drilling

```javascript
const Layer1 = ({on, toggle}) => <Layer2 on={on} toggle={toggle} />
const Layer2 = ({on, toggle}) => (
  <Fragment>
    {on ? 'The button is on' : 'The button is off'}
    <Layer3 on={on} toggle={toggle} />
  </Fragment>
)
const Layer3 = ({on, toggle}) => <Layer4 on={on} toggle={toggle} />
const Layer4 = ({on, toggle}) => <Switch on={on} onClick={toggle} />

return (
  <Toggle onToggle={onToggle}>
    {({on, toggle}) => <Layer1 on={on} toggle={toggle} />}
  </Toggle>
)
```

It's inconvenient to maintain the `toggle` when modifying the logic, such as deleting the `toggle` in any layer.

## Provider with Context API

```javascript
const ToggleContext = React.createContext({})

class Toggle extends Component {
  ...
  static Consumer = ToggleContext.Consumer
  state = {
    on: false,
    // Put all properties and methods needed by children to avoid unnecessary re-render.
    reset: this.reset
  }

  render () {
    return(
      <ToggleContext.Provider value={this.state}>
        {this.children(this.state)}
      </ToggleContext.Provider>
    )
  }
}

function Title() {
  return (
    <div>
      <h1>
        <Toggle.Consumer>
          {toggle => `Who is ${toggle.on ? '🕶❓' : 'awesome?'}`}
        </Toggle.Consumer>
      </h1>
      <Subtitle />
    </div>
  )
}
```
