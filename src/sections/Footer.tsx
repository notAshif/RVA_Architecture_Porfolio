import { Mail, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 px-6 md:px-12 bg-white text-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-display tracking-tighter mb-12">
              Let's build <br />
              <span className="text-accent italic font-light">together.</span>
            </h2>
            <div className="flex space-x-8">
              <a
                href="mailto:hello@rva-studio.com"
                className="p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <Globe size={24} />
              </a>
              <Link
                to="/contact"
                className="p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <MapPin size={24} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-background/40 block mb-6">
                  Contact
                </span>
                <p className="text-lg"> rvaarchs@gmail.com</p>
                <p className="text-lg">+91 9136894017</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-background/40 block mb-6">
                  Office
                </span>
                <p className="text-lg">M-406, Silent Park, Golden nest</p>
                <p className="text-lg">
                  Mirabhayander Road bhayander East - 401105
                </p>
              </div>
            </div>

            <div className="mt-24 md:mt-0">
              <form className="relative">
                <input
                  type="email"
                  placeholder="SUBSCRIBE TO OUR NEWSLETTER"
                  className="w-full bg-transparent border-b border-background/20 py-4 focus:outline-none focus:border-accent transition-colors uppercase text-xs tracking-widest font-bold text-background"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-background">
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-background/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.3em] font-bold text-background/40">
          <p>© 2026 RVA STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link to="/about" className="hover:text-accent transition-colors">
              Our Story
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
