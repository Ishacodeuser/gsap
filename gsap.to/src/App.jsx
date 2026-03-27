import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";

function App() {
  const boxRef = useRef(null);
  const greenRef = useRef(null);
  const purpleRef = useRef(null);
  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      x: 200,
      y: 150,
      rotation: 360,
      scale: 1.5,
      backgroundColor: "blue",
      ease: "power2.inOut",
      repeat: 2,  
    });
    gsap.to(greenRef.current, {
      rotation: 360,
      duration: 1,
      repeat: 1,
      x: 200,
      y: 150,
      scale: 1.5,
      ease: "power2.inOut",
      repeatDelay: 1,
    });

    gsap.to(purpleRef.current, {
      rotation: 360,
      x: 200,
      y: 150,
      scale: 1.5,
      ease: "power2.inOut",
      duration: 1,
      delay: 1, 
    });

  }, []);

  return (
  <>
  <div id="box" ref={boxRef}></div>
  <div className="green" ref={greenRef}></div>
  <div className="purple" ref={purpleRef}></div>
  </>
  );
  
}

export default App;