import { Mail, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/picture_2/RVA logo n text/LOGO.webp';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 px-6 md:px-12 bg-white text-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-24">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <img src={logo} alt="RVA Architects Logo" className="h-16 w-auto" />
              <h2 className="text-3xl font-display tracking-tighter uppercase">RVA architects</h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-display tracking-tighter mb-8 md:mb-12 leading-[0.95] md:leading-none">
              Let's build <br />
              <span className="text-accent italic font-light">together.</span>
            </h3>
            <div className="flex space-x-6 md:space-x-8">
              <a
                href="mailto:rvaarchitects@outlook.com"
                className="p-3 md:p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
              </a>
              <a
                href="#"
                className="p-3 md:p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <Globe size={20} className="md:w-6 md:h-6" />
              </a>
              <Link
                to="/contact"
                className="p-3 md:p-4 border border-background/10 rounded-full hover:bg-background hover:text-white transition-all duration-500"
              >
                <MapPin size={20} className="md:w-6 md:h-6" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-background/40 block mb-4 md:mb-6">
                  Contact
                </span>
                <p className="text-base md:text-lg">rvaarchitects@outlook.com</p>
                <p className="text-base md:text-lg">+91 9136894017</p>
                <p className="text-base md:text-lg">+91 9869631912</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-background/40 block mb-4 md:mb-6">
                  Office
                </span>
                <p className="text-base md:text-lg">
                  406/m, Silent park, Golden nest,
                </p>
                <p className="text-base md:text-lg">
                  Mira Bhayandar 401105
                </p>
              </div>
            </div>

            <div className="mt-16 md:mt-0">
              <span className="text-[10px] uppercase tracking-widest font-bold text-background/40 block mb-4 md:mb-2">
                Our Mission
              </span>
              <p className="text-lg font-display uppercase tracking-tighter">RVA architects</p>
              <form className="relative mt-8">
                <input
                  type="email"
                  placeholder="SUBSCRIBE TO OUR NEWSLETTER"
                  className="w-full bg-transparent border-b border-background/20 py-4 focus:outline-none focus:border-accent transition-colors uppercase text-[10px] md:text-xs tracking-widest font-bold text-background placeholder:text-background/30"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-background">
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-background/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] uppercase tracking-[0.3em] font-bold text-background/40 text-center md:text-left">
          <p>© 2026 RVA ARCHITECTS. ALL RIGHTS RESERVED.</p>
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
