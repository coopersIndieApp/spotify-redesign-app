import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Genres from "./Genres";
import HeroTracks from "./HeroTracks";
import Poster from "./Poster";
import Search from "./Search";
import Track from "./Track";
import Tracks from "./Tracks";

function Body({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // Searching...
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  // New Releases...
  useEffect(() => {
    if (!accessToken) return;

    // spotifyApi
    //   .getPlaylistsForCategory("toplists", {
    //     country: "TW",
    //     limit: 2,
    //     offset: 0,
    //   })
    //   .then(
    //     function (data) {
    //       console.log(data.body);
    //     },
    //     function (err) {
    //       console.log("Something went wrong!", err);
    //     }
    //   );

    // spotifyApi.getPlaylist("37i9dQZF1DWWqC43bGTcPc").then(
    //   function (data) {
    //     console.log("Some information about this playlist", data.body);
    //   },
    //   function (err) {
    //     console.log("Something went wrong!", err);
    //   }
    // );

    spotifyApi.getNewReleases({ country: "TW" }).then((res) => {
      setNewReleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className=" bg-black w-[400px] ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5 ">
      <Search search={search} setSearch={setSearch} />
      {/* <h2 className="text-white font-bold text-xl  ">New Releases</h2> */}
      <HeroTracks
        searchResults={searchResults}
        newReleases={newReleases}
        chooseTrack={chooseTrack}
      />
      <div className="flex gap-x-8 absolute min-w-full md:relative ml-0 ">
        {/* Genres */}
        <Genres />
        <Tracks
          searchResults={searchResults}
          newReleases={newReleases}
          chooseTrack={chooseTrack}
        />
      </div>
    </section>
  );
}

export default Body;
