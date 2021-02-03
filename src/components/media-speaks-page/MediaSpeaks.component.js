import React from "react";
import NewsCard from "../news-card/NewsCard.component";
import "./media-speaks.styles.scss";

export default function MediaSpeaks() {
  return (
    <div className="media-speaks">
      <h1 className="main-title">Media Speaks</h1>
      <div className="content">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
