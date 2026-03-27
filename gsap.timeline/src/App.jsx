import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";

function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 1, ease: "power2.inOut" } });
    tl.to(boxRef.current, { x: 300, backgroundColor: "blue" })    
      .to(boxRef.current, { y: 150, scale: 1.5 })              
      .to(boxRef.current, { rotation: 360, x: 0 })         
      .to(boxRef.current, { y: 0, scale: 1, backgroundColor: "red", rotation: 0 });
  }, []);

  return <div id="box" ref={boxRef}></div>;
}

export default App;