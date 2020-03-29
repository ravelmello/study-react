import React from 'react';

import './global.css';
import Routes from './routes/routes';

function App() {

  return(
    <Routes />
  );

 /*  const user = "Ravel";
  const [counter, setCounter] = useState(0); // returns Array[value, functionUpdate]

  function increment(){
    setCounter( counter + 1); // Alter the state of const Counter using the function setCounter
  }

  return (
    <div className="App">
      <Header>
        Contador = {counter}
      </Header> 
      <button onClick= {increment}>Incrementar</button>
    </div>
  ); */
}

export default App;
