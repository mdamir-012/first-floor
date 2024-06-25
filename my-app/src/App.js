import "./App.css";
import Navbar from "./Components/Navbar";
import TopHero from "./Components/TopHero";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="text-3xl font-bold">
      <Navbar/>
      <TopHero/>
      <Cards/>
    </div>
  );
}

export default App;
