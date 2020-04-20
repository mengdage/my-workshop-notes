# React Renders: Architecture

## Division of responsibilities

### chart component
1. Gets passed in raw data as prop.
2. Translates raw data to screen space.
3. Renders the calculated data.
4. Manages state for interactions that don't require redrawing of the chart (hover, click).

### root component
- Manages updates to raw data.
- Manages state for interactions that require redrawing of charts (filter, aggregate, sort, etc.).

## Separation
Have D3 do the calculation and have React do the rendering.
