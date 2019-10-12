import React from "react";
import {Link} from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">Welcome</Link>
      <Link to="/character-list">Characters</Link>
      <Link to="/location-list">Locations</Link>
    </div>
  );
}