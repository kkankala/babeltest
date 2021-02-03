console.log('test indexjs');
const test = () => {
  console.log('test arrow function');
};

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello World';
  test();
  return element;
}

document.body.appendChild(component());
