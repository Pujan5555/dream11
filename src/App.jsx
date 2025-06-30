import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Players from "./Players";
import { useState } from "react";
import PropTypes from "prop-types";
import Selected from "./Selected";
import Footer from "./Footer";

function App() {
  const [tokens, setTokens] = useState(0);
  const claimTokens = () => {
    // Logic to claim tokens
    setTokens(tokens + 7000000); // Example: add 7000000 tokens
  };
  const [selectedTab, setSelectedTab] = useState("Player List");

  const [selected, setSelected] = useState([]);
  const selectPlayer = (player) => {
    if (selected.length < 6 && !selected.some((p) => p.id === player.id) && player.base_price <= tokens) {
      setSelected([...selected, player]);
      setTokens(tokens - player.base_price); // Deduct the base price from tokens
    } else {
      alert("Something went wrong! Please check your selection.");
    }
  };
  const removePlayer = (playerId) => {
    const updatedSelected = selected.filter((p) => p.id !== playerId);
    const removedPlayer = selected.find((p) => p.id === playerId);
    if (removedPlayer) {
      setTokens(tokens + removedPlayer.base_price); // Refund the base price to tokens
    }
    setSelected(updatedSelected);
  };
  return (
    <>
      <Navbar coins={tokens}></Navbar>
      <Banner claimTokens={claimTokens}></Banner>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-800 py-3 px-4 md:px-12 w-full md:w-4/5 mx-auto">
          <h1 className="mb-2 md:mb-0">Available Players</h1>
          <div className="space-x-0 md:space-x-4 space-y-2 md:space-y-0 flex flex-col md:flex-row w-full md:w-auto">
            <button
              className={`px-4 py-2 rounded transition w-full md:w-auto ${selectedTab === "Player List"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                }`}
              onClick={() => setSelectedTab("Player List")}
            >
              Player List
            </button>
            <button
              className={`px-4 py-2 rounded transition w-full md:w-auto ${selectedTab === "Selected Players"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-100"
                }`}
              onClick={() => setSelectedTab("Selected Players")}
            >
              Selected Players
            </button>
          </div>
        </div>
        <div className="w-full">
          {selectedTab === "Player List" ? (
            <Players selectPlayer={selectPlayer}></Players>
          ) : (
            <Selected selected={selected} removePlayer={removePlayer}></Selected>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
App.propTypes = {
  claimTokens: PropTypes.func.isRequired,
  tokens: PropTypes.number.isRequired,
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};
export default App;
