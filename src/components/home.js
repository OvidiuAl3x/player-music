import { useEffect, useRef, useState } from "react";
import { songsdata } from "./audios";
import { Player } from "./player";

export const Home = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [mutedSong, setMutedSong] = useState(false);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      duration:ct,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const skipToNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div className="container">
      <audio
        src={currentSong.url}
        ref={audioElem}
        onTimeUpdate={onPlaying}
        onEnded={skipToNext}
        muted={mutedSong}
        autoPlay={isPlaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioElem={audioElem}
        skipToNext={skipToNext}
        setMutedSong={setMutedSong}
        mutedSong={mutedSong}
      />
    </div>
  );
};
