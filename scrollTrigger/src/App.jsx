import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".red", {
      scrollTrigger: {
        trigger: ".red",
        start: "top center",
        end: "+=400",
        scrub: true,
        markers: true,
        pin: true
      },
      x: 400,
      rotation: 360,
      ease: "none",
      duration: 3
    });

    gsap.to(".green", {
      scrollTrigger: {
        trigger: ".green",
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true,
        toggleActions: "restart pause resume none",
      },
      x: 500,
      rotation: 360,
      duration: 3,
    });
    //Scroll trigger in a timeline
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        start: "top center",
        end: "top 100px",
        scrub:3,
        markers: true
      }
    });
    t1.to(".purple",{
       x: 400,
      rotation: 360,
      ease: "none",
      duration: 3
    })
    .to(".purple",{
      backgroundColor: "pink",
      duration:  2
    })
    .to(".purple",{
      x:0,
      duration:2
    })

    gsap.to(".yellow",{
      scrollTrigger: {
        trigger: ".pink",
        start: "top center",
        endTrigger: ".skyBlue",
        end: "bottom center",
        markers: true,
        scrub:1,
      },
      x: 400,
      rotation: 360,
      duration: 3
    });
    
  }, []);

 
   
return (
   <>
  <div className="container">
    <div className="red" />
    <div className="green" />
    <div className="purple" />
    <div className="pink" />
    <div className="skyBlue" />
    <div className="yellow" />
    
  </div>

    </>
  );
}

export default App;