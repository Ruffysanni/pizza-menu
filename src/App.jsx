import "./App.css";
import "./style.css";
// import Pizza from "./components/Pizza";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container">
      <Header />
      <br />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
