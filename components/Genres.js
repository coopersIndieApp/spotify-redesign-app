function Genres() {
  return (
    <div className="hidden xl:inline max-w-[270px]">
      <h2 className="text-white font-bold mb-3">Genres</h2>
      <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
        <div className="genre">Classic</div>
        <div className="genre">House</div>
        <div className="genre">Minimal</div>
        <div className="genre">Hip-hop</div>
        <div className="genre">Electronic</div>
        <div className="genre">Chillout</div>
        <div className="genre">Blues</div>
        <div className="genre">Country</div>
        <div className="genre">Techno</div>
      </div>
      <button className="btn">All Genres</button>
    </div>
  );
}

export default Genres;
