import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul class="nav">
        <li class="nav-item">
          <a className="home" aria-current="page" href="/">
            URL Shortener App
          </a>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">
            Register
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
