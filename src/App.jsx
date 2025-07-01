import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import { tvShows } from "./shows/data";
import { useState } from "react";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <EpisodeList
          name={selectedShow.name}
          episodes={selectedShow.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}
