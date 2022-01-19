import React from "react";
import UserData from "../components/UserData/UserData";

// const  name = 'marina'; xxxxxxxxxxxxxxx

class ExampleClassComponent extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
    super();
    this.state = {
      name: "Marina",
      position: "Frontend Developer",
    };
  }

  componentDidMount() {
    // CALLING API [HTTP REQUESTS - AJAX]
    console.log("DID MOUNT");
  }

  componentDidUpdate() {
    // BASED ON CHANGES DO SOMETHING
    console.log("DID UPDATED");
  }

  componentWillUnmount() {
    // COMPONENT WILL BE DESTROYED
    console.log("DESTROY");
  }

  changeUsername = (name) => {
    console.log("CLICK USER NAME");
    // this.state.name = 'Ahmed' xxxxxx WRONG xxxxxxxxx

    this.setState({
      name : name,
    });
  };

  render() {
    console.log("RENDER");
    console.log(this.props)
    return (
      <>
        <h1>Hello from Class Component</h1>
        <UserData userName={this.state.name} userPosition={this.state.position} />
        <button onClick={() => this.changeUsername("Omar")}>
          Change Username
        </button>
        <button onClick={() => this.changeUsername("Youssef")}>
          Change Username
        </button>
      </>
    );
  }
}

export default ExampleClassComponent;
