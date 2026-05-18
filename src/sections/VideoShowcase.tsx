import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

// Use project images as fallback/thumbnails
import thumb1 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (1).webp';
import thumb2 from '../assets/picture_2/architecture/Visualisation of proposed projects/pic3.webp';
import thumb3 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (1).webp';

const VideoShowcase = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const videos = [
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumb: thumb1,
      title: "Diagnostic Test Video",
      location: "Public Server"
    },
    {
      src: 'https://drive.google.com/uc?export=download&id=1u7BxqO8M6NXsbNHPfWyGbC3m9tm_55c0',
      thumb: thumb2,
      title: "Interior Dynamics",
      location: "Project Site"
    },
    {
      src: 'https://drive.google.com/uc?export=download&id=1uCnVmXOkDdHpTCMxsUd6hJ5oQdxxcWSX',
      thumb: thumb3,
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
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: isMobile ? 0 : index * 0.2 }}
              className="relative group rounded-lg overflow-hidden bg-muted cursor-pointer aspect-[9/16]"
            >
              <video
                src={video.src}
                poster={video.thumb}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                controls
                autoPlay
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10 pointer-events-none">
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
