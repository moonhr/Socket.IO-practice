import React from 'react';
import ReactDOM from 'react-dom';
import app from './add.module';
import muliply from './muliply.module';

const App : React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

const c = app(2,3);
const d = muliply(4,5);
const e = c + d;

console.log(e);