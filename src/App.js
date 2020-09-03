import React, {Suspense} from 'react';
import RoutesComponent from './routes/RoutesComponent';
import Loading from './components/Loading';
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RoutesComponent />
      </Suspense>
    </div>
  );
}

export default App;
