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
  setMutedSong,
  mutedSong,
}) => {
  const [playInLoop, setPlayInLoop] = useState(false);
  const clickRef = useRef();
  const PlayPause = () => {
    setIsPlaying(!isPlaying);
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

  const Muted = () => {
    setMutedSong(!mutedSong);
  };

  const ProgressSong = () => {
    const progress = currentSong.duration;
    let sec = new Number();
    let min = new Number();
    sec = Math.floor(progress);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : "0" + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : "0" + sec;

    return min + ":" + sec;
  };

  const DurationSong = () => {
    const length = currentSong.length;
    let sec = new Number();
    let min = new Number();
    sec = Math.floor(length);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : "0" + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : "0" + sec;

    return min + ":" + sec;
  };

  console.log(currentSong.duration);
  return (
    <div className="containerMusic">
      <img
        src="https://marketplace.canva.com/EAE1S08POOg/1/0/1600w/canva-relaxing-minimal-music-album-cover-art-qA_k0YNdr-E.jpg"
        width="300px"
      />
      <p style={{ textAlign: "center" }}>{currentSong.title}</p>
      <div className="rangePlayer">
        <div className="musicTime">
          {currentSong.length === undefined || currentSong.duration === 0 ? (
            <>
              <span>00:00</span>
              <span>00:00</span>
            </>
          ) : (
            <>
              <span>
                <ProgressSong />
              </span>
              <span>
                <DurationSong />
              </span>
            </>
          )}
        </div>

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
        {mutedSong ? (
          <IoVolumeMuteOutline className="sound" onClick={Muted} />
        ) : (
          <IoVolumeHighOutline className="sound" onClick={Muted} />
        )}

        <IoPlaySkipBackSharp className="back" onClick={skipBack} />

        {!isPlaying ? (
          <IoPlayCircleSharp onClick={PlayPause} className="play" />
        ) : (
          <IoPauseCircleSharp onClick={PlayPause} className="play" />
        )}
        <IoPlaySkipForwardSharp className="skip" onClick={skipToNext} />

        <label className="labelRepeat">
          <input
            type="checkbox"
            checked={playInLoop}
            onChange={(e) => setPlayInLoop(e.target.checked)}
          />
          {playInLoop ? (
            <TbRepeat className="repeat" />
          ) : (
            <TbRepeatOff className="repeat" />
          )}
        </label>
      </div>
    </div>
  );
};
