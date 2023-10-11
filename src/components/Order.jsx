/* eslint-disable react/prop-types */
export default function Order({ closeHours }) {
  //   const closeHours = 22;
  return (
    <div className="order">
      <p>
        We are currently open until {closeHours}:00pm. Come visit or roder
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
