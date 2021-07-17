import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h1>Ekart</h1>
      </div>
      <div className="ListStyle">
          <ul>
            <li>
              <a href="#">
                <ViewListIcon /> List View
              </a>
            </li>
            <li>
              <a href="#">
                <ViewColumnIcon /> Table View
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
