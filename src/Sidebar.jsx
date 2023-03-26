import React from "react";
import { Link } from 'react-scroll';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Bikku BS</h2>
      <ul>
        <li>
          <Link to="country" smooth={true}>Country</Link>
        </li>
        <li>
          <Link to="year" smooth={true}>Year</Link>
        </li>
        <li>
          <Link to="like" smooth={true}>Likelihood</Link>
        </li>
        <li>
          <Link to="region" smooth={true}>Region</Link>
        </li>
        <li>
          <Link to="topic" smooth={true}>Topic</Link>
        </li>
      </ul>
    </div>
  );
}
