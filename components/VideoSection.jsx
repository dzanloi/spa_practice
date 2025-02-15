import Video from 'next-video';
import Nega from '/videos/nega.mp4';

const VideoSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#1f2833]">
        <iframe
            className="w-[1240px] h-[697.5px]"
            src="https://www.youtube.com/embed/-wJnyCtH4ro"
            frameBorder="1" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
        ></iframe>
    </section>
  )
}

export default VideoSection