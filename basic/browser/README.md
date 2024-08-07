### what happen when enter url in browser

1. DNS lookup
2. TCP connection/ TLS handshake
3. HTTP(S) request
4. HTTP response
5. parse HTML

### key render route in browser

1. build DOM tree
   - parse HTML
   - DOM tree is the object representation of html in the browser
   - Sequential execution
   - loaded async: css link, image, scripts are async or defer (async: load and execute, defer: load and wait)
   - pre scanner thread
2. build CSSOM tree
   - CSSOM tree is the object representation of css in the browser
3. merge DOM tree and CSSOM tree to render tree
4. layout
   - calculate the visible nodes
   - then calculate the position of each element in the render tree
5. paint & repaint

### reflow & repaint

reflow: calculate the position, size, shape of each element

- the key is changing of the structure

repaint: draw the element on the screen

- the key is changing of the style
