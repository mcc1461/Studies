import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="about">About</Link> |{" "}
        <Link to="contact">Contact</Link> | <Link to="phone">Phone</Link>{" "}
        <Link to="email">Email</Link> 
      </nav>{" "}
      <h1>My Website</h1>{" "}
    </div>
  );
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="history">History</Link> | {" "}
      </nav>
      {" "}
      <h1>About Us</h1>{" "}
      <Outlet />
    </div>
  );
}
export function History() {
  return (
    <div>
      {" "}
      <h1> Our History</h1>{" "}
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      </nav>
      {" "}
      <h1>Contact Us</h1>{" "}
    </div>
  );
}
export function App() {
  return <Home />;
}
