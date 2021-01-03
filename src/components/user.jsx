import React from "react"; // may need to import { component } dependency

const User = ({ user, filterUser }) => {
  const filteredUser = filterUser(user, [
    "location",
    "age",
    "likes",
    "foodType",
    "twitterUsername"
  ]);

  return (
    <React.Fragment>
      {/* render image, name and food data */}
      <img className="avatar" src={user.avatar} alt="Avatar" />
      <h1 className="blue">{user.name}</h1>
      {Object.keys(filteredUser).map((key) => {
        if (key === "twitterUsername") {
          return (
            <div className="user-item-flex">
              <p className="user-item-header">Twitter</p>
              <p className={"user-item-text blue"}>@{filteredUser[key]}</p>
            </div>
          );
        } else {
          return (
            // render user headers
            <div className="user-item-flex">
              <p className="user-item-header">
                {key === "foodType"
                  ? "Eats"
                  : key[0].toUpperCase() + key.slice(1, key.length)}
              </p>
              {/* render user text */}
              <p className={"user-item-text"}>{filteredUser[key]}</p>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

export default User;

// if (item === "twitterUsername" || item === "foodType") {
//   return (
//     <div className="user-item-flex">

//     </div>
//   );
// } else {
//   return (
//     <div className="user-item-flex">
//       <p className="user-item-header">
//         {item[0].toUpperCase() + item.slice(1, item.length)}
//       </p>
//       <p className="user-item-text">{user[item]}</p>
//     </div>
//   );
// }
