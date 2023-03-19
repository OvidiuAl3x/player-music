import { useRef } from "react";
import {
  IoPauseCircleSharp,
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";
import { songsdata } from "./audios";

export const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioElem,
}) => {
  const clickRef = useRef();
  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // console.log(currentSong.progress);

  const checkWidth = (e) => {
    let width = clickRef.current.value;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  return (
    <div className="containerMusic">
      <img
        src="https://marketplace.canva.com/EAE1S08POOg/1/0/1600w/canva-relaxing-minimal-music-album-cover-art-qA_k0YNdr-E.jpg"
        width="300px"
      />
      <p style={{ textAlign: "center" }}>{currentSong.title}</p>
      <div className="rangePlayer">
        <span>{currentSong.length / 60}</span>
        <input
          type="range"
          id="time"
          name="time"
          value={
            currentSong.progress === undefined ? "0" : currentSong.progress
          }
          ref={clickRef}
        />
      </div>
      <div className="containerPlayer">
        <IoPlaySkipBackSharp className="back" />

        {!isPlaying ? (
          <IoPlayCircleSharp onClick={PlayPause} className="play" />
        ) : (
          <IoPauseCircleSharp onClick={PlayPause} className="play" />
        )}
        <IoPlaySkipForwardSharp className="skip" />
      </div>
    </div>
  );
};
