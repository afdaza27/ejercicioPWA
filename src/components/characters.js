import React, { useEffect, useState } from "react";
import Character from "./character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("characters") === null) {
        setMessage("Oops! Something went wrong, try again later");
      } else {
        setCharacters(localStorage.getItem("characters"));
        setMessage("");
      }
    } else {
      const URL =
        "https://gateway.marvel.com:443/v1/public/characters?apikey=95fb892941bed8d6dd01776f953201dc&hash=169f619e3fa1e16d3fb13724227b83ad&ts=hola";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setCharacters(res.data.results);
          setMessage("");
          localStorage.setItem("characters", res.data.results);
        });
    }
  }, []);
  return (
    <div className="container-fluid">
      <h1 className="text-center">Marvel Characters</h1>
      <h3>{message}</h3>
      <div className="row">
        {characters.map((c) => (
          <Character key={c.id} character={c} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
