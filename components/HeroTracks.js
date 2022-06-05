import Poster from "./Poster";

function HeroTracks({ searchResults, newReleases, chooseTrack }) {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide gap-x-4 items-center h-[280px] ">
      {searchResults.length === 0
        ? newReleases
            .slice(0, 4)
            .map((track) => (
              <Poster key={track.id} track={track} chooseTrack={chooseTrack} />
            ))
        : searchResults
            .slice(0, 4)
            .map((track) => (
              <Poster key={track.id} track={track} chooseTrack={chooseTrack} />
            ))}
    </div>
  );
}

export default HeroTracks;
