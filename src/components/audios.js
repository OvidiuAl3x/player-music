import music from "../songs/audio/Ghost Riders in the Sky.mp3";
import music2 from "../songs/audio/Yuve Yuve Yu.mp3";
import music3 from "../songs/audio/Hoist the Colours (Bass Singers Version).mp3";
import image from "../songs/images/Ghost Riders in the Sky.jpg";
import image2 from "../songs/images/Yuve Yuve Yu.jpg";
import image3 from "../songs/images/Hoist the Colours.jpg";

export const songsdata = [
  {
    artist: "The HU",
    title: "Yuve Yuve Yu",
    image: `${image2}`,
    url: `${music2}`,
  },
  {
    artist: "Geoff Castelluci",
    title: "Ghost Riders in the Sky",
    image: `${image}`,
    url: `${music}`,
  },
  {
    artist: "Bobby Bass",
    title: "Hoist the Colours (Bass Singers Version)",
    image: `${image3}`,
    url: `${music3}`,
  },
];
