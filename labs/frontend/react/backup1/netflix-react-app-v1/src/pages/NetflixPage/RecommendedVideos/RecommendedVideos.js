import React, { useState } from "react";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([
    {
      id: 4545665,
      title: "Ind Vs Aus Cricket 2023",
      thumbnailUrl: "https://placehold.co/260x220",
      desc: "Enjoy watching Cricket Series between India and Australia",
      views: "1.1M",
      publishedOn: "3 days ago",
      isInWatchlist: true,
    },
    {
      id: 7896798,
      title: "Top 10 Goals of Messi",
      thumbnailUrl: "https://placehold.co/260x220",
      desc: "Enjoy watching the 10 best goals of Messi",
      views: "600K",
      publishedOn: "2 days ago",
      isInWatchlist: false,
    },
    {
      id: 345678,
      title: "Top 10 Goals of Ronaldo",
      thumbnailUrl: "https://placehold.co/260x220",
      desc: "Enjoy watching the 10 best goals of Ronaldo",
      views: "800K",
      publishedOn: "5 days ago",
      isInWatchlist: false,
    },
  ]);

  // Conditional Rendering outside JSX
  if (videos && videos.length === 0) {
    return (
      <div className="alert alert-danger">No Recommended Videos Found!</div>
    );
  }
  
  const handleManageWatchlist = (index) => {
    console.log(index);
    // creating duplicate array to mutate state data -- immutably
    const duplicateVideos = [...videos]; // spread operator
    duplicateVideos[index].isInWatchlist = !duplicateVideos[index].isInWatchlist;
    setVideos(duplicateVideos);
  };

  return (
    <div className="row">
      <h4>Based on the watch history we will recommend videos</h4>

      {
        /* Let's do the looping -- lists and keys */
        videos.map((video, index) => {
          console.log(video);
          console.log(index);
          return (
            <div className="col-md-4" key={video.id}>
              <div className="card">
                <img
                  src={video.thumbnailUrl}
                  className="card-img-top"
                  alt={video.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{video.views} Views</li>
                  <li className="list-group-item">{video.publishedOn}</li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={ () => {
                        handleManageWatchlist(index)
                      }}
                    >
                      {
                        /* Conditional Rendering in JSX  */
                        video.isInWatchlist
                          ? "In Watchlist"
                          : "Add to Watchlist"
                      }
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default RecommendedVideos;
