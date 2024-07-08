import React from 'react';
import ReactDOM from 'react-dom';

import './test.css';

const App : React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(<App />);
ReactDOM.render(<App />,
  document.getElementById('root')
  );