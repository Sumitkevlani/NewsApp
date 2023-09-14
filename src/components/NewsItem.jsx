import React from "react";

export default function NewsItem(props) {
  return (
    <div
      className="card my-3"
      style={{ height: "30rem", border: "3px solid black" }}
    >
      <img
        src={props.url}
        className="card-img-top"
        alt="..."
        style={{ height: "12rem" }}
      />
      <div
        className="card-body d-flex"
        style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      >
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.imageUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
          style={{ width: "40%", alignSelf: "center" }}
        >
          Read more
        </a>
        <p style={{fontSize: "12px", color:"grey"}}>
          By {props.author?props.author:"Anonymous"} at {new Date(props.publishedAt).toISOString()}
        </p>
      </div>
    </div>
  );
}
