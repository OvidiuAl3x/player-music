import { useEffect, useRef, useState } from "react";
import { songsdata } from "./audios";
import { Player } from "./player";
import music from "../components/negotiator_0302_demo.mp3";

export const Home = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="container">
      <audio src={currentSong.url} ref={audioElem} />;
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};
