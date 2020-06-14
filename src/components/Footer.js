import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a
                href={url}
                className={`icon ${style} ${icon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p>Built by Leo Pillar</p>
    </footer>
  );
}
