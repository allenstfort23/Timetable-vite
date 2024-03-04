import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Jamaica 🇯🇲</h1>
      <h3>
        Welcome to Jamaica, Allen! Check out this calendar to get to know the
        country and see all the sights during your stay
      </h3>
      <Calendar />
    </div>
  );
};

export default App;
