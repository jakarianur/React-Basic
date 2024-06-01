import React from  'react';
import ReactDOM from 'react-dom/client';
function Hello (props)
{
  return <h1>Hello Jakaria!</h1>
}
const contain = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello>);
