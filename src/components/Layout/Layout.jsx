import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <header className="Header">
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="movies">
          Movies
        </NavLink>
      </header>

      <main className="Main">
        <Outlet />
      </main>
    </>
  );
}
