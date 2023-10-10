/* eslint-disable react/prop-types */
export default function Pizza(props) {
  console.log(props);
  return (
    <>
      <div className="pizzas">
        <img src={props.photoName} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingrdients}</p>
          <span>price: {props.price}</span>
        </div>
      </div>
    </>
  );
}
