import React, {useState, useEffect} from 'react';

import Row from './components/row/Row';

import { generateRandomData } from './utils/generateRandomData';
import { getNextTickData } from './utils/getNextTickData';

import './App.css';

function App() {
  const ARRAY_SIZE:number = 50;
  const [data, setData] = useState(Array.from({length: ARRAY_SIZE},()=> Array.from({length: ARRAY_SIZE}, () => 0)));

  useEffect(() => {
    let randArr: number[][] = generateRandomData(ARRAY_SIZE);
    setData(randArr);

    const interval = setInterval(() => {
      nextTickUpdate();
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Call the function to generate the new data in the next tick and update the state
  const nextTickUpdate = () => {
    setData(prevData => getNextTickData(prevData));
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          data.map((rowData, ix) => {
            return <Row key={ix} rowData={rowData}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
