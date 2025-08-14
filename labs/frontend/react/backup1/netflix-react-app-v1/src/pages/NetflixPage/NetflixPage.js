import React from 'react'
import LatestVideo from './LatestVideo/LatestVideo';
import TrendingVideos from './TrendingVideos/TrendingVideos';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import Subscription from './Subscription/Subscription';

const NetflixPage = () => {

  return (
    <div className="container">
      <h2>Latest Videos | Props Demo</h2>
      <div className="row">
        <div className="col-md-4">
          <LatestVideo
            title="Arg Vs Fra FIFA 2022 Final"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="2M"
            publishedOn="6 days ago"
            x="10"
            y="20"
          >
            Watch the highlights of Argentina and France played in Qatar.
          </LatestVideo>
        </div>
        <div className="col-md-4">
          <LatestVideo
            title="CSK Vs KKR IPL 2023"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="4M"
            publishedOn="2 days ago"
          >
            Watch the highlights CSK Vs KKR IPL 2023.
          </LatestVideo>
        </div>
        <div className="col-md-4">
          <LatestVideo
            title="GT Vs MI IPL 2023"
            thumbnailUrl="https://via.placeholder.com/280x200"
            views="1.2M"
            publishedOn="5 hours ago"
          >
            Watch the highlights GT Vs MI IPL 2023.
          </LatestVideo>
        </div>
      </div>

      <hr />
      <h2>Trending Videos | States and Events Demo</h2>
      <TrendingVideos />

      <hr />
      <h2>Recommended Videos | States, Events, Lists and Keys + Conditional Rendering Demo</h2>
      <RecommendedVideos />

      <hr/>
      <h2>Styles Demo</h2>
      <Subscription />
    </div>
  );
}

export default NetflixPage