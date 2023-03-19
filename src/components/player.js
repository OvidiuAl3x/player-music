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
}) => {
  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // console.log(currentSong);

  return (
    <div className="containerMusic">
      <img
        src="https://marketplace.canva.com/EAE1S08POOg/1/0/1600w/canva-relaxing-minimal-music-album-cover-art-qA_k0YNdr-E.jpg"
        width="300px"
      />
      <p style={{ textAlign: "center" }}>{currentSong.title}</p>
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
