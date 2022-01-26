import React from "react";
import "./cardStyle.css";

function Card({ bankName, creditCatrtNumber, expirationDate, name }) {
  return (
    <div className="Card">
      <h1 className="BankName">{bankName}</h1>
      <div className="CreditNumber">
        <h2 className="Number">{creditCatrtNumber}</h2>
        <span>1234</span>
      </div>
      <span className="ValidAndDate">VALID THRU {expirationDate}</span>
      <h2 className="Name">{name}</h2>
    </div>
  );
}
export default Card;
