import logo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="title">
        <img src={logo} alt="react logo"></img>
        <h1>ReactFacts</h1>
      </div>
      <div>
        <h2>React Course - Project 1</h2>
      </div>
    </div>
  );
}
