import { useEffect, useRef, useState } from "react";
import {
  IoPauseCircleSharp,
  IoPlayCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { TbRepeat, TbRepeatOff } from "react-icons/tb";

export const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioElem,
  skipToNext,
}) => {
  const [playInLoop, setPlayInLoop] = useState(false);
  const clickRef = useRef();
  const PlayPause = () => {
    setIsPlaying(true);
  };
  const PlayPause2 = () => {
    setIsPlaying(false);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    if (currentSong.progress > "0") {
      audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
    }
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  useEffect(() => {
    audioElem.current.loop = playInLoop;
  }, [playInLoop]);

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
          <div
            style={{
              width: `${
                currentSong.progress === undefined
                  ? "0%"
                  : currentSong.progress + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="containerPlayer">
        <IoVolumeMuteOutline className="back" />
        <IoVolumeHighOutline className="back" />
        <IoPlaySkipBackSharp className="back" onClick={skipBack} />

        {!isPlaying ? (
          <IoPlayCircleSharp onClick={PlayPause} className="play" />
        ) : (
          <IoPauseCircleSharp onClick={PlayPause2} className="play" />
        )}
        <IoPlaySkipForwardSharp className="skip" onClick={skipToNext} />

        <label>
          <input
            type="checkbox"
            checked={playInLoop}
            onChange={(e) => setPlayInLoop(e.target.checked)}
          />
          {playInLoop ? <TbRepeat /> : <TbRepeatOff />}
        </label>
      </div>
    </div>
  );
};
