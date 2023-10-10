import Pizza from "./Pizza";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        <Pizza
          name="Pizza Focaccia"
          photoName="pizzas/focaccia.jpg"
          ingrdients="Bread with italian olive oil and rosemary"
          price={100}
        />
        <Pizza
          name="Pizza Margherita"
          photoName="pizzas/margherita.jpg"
          ingrdients="Tomato and mozarella"
          price={120}
        />
      </main>
    </>
  );
}
