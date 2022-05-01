import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2022/02/26/1600x900/Untitled_design_-_2022-02-26T082903.402_1645844367612_1645844390297.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <span className="badge bg-secondary mx-3">{source}</span>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
