import React, { FormEventHandler } from "react";
import DuckDuckGoLogo from "../../assets/duckduckgo.svg";
import "./hero.scss";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  const [search, setSearch] = React.useState("");

  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    window.location.href = `https://duckduckgo.com/?q=${search}&t=h_&ia=web`;
  };

  return (
    <div className="hero">
      <div className="background-image">
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLHZc?ver=4a23" alt="Background image" />
      </div>

      <form className="searchbar" onSubmit={handleFormSubmit}>
        <img src={DuckDuckGoLogo} alt="dd logo" />
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Enter search..." />
        <FiSearch />
      </form>
    </div>
  );
};

export default Hero;
