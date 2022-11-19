import Header from "./header";
import HeroSection from "./hero-section/hero";
import ShowPortal from "./hero-section/portals";
import { useState } from "react";

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
    </>
  );
}

export default App;
