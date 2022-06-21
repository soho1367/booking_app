import './Hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0) ;
  const [open, setOpen] = useState(false) ;

  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/360175914.webp?k=3de9ea2b297f7b9be4d88f81617e1d07a2787fc2ee2671abcbe9e4a455a0e157&o=&s=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/362664591.webp?k=fb52b929137084b80fffab9b3758646e1448028e70815f0da25267cbb92d1a6f&o=&s=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/353681136.webp?k=21a275e5053e5bd951c91892f0d54569efb9ef59bbd0fe0ecf2eae24a3a6b740&o=&s=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/157685521.webp?k=11771ae6fa6ae7a14df0efe546b4df50ba8f4eaf3a2b74a360e512eec49ecdb5&o=&s=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/54810719.webp?k=4cd484e1879dd25355cfd0aea57843c68b3e60e92b3dff2c4b639c2c317162b0&o=&s=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/362390707.webp?k=7a5e1218c25486dd4bf8d6acc7544a431fad83196b2f93ee24651a9ab61a792d&o=&s=1"  
    },
  ];

  const handleOpen = (i)=> {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 :slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 :slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  }


  return (
    <div>
      <Navbar />
      <Header  type="list" />
      <div className="hotelContainer">
        {
          open && 
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton st 125 Milan</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i) } src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Milan, Italy</h1>
              <p className="hotelDesc">
                The 4-star Andreola is located 200 m from Milan Centrale Train Station,
                which has direct connections with the Rho Fiera Exhibition Center and
                Fiera Milano City Exhibition Center. It offers classically decorated rooms, 
                a varied breakfast and a top-floor restaurant with panoramic city views.
                Rooms at the Andreola are decorated with elegant furnishings and 
                either carpeted or wood floors. Each one is air conditioned, 
                features a mini-bar and flat-screen TV with Mediaset Premium channels.
                Breakfast is served in a small dining room and includes freshly baked croissants.
                Stradivari restaurant is on the 6th floor and offers panoramic views of Milan.
                It serves sophisticated dishes of Lombardy and international cuisines.
              </p>
            </div>
            <div className="hotelDetailsprice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>located in the real heart of Milan, this property has an excellent location score of 9.8 !</span>
              <h2><b>$1007</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel