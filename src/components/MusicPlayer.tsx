import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      // Play with original MP3 volume
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/fashion.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-28 sm:bottom-10 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default MusicPlayer;