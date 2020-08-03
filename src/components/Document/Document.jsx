import React from "react";
import "./Document.scss";

export default function Document({ title, link }) {
  return (
    // <a href={test} target="_blank" className="document__link">
    <div className="document">
      <h2 className="document__name">{title}</h2>
      <div className="document__download-button">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="document__link"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
    // </a>
  );
}
