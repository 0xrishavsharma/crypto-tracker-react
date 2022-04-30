import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Coin from './Coin/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data);
      // console.log(res.data);
    }).catch(err => console.log(err))
    },[]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter( coin => {
    coin.name.toLowerCase().includes(search.toLowerCase())
  })

  

  return (
    <div className="App">
      <div className='coin-search'>
        <header className="App-header">
          <h1>Crypto Currency Tracker</h1>
        </header>
        <form>
          <input type="text" onChange={handleChange} placeholder='Search your coin' />
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol}  price={coin.current_price} cap={coin.market_cap} />
      })}
    </div>
  )
}

export default App;
