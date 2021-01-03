import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import User from "./components/user.jsx";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      <User user={user} filterUser={filterUser} />
      <ScotchInfoBar />
    </div>
  );
}

// filters our user object data
function filterUser(user, keys) {
  const filteredUser = {};

  Object.keys(user).forEach((key) => {
    if (keys.includes(key)) {
      filteredUser[key] = user[key];
      delete user[key];
    }
  });
  return filteredUser;
}

// modifies our user object directly (Alternative Solution)
// function editUser() {
//   user.twitterUsername = "@" + user.twitterUsername;
//   let newKey;

//   Object.keys(user).forEach((key) => {
//     if (key === "foodType") {
//       newKey = "eats";
//       user[newKey] = user[key];
//       delete user[key];
//     }
//     if (key === "twitterUsername") {
//       newKey = "twitter";
//       user[newKey] = user[key];
//       delete user[key];
//     }
//   });
//   console.log(user);
//   return user;
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
