import { useCallback, useEffect, useRef } from "react";
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
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    if (currentSong.progress > "0") {
      audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
    }
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
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

  // useEffect(() => {
  //   if (currentSong.progress === 100) {
  //     audioElem.current.currentTime = 0;
  //     skipToNext() 
  //   }
  // }, [currentSong]);

  // useCallback(()=>{
  //   if (currentSong.progress === 100) {
  //   skipToNext();
  //   }
  // },[currentSong.progres])

  console.log(currentSong.length, currentSong.progress);

  return (
    <div className="containerMusic">
      <img
        src="https://marketplace.canva.com/EAE1S08POOg/1/0/1600w/canva-relaxing-minimal-music-album-cover-art-qA_k0YNdr-E.jpg"
        width="300px"
      />
      <p style={{ textAlign: "center" }}>{currentSong.title}</p>
      <div className="rangePlayer">
        {/* <span>{currentSong.length / 60}</span> */}
        <div className="rangeBackground" onClick={checkWidth} ref={clickRef}>
          <div style={{ width: `${currentSong.progress + "%"}` }}></div>
        </div>
      </div>
      <div className="containerPlayer">
        <IoPlaySkipBackSharp className="back" onClick={skipBack} />

        {!isPlaying ? (
          <IoPlayCircleSharp onClick={PlayPause} className="play" />
        ) : (
          <IoPauseCircleSharp onClick={PlayPause} className="play" />
        )}
        <IoPlaySkipForwardSharp className="skip" onClick={skipToNext} />
      </div>
    </div>
  );
};
