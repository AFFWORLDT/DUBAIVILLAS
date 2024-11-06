import React,{useState,useEffect} from 'react';
import styles from './Home.module.css';
import Navbar from '../ui/Navbar';
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { LiaVectorSquareSolid } from "react-icons/lia";


const cards = [
  { id: 1, image: '/images/hotel.svg', text: 'Hotels & Resorts' },
  { id: 2, image: '/images/retail.svg', text: 'Lifestyle Malls' },
  { id: 3, image: '/images/alIttihadpark.svg', text: 'Leisure Parks' },
  { id: 4, image: '/images/yacht-club.svg', text: 'Yacht Club' },
  { id: 5, image: '/images/multiusesportscourtse.svg', text: 'Sports & Wellness' },
  { id: 6, image: '/images/communitypavilion.svg', text: 'Celebration Village' },
  { id: 7, image: '/images/waterfront.svg', text: 'Waterfront Promenade' },
  { id: 8, image: '/images/towncentre.png', text: 'Town Centres' },
  { id: 9, image: '/images/beachclubs.svg', text: 'Beach Clubs' },
];

const villas = [
  {
    title: "SERENITY BY THE SEA",
    description: "An iconic neighbourhood Introducing the Beach Collection",
    bedrooms: "5-6 Bedrooms",
    price: "Starting From 20M",
    area: "7882.63 Sq. Ft. - 8434.38 Sq. Ft.",
    imageUrl: "/images/beach.webp"
  },
  {
    title: "BEACHFRONT LIVING AT ITS FINEST",
    description: "In a coral villa, happiness flows endlessly. Introducing the Beach Collection",
    bedrooms: "7 Bedrooms",
    price: "Starting From 20M",
    area: "11222.02 Sq. Ft. - 12165.37 Sq. Ft.",
    imageUrl: "/images/coral.webp"
  }
];

const images = [
  "/images/beach-villas-1.webp", 
  "/images/villa-1.webp",
  "/images/villa-2.webp",
  "/images/villa-3.webp",
  "/images/villa-4.webp",
  "/images/villa-5.webp",
  "/images/villa-6.webp",
];

const items = [
  "Item 1 description",
  "Item 2 description",
  "Item 3 description",
  "Item 4 description",
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section className={styles.container}>
      <div className={styles.background}>
        <div className={styles.overlay}></div> 
      </div>
      <Navbar />
      <div className={styles.content}>
        <h1>Palm Jebel Ali Villas and Plots With Private Beach Access</h1>
        <ul>
          <li><FaCheckCircle/>&nbsp;5-7 Bedroom Villas and Plots</li>
          <li><FaCheckCircle/>&nbsp;Starting From AED 20M</li>
          <li><FaCheckCircle/>&nbsp;Customize & Build Your Own Villa</li>
        </ul>
        <button className={styles.button}>Schedule a Site Visit Now <FaArrowRight/></button>
      </div>
    </section>

    <section>
      <div className={styles.homeSec2}>
        <div className={styles.homeSecLeft}>
          <img src="/images/about-2.webp" className={styles.leftImg}/>
        </div>
        <div className={styles.homeSecRight}>
          <h1>Project Overview</h1>
          <p>The new, futuristic Palm Jebel Ali will raise the global benchmark in waterfront living, featuring extensive green spaces and luxury lifestyle amenities. It will feature mixed-use walkable neighborhoods and incorporate smart city technologies and provide a diverse range of mobility options for residents, visitors and communities. Palm Jebel Ali is set on 13.4 square kilometers of land and has the longest coastline of any destination in Dubai, adding a total of 91 kilometers of beachfront. It will be home to over 80 hotels and resorts, and a wide choice of entertainment and leisure facilities, which will distinguish the archipelago as an aspirational residential destination in the Emirate.</p>
          <button className={styles.enqBtn}>ENQUIRE NOW</button>
        </div>
      </div>
    </section>

    <section className={styles.sectionS}>
    <div className={styles.overlayS2}></div>
      <div className={styles.contentC}>
        <h1 className={styles.headingH}>Ever Dreamed of Beachfront Living with Top Amenities and Easy Access to Everything?</h1>
        <h2 className={styles.subheadingS}>Make It a Reality.</h2>
        <button className={styles.button}>ENQUIRE NOW <FaArrowRight/></button>
      </div>
    </section>

    <section className={styles.cardSectionContainer}>
      <h2 className={styles.heading}>AMENITIES</h2>
      <div className={styles.cardSection}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.text} className={styles.image} />
            <p className={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className={styles.conContainer}>
      <h2 className={styles.conHeading}>CONFIGURATION</h2>
      <div className={styles.conCardContainer}>
        {villas.map((villa, index) => (
          <div key={index} className={styles.conCard}>
            <img src={villa.imageUrl} alt={villa.title} className={styles.conImage} />
            <h3 className={styles.conTitle}>{villa.title}</h3>
            <p className={styles.conDescription}>{villa.description}</p>
            <div className={styles.conDetails}>
              <p className={styles.conBedrooms}><MdOutlineKingBed className={styles.iconS}/>&nbsp;{villa.bedrooms}</p>
              <p className={styles.conPrice}><PiMoney  className={styles.iconS}/>&nbsp;{villa.price}</p>
              <p className={styles.conArea}><LiaVectorSquareSolid  className={styles.iconS}/>&nbsp;{villa.area}</p>
            </div>
            <div className={styles.conButtons}>
              <button className={styles.conEnquireButton}>Enquire Now</button>
              <button className={styles.conBrochureButton}>Download Brochure</button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className={styles.crslContainer}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.crslSlide} ${
            index === currentIndex ? styles.crslActive : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </section>

    {/* <div className={styles.locContainer}>
      <div className={styles.locMap}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57853.45304225011!2d54.95047216222344!3d25.005524463138087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f10f22909222f%3A0xeee8c736a7748d68!2sPalm%20Jebel%20Ali!5e0!3m2!1sen!2sin!4v1730882035381!5m2!1sen!2sin"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.locContent}>
        <h2 className={styles.locHeading}>Our Features</h2>
        <ul className={styles.locList}>
          {items.map((item, index) => (
            <li key={index} className={styles.locListItem}>
              <FaCheckCircle className={styles.locIcon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
    </>
  );
};

export default Home;
