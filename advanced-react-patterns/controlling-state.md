# Controlling State

- [State Initializer](#state_initializer)
- [State Reducer](#state_reducer)
- [State Reducer with Change Types](#state_reducer_with_change_types)
- [Conrol Props](#control_props)

## State Initializer

Let the user provides initial state and have control over reseting the state.

```javascript
class Toggle extends PureComponent {
  static defaultProps = { on: false }

  initialState = { on: this.props.initialOn }
  state = this.initialState

  reset () {
    this.setState(initialState, () => {
      this.props.onReset(this.state.on)
    })
  }

  ...

}
```

## State Reducer

Render props allow users to be in control over the UI based on component state. State reducer allows users to be in control over state update logic based on actions.

Any time there's an internal change in state, we first call a stateReducer prop with the current state and the changes. Whatever is returned is what we use in the setState call.

```javascript
class Toggle extends Component {
  static defaultProps = {
    // Default stateReducer that always returns the changes.
    stateReducer: (state, changes) => changes
  }

    // The setState replacement that always checks with props.stateReducer first before applying the changes.
    internalSetState = (updater, callback) => {
      this.setState(currentState => {
        const changes = typeof updater === 'function'
          ? updater(currentState)
          : updater
        
        const reducedChanges = this.props.stateReducer(state, changes) || {}

        // Return null to prevent changing state if no changes.
        return Object.keys(reducedChanges).length > 0
          ? reducedChanges
          : null
      }, callback)
    }
  }
}
```

If the setState logic depends on the `state`, always use a updater function in `setState` to avoid issues with setState batching.

## State Reducer with Change Types

Add a `type` prop (just like redux action type) to the changes to control the state based on different types.

```javascript
// 
class Toggle extends Component {
  static defaultProps = {
    initialOn: false,
    onReset: () => {},
    stateReducer: (state, changes) => changes,
  }
  
  // Create static class properties for change types.
  static stateChangeTypes = {
    reset: '__toggle_reset__',
    toggle: '__toggle_toggle__',
  }

  // changes should include the `type`
  internalSetState(changes, callback) {
    this.setState(state => {
      // Handle function setState call
      const changesObject =
        typeof changes === 'function' ? changes(state) : changes

      // Apply state reducer
      const reducedChanges =
        this.props.stateReducer(state, changesObject) || {}

      // Remove the `type` to avoid necessary re-render.
      const {type: ignoredType, ...onlyChanges} = reducedChanges

      // Return null if there are no changes to be made
      return Object.keys(onlyChanges).length ? onlyChanges : null
    }, callback)
  }

  // Those method to change states should set change types
  reset = () =>
    // the first argument is the `change` which should include `type`
    this.internalSetState(
      {...this.initialState, type: Toggle.stateChangeTypes.reset},
      () => this.props.onReset(this.state.on),
    )
  
  // The toggle can use `type` to set different kinds of `type`,
  // such as `force` toggle or normal toggle
  toggle = ({type = Toggle.stateChangeTypes.toggle} = {}) =>
    this.internalSetState(
      ({on}) => ({type, on: !on}),
      () => this.props.onToggle(this.state.on),
    )

}

// the stateReducer would make dicisions by checking the changes.type
toggleStateReducer = (state, changes) => {
  if (changes.type === 'forced') {
    return changes
  }
  if (this.state.timesClicked >= 4) {
    return {...changes, on: false}
  }
  return changes
}

<Toggle stateReducer={toggleStateReducer}>
  {({toggle}) => (
    // Set the `type` to use 'forced' toggle.
    <button onClick={() => toggle({type: 'forced'})} />
  )}
</Toggle>
```
## Control props

Let the user control the values of state just like controlled inputs. You can update the state of the component from outside, completely uncontrolled by the component.

```javascript
class Toggle extends Component {
  state = {on: false}

  // The `isControlled` method tests if the prop is given from the user.
  isControlled = (prop) => {
    return this.props[prop] !== undefined // or use isNil to check null as well
  }

  // The `getState` method comnbine the state props from the `state` and `props`.
  getState = (state = this.state) => {
    return Object.entries(state).reduce(
      (combinedState, [key, value]) => {
        if (this.isControlled(key)) {
          combinedState[key] = this.props[key]
        } else {
          combinedState[key] = value
        }

        return combinedState
      }, {})
  }
  // From now on, replace `this.state` with `this.getState` to get the correct state.

  ...
}
```

- You can also use `componentWillReceiveProps` to synchronize the state and props. However, now there are two sources of truth and it is hard to maintain. BTW, the `componentWillReceiveProps` is depricated.
- By using render props, we only have a single source of truth.

