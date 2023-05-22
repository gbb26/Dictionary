import React, { useState } from "react";
import "../../stylesheets/audio.css";
import { BiPlay } from "react-icons/bi";

function Audio(props) {
  const [playing, setPlaying] = useState(false);
  const audioRef = React.createRef();

  console.log(props.link);
  const playAudio = () => {
    setPlaying(true);
    const audio = audioRef.current;
    playing ? audio.pause() : audio.play();
    setPlaying(false);
  };
  return (
    <div>
      <button
        style={{ display: props.link ? "" : "none" }}
        className="btn btn-warning"
        onClick={playAudio}
      >
        <BiPlay style={{ width: "50px", height: "50px" }} />
      </button>
      <audio ref={audioRef} src={props.link} />
    </div>
  );
}
export default Audio;
