import React, { useState } from "react";
import "./styles.css";
import { datalist } from "./datalist";
const data = Object.keys(datalist);

export default function App() {
  var [genre, setGenre] = useState("All");

  function genreClickHandler(catagory) {
    setGenre(catagory);
  }
  return (
    <div className="App">
      <nav>
        <h1>Clear Music</h1>
        <div>
          {data.map(function (catagory) {
            return (
              <button
                key={catagory}
                className="ButtonCat"
                onClick={() => genreClickHandler(catagory)}
              >
                {catagory}
              </button>
            );
          })}
        </div>
      </nav>
      <p>Your #1 place to find good music recommendation!</p>
      <div className="List">
        {datalist[genre].map(function (music) {
          return (
            <div key={music.name} className="Lstitem">
              <img className="img" src={music.img} alt="unsplash" />
              <div className="MusicName"> {music.name}</div>
              <div className="MusicArtist"> By: {music.artist}</div>
              <div className="Rating">
                {" "}
                Rating: {music.rating}
                <i className="bx bxs-star bx-sm"></i>{" "}
              </div>
              <div className="Link">
                <a className="link" href={music.link}>
                  <i className="bx bxl-spotify bx-md link"></i>
                </a>
              </div>
              <h1 className="dash">-------------------------</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
