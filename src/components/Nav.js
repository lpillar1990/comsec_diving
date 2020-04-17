import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/HealthSafety">Health & Safety</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
