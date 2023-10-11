/* eslint-disable react/no-unescaped-entities */
import Order from "./Order";
export default function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHours={closeHours} />
        ) : (
          <p>
            We are happy to welcome you between {openHours}:00am and{" "}
            {closeHours}
            :00pm
          </p>
        )}
      </footer>
    </>
  );
}
