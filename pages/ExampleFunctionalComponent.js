import { useState, useEffect } from "react";
import UserData from "../components/UserData/UserData";

function ExampleFunctionalComponent() {
  const [age, setAge] = useState("28");
  // const [position, setPosition] = useState("FrontendEnd");
  // const [state, setstate] = useState("initialState")
  const [userData, setUserData] = useState({
    name: "Marina",
    position: "Frontend",
    collage: "Science",
    isAdmin: false,
  });

  const changeUserData = (name) => {
    setUserData({
      ...userData,
      name,
    });
  };

  useEffect(() => {
    //   CALLING API ON LOAD
    console.log("FUNCTIONAL || COMPONENT DID MOUNT");
  }, []);

  useEffect(() => {
    console.log("FUNCTIONAL || COMPONENT DID UPDATE USERDATA");
  }, [userData]);

  useEffect(() => {
    console.log("FUNCTIONAL || COMPONENT DID UPDATE NAME");
  }, [age]);

  useEffect(() => {
    return () => {
      console.log("FUNCTIONAL || COMPONENT WILL UNMOUNT");
    };
  }, []);

  // condition ? 'yes' : 'No'

  return (
    <>
      <h1>Hello Functional Component</h1>
      <UserData
        userName={userData.name}
        userPosition={userData.position}
        collage={userData.collage}
      />
      {/* ternary operator if else */}
      {userData.isAdmin ? (
        <button
          className="btn btn-primary"
          onClick={() => changeUserData("Omar")}
        >
          Change userdata
        </button>
      ) : (
        "You don't have permission to change user data"
      )}

      {/* Conditional render if true*/}
      {userData.isAdmin && (
        <button
          className="btn btn-primary"
          onClick={() => changeUserData("Omar")}
        >
          Change userdata
        </button>
      )}
    </>
  );
}

export default ExampleFunctionalComponent;
