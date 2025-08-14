import React from 'react'

const LatestVideo = ({ title, thumbnailUrl, views, publishedOn, children }) => {
  // you can receive the data from parent comp via props
  // console.log(props);
  // props are object
  // props are read-only

  return (
    <div className="card">
      <img
        src={thumbnailUrl}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{views} Views</li>
        <li className="list-group-item">{publishedOn}</li>
      </ul>
    </div>
  );
};

export default LatestVideo