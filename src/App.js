import "./App.css";
import { useEffect, useState } from "react";

import UserCard from "./components/UserCard/UserCard";
import Navbar from "./components/Navbar/Navbar";

import helpers from "./helpers";

const App = () => {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      let results = await fetch(
        "https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo"
      );
      let data = await results.json();
      console.log("data: ", data);
      console.log("user 1: ", data.results[0]);

      setUsers(data.results);
    };

    getUsers();
  }, []);

  const getFirstNames = (arr) => {
    let firstNames = [];
    for (let i = 0; i < arr.length; i++) {
      firstNames.push(arr[i].name.first);
    }

    return firstNames;
  };

  const getRandomSantas = () => {
    let firstNames = getFirstNames(users);

    let pairs = helpers.match(firstNames);
    setMatches(pairs);
  };

  console.log("matches: ", matches);
  console.log("state: ", users);

  return (
    <>
      <div className="container">
        <Navbar />
        <h3 className="title">Ho Ho Ho!</h3>

        <p onClick={getRandomSantas} className="viewLink">
          View Santas
        </p>
        {matches.map((match, index) => {
          return (
            <div key={index}>
              <UserCard sender={match[0]} receiver={match[1]} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
