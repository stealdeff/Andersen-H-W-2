Simple Calculator (simple_calculator.js)
TODO:
Write a function add that will work like that:
add(1,2) // 3
add(1)(2) // 3

H/A(myFilter.js)
Write your own implementation of the built-in array function filter. Call the function myFilter and make it so that any array can use this function as a “native” one. It must take a callback function as parameters and an optional parameter as an object that will be used as this in internal calls to this callback function.
Ultimately, your myFilter implementation should work exactly like the built-in filter method. The callback function passed as a parameter must also be called with the same parameters as the original (element, index, array).

H/A (globalObj.js)
It is necessary to reflash the global object a little.
Consider these three functions:

window.alert(); // confirm()
window.prompt(); // alert()
window.confirm(); // prompt()

When calling alert(), the logic confirm(), prompt - alert(), confirm() - prompt() should work, feel free to use your own order.
