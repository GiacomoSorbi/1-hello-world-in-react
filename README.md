# README #

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to simply create a typical base UserInfo component in React.js.

Feel free to use whatever props you wish, just be sure to add at least 'firstName', 'lastName' and a 'profileImg' picture (hosted externally might simplify) in your 'render()' method.

Remember that if you use multiple elements, you need to wrap them all in the 'render()' method, as you can return only a single ancestor element (albeit with as many child element as you want).

Examples:



```
//good
class App extends Component {
  render() {
    return (
    <div>
      Hello, world!
    </div>
    );
  }
}
```

```
//bad
class App extends Component {
  render() {
    return (
    <h3>
      Hello, world!
    </h3>
    <p>
      I am Johnny
    </p>
    );
  }
}
```

```
//good again
class App extends Component {
  render() {
    return (
    <div>
      <h3>
        Hello, world!
      </h3>
      <p>
        I am Johnny
      </p>
    </div>
    );
  }
}
```
