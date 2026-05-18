import abakkus1 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (1).webp';
import abakkus2 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (20).webp';
import abakkus3 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (33).webp';
import abakkus4 from '../assets/picture_1/Abakkus LLP, Location_ Santacruz/abbok (7).webp';
import bungalow1 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 1.webp';
import bungalow2 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 2.webp';
import bungalow3 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 3.webp';
import bungalow4 from '../assets/picture_2/architecture/Bungalow, Location_ Jaunpur/View 4.webp';
import miraroad1 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_124921.webp';
import miraroad2 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_130332.webp';
import miraroad3 from '../assets/picture_1/4BHK Miraroad/IMG_20220523_131015.webp';
import lukzer1 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (1).webp';
import lukzer2 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (25).webp';
import lukzer3 from '../assets/picture_2/interior/Lukzer, Loacation_ Vasai/lakzer (12).webp';
import jangid1 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231122_131912.webp';
import jangid2 from '../assets/picture_2/interior/1BHK - Jangid Complex-Miraroad/IMG_20231211_142259.webp';
import tradebulls from '../assets/picture_2/architecture/Tradebulls, Location_ ahmedabad/Tradebulls ahmedabad.webp';
import visual1 from '../assets/picture_2/architecture/Visualisation of proposed projects/pic3.webp';
import visual2 from '../assets/picture_2/architecture/Visualisation of proposed projects/WhatsApp Image 2021-03-11 at 07.33.37.webp';

export interface Project {
  id: string;
  image: string;
  title: string;
  location: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { id: 'abakkus-1', image: abakkus1, title: "Abakkus LLP", location: "Santacruz, Mumbai", category: "Commercial", featured: true },
  { id: 'bungalow-1', image: bungalow1, title: "Luxury Bungalow", location: "Jaunpur, UP", category: "Residential", featured: true },
  { id: 'lukzer-1', image: lukzer1, title: "Lukzer Showroom", location: "Vasai, Palghar", category: "Retail", featured: true },
  { id: 'miraroad-1', image: miraroad1, title: "Modern 4BHK", location: "Miraroad, Mumbai", category: "Interior", featured: true },
  { id: 'jangid-1', image: jangid1, title: "Jangid Residence", location: "Miraroad, Mumbai", category: "Residential Interior", featured: true },
  { id: 'tradebulls-1', image: tradebulls, title: "Tradebulls Office", location: "Ahmedabad, Gujarat", category: "Commercial", featured: true },
  { id: 'visual-1', image: visual1, title: "Future Visions", location: "Proposed Projects", category: "Visualisation", featured: true },
  { id: 'abakkus-2', image: abakkus2, title: "Abakkus Workspace", location: "Santacruz, Mumbai", category: "Commercial" },
  { id: 'bungalow-2', image: bungalow2, title: "Bungalow View", location: "Jaunpur, UP", category: "Residential" },
  { id: 'miraroad-2', image: miraroad2, title: "Dining Detail", location: "Miraroad, Mumbai", category: "Interior" },
  { id: 'lukzer-2', image: lukzer2, title: "Retail Lighting", location: "Vasai, Palghar", category: "Retail" },
  { id: 'visual-2', image: visual2, title: "Future Living", location: "Proposed Projects", category: "Residential" },
  { id: 'abakkus-3', image: abakkus3, title: "Executive Cabin", location: "Santacruz, Mumbai", category: "Commercial" },
  { id: 'bungalow-3', image: bungalow3, title: "Grand Facade", location: "Jaunpur, UP", category: "Residential" },
  { id: 'jangid-2', image: jangid2, title: "Bedroom Design", location: "Miraroad, Mumbai", category: "Interior" },
  { id: 'abakkus-4', image: abakkus4, title: "Lobby Area", location: "Santacruz, Mumbai", category: "Commercial" },
  { id: 'miraroad-3', image: miraroad3, title: "Kitchen Concept", location: "Miraroad, Mumbai", category: "Interior" },
  { id: 'lukzer-3', image: lukzer3, title: "Product Display", location: "Vasai, Palghar", category: "Retail" },
  { id: 'bungalow-4', image: bungalow4, title: "Aerial View", location: "Jaunpur, UP", category: "Residential" }
];
