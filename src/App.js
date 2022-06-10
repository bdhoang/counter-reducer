import "./App.css";
import CCount from "./components/CCount";
import FCount from "./components/FCount";
import ReducerCounter from "./components/ReducerCounter";

function App() {
  return (
    <div className="App">
      <FCount />
      <CCount />
      <ReducerCounter />
    </div>
  );
}

export default App;
