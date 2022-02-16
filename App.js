import logo from "./logo.svg";
import "./App.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Taco", price: 2.25, qty: 2 },
  { id: 2, name: "Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Rice", price: 3.5, qty: 1 },
];

function App() {
  return (
    <div>
      <Cart initialitems={items} />
    </div>
  );
}

export default App;
