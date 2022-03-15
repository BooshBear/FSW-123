import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div id="container">
      <header>
        <h1>Welcome to the R.M.G.G.</h1>
        <h2>(Random Music Genre Generator)</h2>
      </header>
      <main>
        <p>
          Have you ever felt that you wanted to try a new type of music with
          a whole different genre. Then you have come to the right place just
          click the button below to begin your journey in finding the right
          music genre for you.
        </p>
        <Link to="/Genre"><span>Generate Random Music Genres</span></Link>
        <Link to="/Likes"><span>Your Like List</span></Link>
        <Outlet />
      </main>
    </div>
  );
}
