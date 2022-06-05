import Track from "./Track";

function Tracks({ searchResults, newReleases, chooseTrack }) {
  return (
    <div className="w-full">
      <h2 className="text-white font-bold mb-3 ">
        {searchResults.length === 0 ? "New Releases" : "Tracks"}
      </h2>

      <div className="  space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-[1000px] md:h-96  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500  ">
        {searchResults.length === 0
          ? newReleases
              .slice(4, newReleases.length)
              .map((track) => (
                <Track key={track.id} track={track} chooseTrack={chooseTrack} />
              ))
          : searchResults
              .slice(4, searchResults.length)
              .map((track) => (
                <Track key={track.id} track={track} chooseTrack={chooseTrack} />
              ))}
      </div>
    </div>
  );
}

export default Tracks;
