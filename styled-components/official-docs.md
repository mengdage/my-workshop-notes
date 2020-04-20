# Styled Components Official Docs

## Passed props

Styled components pass all props to the underlying DOM nodes.

## Adapting based on props

Funtions can be used in styled components' template literal.

```javascript
const StyledButton = styled.button`
  color: ${props => props.primary ? 'blue' : 'white'};
`
```

## Styling regular React components

```javascript
const Link = ({ className, children }) => (...)

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

```

## Extending styled components

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
`;

// We're extending Button with some extra styles
const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;
```

## Attaching attributes

```javascript
const Input = styled.input.attrs({
  // we can define static props
  type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
```

## Animation

```javascript
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
```

## Theming

Use context API to provide a theme to all React component underneath.

### Use ThemeProvider and provide theme props

```javascript
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen'
};

render(
  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
```

### The theme prop could be a function

The functional themes will receive the parent theme, which is from another <ThemeProvider> higher up the tree.

```javascript
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: 'palevioletred',
  bg: 'white'
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

render(
  <ThemeProvider theme={theme}>
    <div>
      <Button>Default Theme</Button>

      <ThemeProvider theme={invertTheme}>
        <Button>Inverted Theme</Button>
      </ThemeProvider>
    </div>
  </ThemeProvider>
);
```

### Get the them without styled components

Use `withTheme` HOC to get the theme from the closet <ThemeProvider>.

```javascript
import { withTheme } from 'styled-components'

class MyComponent extends React.Component {
  render() {
    console.log('Current theme: ', this.props.theme);
    // ...
  }
}

export default withTheme(MyComponent)
```

### Provide theme without <ThemeProvider>

A theme can also be passed down to a styled component using the theme prop.

```javascript
<Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
```
