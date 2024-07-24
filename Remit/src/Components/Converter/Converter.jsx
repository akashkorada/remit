import React, { useState } from "react";
import "./Converter.css";

function Converter() {
  const [usdValue, setUsdValue] = useState(1000);
  const [inrValue, setInrValue] = useState(usdValue * 83.88);
  const [exchangeRate, setExchangeRate] = useState(83.88);

  const handleUsdChange = (e) => {
    const newValue = e.target.value.trim();
    if (newValue!== '' &&!isNaN(parseFloat(newValue).toLocaleString())) {
      setUsdValue(parseFloat(newValue));
      setInrValue(parseFloat(newValue) * exchangeRate);
    } else {
      setUsdValue(0);
      setInrValue(0);
    }
  };

  const handleInrChange = (e) => {
    const newValue = e.target.value.trim();
    if (newValue!== '' &&!isNaN(parseFloat(newValue).toLocaleString())) {
      setInrValue(parseFloat(newValue));
      setUsdValue(parseFloat(newValue) / exchangeRate);
    } else {
      setInrValue(0);
      setUsdValue(0);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <h1>
            Fast, <span> Safe & Secure </span>
          </h1>
          <p>Swiftly convert USD to INR with great prices</p>
        </div>
        <div className="buttons">
          <button className="btn">Get Started!</button>
          <button className="btn">Business account!</button>
        </div>
      </div>
      <div className="form">
        <div className="header">
          <h2>
            Make your money move @ <span> Zero Charges </span>
          </h2>
        </div>
        <div className="input-group">
          <label htmlFor="you-send">You send</label>
          <div className="input-container">
          <span className="prefix">$</span>
            <input
              type="number"
             className="no-spinners"
              value={usdValue}
              id="input-field"
              onChange={handleUsdChange}
              style={{ paddingLeft: 20 }} 
              
            />
            <span className="flag-container">
              <img
                src="https://flagcdn.com/us.svg"
                width="20"
                height="15"
                alt="USA Flag"
              />
              USD
            </span>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="receiver-get">
            Receiver get <span>1 USD = {exchangeRate} INR</span>{" "}
          </label>
          <div className="input-container">
            <span className="prefix" >₹</span>
            <input
              type="number"
              className="no-spinners"
              value={inrValue}
              id="input-field"
              onChange={handleInrChange}
              style={{paddingLeft: 20}}
            />
            <span className="flag-container">
              <img
                src="https://flagcdn.com/in.svg"
                width="20"
                height="15"
                alt="India Flag"
              />
              INR
            </span>
          </div>
        </div>
        {/* <p>1 USD = {exchangeRate} INR</p> */}
        <button className="btn-primary">Transfer Now</button>
        <p>Schedule Transfer</p>
      </div>
    </div>
  );
}

export default Converter;