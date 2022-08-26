import { useEffect, useState } from 'react';

import LoaderComp from './components/Loader';
import { Home } from './views/home/Home';

import './App.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const timer = setTimeout(() => {
        setLoading(false)
      }, 2000);
      return ()=> clearTimeout(timer);
  }, [loading]);

  return (
    <div className="App">
      {loading? <LoaderComp/> : <Home />}   
    </div>
  );
}

export default App;
