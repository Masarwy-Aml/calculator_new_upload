import { useState } from 'react';
import './App.css';


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddition}>+</button>
        <span style={{ marginLeft: '10px' }}>= {result}</span>
      </div>
    </div>
  );
}

export default App;
