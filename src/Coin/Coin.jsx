import React from 'react'


const Coin = ({id, name, image, symbol, price, cap}) => {
  return (
        <div className="coin-row">
            <div className="coin">
                <p>{id}</p>
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className='coin-price'>₹{price}</p>
                <p className="coin-cap">₹{cap.toLocaleString()}</p>
            </div>
        </div>
  )
}

export default Coin