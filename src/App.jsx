import "tachyons";
import "./App.scss";
import { plants } from "./data/plants";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import axios from "axios";

function App() {
  let [plantList, setPlantList] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://house-plants2.p.rapidapi.com/all-lite",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
      },
    };

    let fetchPlants = async () => {
      try {
        setIsLoading(true);
        const response = await axios.request(options);
        setPlantList(response.data);
      } catch (error) {
        console.log(`there was an error ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlants();
  }, []);

  let searchPlants = (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    setSearchQuery(searchTerm);
  };

  const filteredPlants =
    searchQuery === ""
      ? plantList
      : plantList.filter(
          (plant) =>
            (plant["Latin name"] || "").toLowerCase().includes(searchQuery) ||
            (plant["Common name"]?.[0] || "")
              .toLowerCase()
              .includes(searchQuery)
        );

  return (
    <div className="tc app">
      {console.log("rendering")}
      <h1 className="title">Plant Finder</h1>
      <div className="results-count">{`${filteredPlants.length} 🪴 Matches`}</div>
      <SearchBox search={searchPlants} />

      {isLoading ? (
        "Loading ... "
      ) : (
        <CardList items={filteredPlants} searchTerm={searchQuery} />
      )}
    </div>
  );
}

export default App;
