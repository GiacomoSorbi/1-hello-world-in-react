# README #

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

##

You are tasked to simply create a typical "hello world" app in React.js.

Feel free to use whatever HMTL elements you wish to use in your 'render()' method, just remember that if you use multiple ones, you need to wrap them all, as you can return only a single ancestor element (albeit with as many child element as you want).

Examples:

```javascript
//good
ReactDOM.render(
  <div>
    Hello, world!
  </div>,
  document.getElementById('app')
);
```

```javascript
//bad
ReactDOM.render(
  <h3>
    Hello, world!
  </h3>
  <p>
    I am Johnny
  </p>,
  document.getElementById('app')
);
```

```javascript
//good again
ReactDOM.render(
  <div>
	<h3>
      Hello, world!
	</h3>
	<p>
	  I am Johnny
	</p>
  </div>,
  document.getElementById('app')
);
```