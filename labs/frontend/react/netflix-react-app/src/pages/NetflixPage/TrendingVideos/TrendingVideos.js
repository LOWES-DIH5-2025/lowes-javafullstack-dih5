import React, { useState } from "react";

const TrendingVideos = () => {
  console.log("1. Program Started");
  /* state is component-wide updatable data */
  let [resolution, setResolution] = useState("HD");
  console.log(resolution); // data
  console.log(setResolution); // fn to update the data

  const [videos, setVideos] = useState([
    {
      id: 1,
      trendingRank: 1,
      title: "Man Vs Wild",
      thumbnailUrl: "https://placehold.co/260x220",
      desc: "A Wild Adventure show in Discovery Channel",
      views: "700K",
      publishedOn: "1 week ago",
    },
    {
      id: 2,
      trendingRank: 2,
      title: "Planet Earth II",
      thumbnailUrl: "https://placehold.co/260x220",
      desc: "A show by David Attenborough on BBC Earth Channel",
      views: "900K",
      publishedOn: "2 weeks ago",
    },
  ]);

  const handleChangeResolution = () => {
    console.log(resolution);
    // change must be changed this way -- only then UI will get updated
    setResolution("4K");
  };

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h4>
        Enjoy watching the videos in {resolution}
        <button
          className="btn btn-warning btn-sm"
          onClick={handleChangeResolution}
        >
          Change Resolution to 4K
        </button>
      </h4>
      <div className="col-md-4">
        <div className="card">
          <img
            src={videos[0].thumbnailUrl}
            className="card-img-top"
            alt={videos[0].title}
          />
          <div className="card-body">
            <h5 className="card-title">{videos[0].title}</h5>
            <p className="card-text">{videos[0].desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{videos[0].views} Views</li>
            <li className="list-group-item">{videos[0].publishedOn}</li>
            <li className="list-group-item">
              <button className="btn btn-sm btn-success">
                {
                  /* Conditional Rendering  */
                  videos[0].isInWatchlist ? "In Watchlist" : "Add to Watchlist"
                }
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="card">
          <img
            src={videos[1].thumbnailUrl}
            className="card-img-top"
            alt={videos[1].title}
          />
          <div className="card-body">
            <h5 className="card-title">{videos[1].title}</h5>
            <p className="card-text">{videos[1].desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{videos[1].views} Views</li>
            <li className="list-group-item">{videos[1].publishedOn}</li>
            <li className="list-group-item">
              <button className="btn btn-sm btn-success">
                {
                  /* Conditional Rendering  */
                  videos[1].isInWatchlist ? "In Watchlist" : "Add to Watchlist"
                }
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
