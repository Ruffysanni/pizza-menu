/* eslint-disable react/prop-types */
export default function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  if (pizzaObj.soldOut) return null;
  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt={name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingrdients}</p>
          <span>price: {pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}
