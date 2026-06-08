import { useEffect, useState } from 'react'
import AOS from "aos"
import "bootstrap/dist/js/bootstrap.bundle"

import { ParallaxProvider } from "react-scroll-parallax"
import Contact from "./views/Contact"
import FullPageScroll from "./components/FullPageScroll"
import Header from "./components/Header"
import MapsContribution from "./views/MapsContribution"
import MySelf from "./views/MySelf"
import Outer from "./views/Outer"
import Projects from "./views/Projects"
import Reviews from "./views/Reviews"
import SideElements from "./components/SideElements"
import TopScrolledBar from "./components/TopScrolledBar"
import Works from "./views/Works"
import { contact, header, mapsContribution, mySelf, outer, projects, reviews, works } from "./utils"
import sideElements from "./utils/sideElements"
import Cursor from "./components/Cursor"
import PreLoader from "./components/PreLoader"
import Certifications from "./views/Certifications"
import certifications from "./utils/certifications"
import WaterMark from "./components/WaterMark"
import ContactDrawer from "./components/ContactDrawer"

const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">{children}</div>
)

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  const outerData = {
    ...outer,
    button: {
      ...outer.button,
      onClick: () => setIsContactOpen(true)
    }
  };

  const contactData = {
    ...contact,
    button: {
      ...contact.button,
      onClick: () => setIsContactOpen(true)
    }
  };

  return (
    <>
      <PreLoader />

      <Cursor />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ParallaxProvider>

        <TopScrolledBar />

        <FullPageScroll />

        <Header data={header} />

        <SideElements data={sideElements} />

        <ViewElement id="home">
          <Outer data={outerData} />
        </ViewElement>

        <ViewElement id="my-self">
          <MySelf data={mySelf} />
        </ViewElement>

        <ViewElement id="experience">
          <Works data={works} />
        </ViewElement>

        <ViewElement id="my-work">
          <Projects data={projects} />
        </ViewElement>

        <ViewElement id="reviews">
          <Reviews data={reviews} />
        </ViewElement>

        <ViewElement id="certifications">
          <Certifications data={certifications} />
        </ViewElement>

        <ViewElement id="contributions">
          <MapsContribution data={mapsContribution} />
        </ViewElement>

        <ViewElement id="contact">
          <Contact data={contactData} />
        </ViewElement>

        <WaterMark />
      </ParallaxProvider>
    </>
  )
}
