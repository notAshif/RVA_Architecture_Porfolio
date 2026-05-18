import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const googleMapUrl = "https://maps.google.com/maps?q=406/m,+Silent+park,+Golden+nest,+Mira+Bhayandar+401105&t=&z=15&ie=UTF8&iwloc=&output=embed";

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
                    406/m, Silent park, Golden nest,
                    <br />
                    Mira Bhayandar 401105
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
              className="grayscale brightness-90"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
