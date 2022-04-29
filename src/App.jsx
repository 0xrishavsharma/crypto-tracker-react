import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data);
      // console.log(res.data);
    }).catch(err => console.log(err))
    },[]);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Currency Tracker</h1>
      </header>
      <form>
        <input type="text" name="" id="" placeholder='Search your coin' />
      </form>

      

    </div>
  )
}

export default App
