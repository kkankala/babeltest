"use strict";

console.log('test indexjs');

var test = function test() {
  console.log('test arrow function');
}; // import _ from 'lodash';


function component() {
  var element = document.createElement('div'); //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.innerHTML = 'Hello World';
  test();
  return element;
}

document.body.appendChild(component());
