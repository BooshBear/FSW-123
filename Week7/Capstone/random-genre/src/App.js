import './App.css';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';


export default function App() {
  return (
    <>
      <header>
        <h1>Welcome to the RMGG</h1>
        <h2>(Random Music Genre Generator)</h2>
      </header>
      <main>
        <p>
          Have you ever felt that you wanted to try a new type of music with
          a whole different genre. Then you have come to the right place just
          click the button below to begin your journey in finding the right
          music genre for you.
        </p>
      </main>
      <Link to="/Genre">Random Music Genre</Link>
      <Outlet />
    </>
  );
}
