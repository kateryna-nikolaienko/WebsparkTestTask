import { useState } from "react";
import Filters from "../Filters/Filters";
import FeedContent from "./FeedContent/FeedContent";

import './Feed.scss';

function Feed() {
  const [view, setView] = useState('grid');

  return (
    <section className="feed">
      <Filters view={view} onViewChange={setView} />
      <FeedContent view={view} />
    </section>
  )
}

export default Feed;