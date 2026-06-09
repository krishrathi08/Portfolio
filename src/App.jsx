import { useEffect, useState } from 'react'
import AOS from "aos"
import "bootstrap/dist/js/bootstrap.bundle"

import { ParallaxProvider } from "react-scroll-parallax"
import Contact from "./views/Contact"
import FullPageScroll from "./components/FullPageScroll"
import Header from "./components/Header"
// Removed MapsContribution
import MySelf from "./views/MySelf"
import Outer from "./views/Outer"
import Projects from "./views/Projects"
import TechStacks from "./views/TechStacks"
import Achievements from "./views/Achievements"
import SideElements from "./components/SideElements"
import TopScrolledBar from "./components/TopScrolledBar"
import Works from "./views/Works"
import { contact, header, mySelf, outer, projects, techStacks, works, achievements } from "./utils"
import sideElements from "./utils/sideElements"
import Cursor from "./components/Cursor"
import PreLoader from "./components/PreLoader"
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

        <ViewElement id="tech-stacks">
          <TechStacks data={techStacks} />
        </ViewElement>

        <ViewElement id="achievements">
          <Achievements data={achievements} />
        </ViewElement>

        <ViewElement id="contact">
          <Contact data={contactData} />
        </ViewElement>

        <WaterMark />
      </ParallaxProvider>
    </>
  )
}
