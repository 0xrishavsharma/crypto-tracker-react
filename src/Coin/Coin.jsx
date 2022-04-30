import React from 'react';
import './Coin.scss';


const Coin = ({id, name, image, symbol, price, volume, marketCap, priceChange,marketCapRank}) => {
  return (
        <div className='coin-wrapper'>
            <div className="coin-row">
                <div className="coin">
                    <p>{id}</p>
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol.toUpperCase()}</p>
                    <p className="marketCapRank">{marketCapRank}</p>
                </div>
                <div className="coin-data">
                    <p className='coin-price'>₹{price.toLocaleString()}</p>
                    <p className="coin-volume">₹{volume.toLocaleString()}</p>
                </div>
                <div className="priceChange">
                    {priceChange < 0 ? (
                        <div className="coin-percent red"> {priceChange.toFixed(2)}%</div>
                    ): (
                        <div className="coin-percent green"> {priceChange.toFixed(2)}%</div>
                    )}
                </div>
                <div className="coin-marketcap">
                    ₹{marketCap.toLocaleString()}
                </div>
            </div>
        </div>
  );
};

export default Coin;