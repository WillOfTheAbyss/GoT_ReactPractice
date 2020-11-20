import React, { useEffect, useState } from "react";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage/";
import Spinner from "../spinner/";
import "./randomChar.css";

const RandomChar = () => {

  const gotService = new GotService();

  const [char, getChar] = useState({});
  const [loading, toogleLoading] = useState(true);
  const [error, toogleError] = useState(false);


  useEffect(() => {
    updateChar();
    let timerId = setTimeout(function tick() {
        updateChar();
        timerId = setTimeout(tick, 2000);
    }, 2000);
    return () => {
        clearTimeout(timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateChar = () => {
    const id = Math.round(Math.random()*140+25);
    gotService.getCharacter(id)
        .then((data) => {
            getChar(data);
            toogleLoading(!loading);
        })
        .catch(() => {
            toogleError(!error);
            toogleLoading(!loading);
        });
  }

  

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const  content= !(loading || error) ? <CharList char={char} /> : null;

    return (
        <div className="random-block rounded">
            {spinner}
            {errorMessage}
            {content}
        </div>
    );
  
}

const CharList = ({ char }) => {
  const { name, gender, born, died, culture } = char;

  return (
    <>
      <h4> Random Character: {name} </h4>{" "}
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term"> Gender </span> <span> {gender} </span>{" "}
        </li>{" "}
        <li className="list-group-item d-flex justify-content-between">
          <span className="term"> Born </span> <span> {born} </span>{" "}
        </li>{" "}
        <li className="list-group-item d-flex justify-content-between">
          <span className="term"> Died </span> <span> {died} </span>{" "}
        </li>{" "}
        <li className="list-group-item d-flex justify-content-between">
          <span className="term"> Culture </span> <span> {culture} </span>{" "}
        </li>{" "}
      </ul>{" "}
    </>
  );
};

export default RandomChar;