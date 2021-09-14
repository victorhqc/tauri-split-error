import React from 'react';
// To fix, comment the following line.
const A = React.lazy(() => import('./A'));

// To fix uncomment this.
// import A from './A';

const App = () => {
  return (
    <React.Suspense fallback={() => <p>Loading...</p>}>
      <p>Hello World</p>
      <A />
    </React.Suspense>
  );
};

export default App;
