import pizzaBanner from "./assets/pizzaBanner.jpg";
import "./App.css";
import CuisineCard from "./components/cuisineCard";
import cuisines from "./data/cuisines";
import CuisineList from "./components/cuisineList";

function App() {
  return (
    <CuisineList cuisines={cuisines} />
    // <CuisineCard
    //   title={cuisines[0].name}
    //   backgroundImage={cuisines[0].background}
    // />
  );
}

export default App;
