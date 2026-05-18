import { motion } from 'framer-motion';
import video1 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/VID_20220414_134051.mp4';
import video2 from '../assets/picture_2/VID_20220414_140136.mp4';
import video3 from '../assets/picture_2/VID_20220414_145903.mp4';

const VideoShowcase = () => {
  const videos = [
    {
      src: video1,
      title: "Abakkus Office Walkthrough",
      location: "Santacruz, Mumbai"
    },
    {
      src: video2,
      title: "Interior Dynamics",
      location: "Project Site"
    },
    {
      src: video3,
      title: "Spatial Experience",
      location: "Finished Interior"
    }
  ];

  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Motion & Space</span>
          <h2 className="text-4xl md:text-7xl font-display tracking-tighter">Cinematic Walkthroughs.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group rounded-lg overflow-hidden bg-muted cursor-pointer"
            >
              <video
                src={video.src}
                className="w-full aspect-[9/16] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
                <span className="text-accent text-[10px] uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{video.location}</span>
                <h3 className="text-xl font-display tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
