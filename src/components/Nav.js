import React from "react";
import {Link} from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">Welcome</Link>
      <Link to="/character-list" className="nav-link">Characters</Link>
      <Link to="/location-list" className="nav-link">Locations</Link>
    </div>
  );
}