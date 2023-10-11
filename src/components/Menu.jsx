import Pizza from "./Pizza";
import pizzaData from "../Data";

export default function Menu() {
  const datalength = pizzaData.length;
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        {/* <p>
          Authentic italian cuisine. 6 creative dishes to choose from. all from
          our stone oven, all organic, all delicious.
        </p> */}
        {datalength > 0 ? (
          <>
            <p>
              Authentic italian cuisine. 6 creative dishes to choose from. all
              from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza key={pizza.id} pizzaObj={pizza} />
              ))}
            </ul>
          </>
        ) : (
          <p>We are currently closed...</p>
        )}
      </main>
    </>
  );
}
