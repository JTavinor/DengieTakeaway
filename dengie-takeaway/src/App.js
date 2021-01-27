import pizzaBanner from "./assets/pizzaBanner.jpg";
import "./App.css";
import CuisineCard from "./components/cuisineCard";
import cuisines from "./data/cuisines";

function App() {
  console.log(cuisines);
  return (
    <CuisineCard
      title={cuisines[0].name}
      backgroundImage={cuisines[0].background}
    />
  );
}

export default App;
