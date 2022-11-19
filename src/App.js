import Header from "./header";
import HeroSection from "./hero-section/hero";
import ShowPortal from "./hero-section/portals";
import { useState } from "react";
import About from "./about/About";
import Shop from "./shop/shop";
import Footer from "./footer";

function App() {
  const [messageUs, setMessageUs] = useState(false);

  const handleMessagingState = (value) => {
    setMessageUs((prevStat) => (prevStat = value));
  };
  return (
    <>
      {messageUs && <ShowPortal Statehandler={handleMessagingState} />}
      <Header />
      <HeroSection messageState={handleMessagingState} />
      <About />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
