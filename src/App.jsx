import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Hambuger from "./components/Hambuger";
import { Hero } from "./components/Hero";
import { QuickRead } from "./components/QuickRead";
import { OlderPosts } from "./components/OlderPosts";
import { PorpularTags } from "./components/PorpularTags";
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";

function App() {
  const [isSearchVisible, setSearchVisibility] = useState(false);
  const [isHambugerVisible, setHambugerVisibility] = useState(false);

  const handleHaburgerClick = () => {
    setHambugerVisibility(!isHambugerVisible);
  };

  const handleSearchVisibility = () => {
    setSearchVisibility(!isSearchVisible);
  };

  return (
    <div>
      <Navbar
        handleSearchVisibility={handleSearchVisibility}
        handleHaburgerClick={handleHaburgerClick}
      />
      {isSearchVisible ? (
        <Searchbar handleSearchVisibility={handleSearchVisibility} />
      ) : (
        ""
      )}
      {isHambugerVisible ? <Hambuger /> : ""}
      <Hero />
      <QuickRead />
      <OlderPosts />
      <PorpularTags />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
