# So in this project I practiced,

## 1. Routing (Browser Router, Routes, Route)

- Things remained:
  - Nested and Dynamic Routing.

### Navlinks vs Links vs Anchor tag

## 2. Hooks

- Hooks are functions that let you “hook into” React state and lifecycle features from function components.

- ### Practiced Hooks
  - useState(initial value): Alternate for making variables in react.
  - useEffect(callback fn, dependency): Only runs script after react has rendered the component, Provides a controlled environment for running scripts, made for API calling etc. Because calling an API everytime a components renders is wastage.

- ### Remaing Hooks that I should know:
  - useRef(initial value "mostly null")
  - Often used for:
    - Accessing DOM elements
    - Storing mutable values that persist across renders
    
  - "_Not yet rendered means no dom tree yet_", that's why we use reference (that we create with useRef hook) inside useEffect so we can make sure that we are accessing a DOM node only when it exists, otherwise useRef won't work.
