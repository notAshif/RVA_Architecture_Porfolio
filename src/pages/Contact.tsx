import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.712345678901!2d72.85678901234567!3d19.283456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0669259952d%3A0x67c2851443840aa7!2sPoonam%20Sagar%20Complex!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24"
    >
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl md:text-9xl font-display tracking-tighter mb-12 uppercase">
              CONTACT
            </h1>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <Mail className="text-accent mt-1" size={32} />
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-white/40 block mb-2">
                    Email
                  </span>
                  <p className="text-2xl md:text-3xl font-display">rvaarchitects@outlook.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <Phone className="text-accent mt-1" size={32} />
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-white/40 block mb-2">
                    Phone
                  </span>
                  <p className="text-2xl md:text-3xl font-display">+91 9136894017</p>
                  <p className="text-2xl md:text-3xl font-display">+91 9869631912</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <MapPin className="text-accent mt-1" size={32} />
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-white/40 block mb-2">
                    Studio
                  </span>
                  <p className="text-xl md:text-2xl leading-relaxed">
                    Office no. 4, D/82- Happy home Estate,
                    <br />
                    Poonam sagar complex, Miraroad East,
                    <br />
                    Thane 401 105
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full bg-muted rounded-lg overflow-hidden border border-white/10">
            <iframe
              src={googleMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RVA Studio Location"
              className="grayscale contrast-125 brightness-75 invert hue-rotate-180"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
