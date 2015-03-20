# Adventures in React  

*Start Sinatra Server on port 4000*

*I strongly suggest installing Shotgun and running `shotgun app.rb -p 4000`*


Branches in order of experimenting. Each branch builds off of the previous.

## Master

Simple React with loading some Ajax data and polling for changed


## precompile-jsx

Introduces react dev tools to watch components/src for changes and compile them to components/build.

To build the JSX components from the `src` directory into the `build` directory, run:

```
jsx --watch components/src components/build
```

## update-input

This introduces updating via the server and binding the return values to the DOM.

When a value is passed to the server, some new values are calculated with simple math, and all the children of the `execution_header` component are updated if needed.



