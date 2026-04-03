import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./App.css";
export default function App() {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const waveRef = useRef(null);
  const lineRef = useRef(null);
  const maskRef = useRef(null);
  const typeRef = useRef(null);
  const explodeRef = useRef(null);
  const circleRef = useRef(null);
  const shuffleRef = useRef(null);
  const flipRef = useRef(null);
 
  useEffect(() => {
    
    const split = new SplitType(textRef.current, {
      types: "words"
    });
    
    const splitInstance = new SplitType(splitRef.current, {
      types: "chars"
    });
    
    const splitWave = new SplitType(waveRef.current, { 
       types: "chars"
    });

    const splitLine = new SplitType(maskRef.current, {
      types: "lines"
    });

    const typeInstance = new SplitType(lineRef.current, {
      types: "lines, words, chars"
    });
    typeRef.current = typeInstance;
    
     const splitExplode = new SplitType(explodeRef.current, { types: "chars" });

     const splitCircle = new SplitType(circleRef.current, { types: "chars" });
     
     const splitShuffle = new SplitType(shuffleRef.current, {
      types: "chars"
     });

     const splitFlip = new SplitType(
      flipRef.current, {
        types: "chars"
      });
     const total = splitCircle.chars.length;
     
     const t1 = gsap.timeline();
      t1.from(split.words,{
        y: 80,
        opacity: 0,
        stagger: 0.04,
        duration: 1,
        ease: "power3.out"
      });

      t1.from(
        splitInstance.chars,{
          y:40,
          opacity:0,
          stagger:0.03,
          duration:0.8,
          ease:"power3.out"
        },
        "-=0.5"
      );
      gsap.fromTo(
        splitWave.chars,
        {
          y: 0
        },
      {
        y: -20,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.05,
          from: "center"
        },
        duration: 0.6,
        ease: "sine.inOut"
      }); 

      t1.from(
        splitLine.lines,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out"
        },
        "-=0.3"
      );

      gsap.from(typeInstance.words,{
        y: 50,
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
      
      gsap.from(splitExplode.chars, {
      opacity: 0,
      scale: 0,
      x: () => gsap.utils.random(-100, 100),
      y: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-180, 180),
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      repeat: true,
      scrollTrigger: {
        trigger: explodeRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(splitCircle.chars,{
      opacity: 0,
      scale: 0,
      x: (i) => 150 * Math.cos((i / total) * Math.PI * 2),
      y: (i) => 150 * Math.sin((i / total) * Math.PI * 2),
      rotation: (i) => (i/total)*360,
      stagger: 0.05,
      duration: 1.5,
      ease: "power4.out",
      repeat: -1,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(splitShuffle.chars, {
      opacity: 0,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-180, 180),
      scale: 0,
      duration: 1.2,
      repeat: -1,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.05,
        from: "random",
      },
      scrollTrigger : {
        trigger: shuffleRef.current,
        start: "top 80%",
        toggleActions: "play none none none none",
      },
    });

    gsap.from(splitFlip.chars, {
      opacity: 0,
      rotationX: -90,
      transformOrigin: "top center",
      stagger: 0.05,
      duration: 1,
      repeat:-1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
     
    return () => {
      split.revert();
      splitInstance.revert(); 
      splitWave.revert();
      splitLine.revert();
      typeInstance.revert();
      splitExplode.revert();
      splitCircle.revert();
      splitShuffle.revert();
      splitFlip.revert();
    };
    
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1 ref={textRef}>GSAP Split Text in React</h1>
      <h2 ref={splitRef}>GSAP Split Text in React</h2>
      <div style={{padding:"10px", fontSize:"1.25rem"}}>
      <h1 ref={waveRef}>Wave text animation</h1>
      </div>

      <div>
        <h1 ref={maskRef}className="mask-text">This is a professional GSAP text reveal animation used in modern UI.</h1>
      </div>

      <div style={{ padding: "20px", fontSize: "1.5rem" }}>
      <h1 ref={lineRef}>
        This text is split into lines, words, and characters!
      </h1>
      </div>
      <div style={{ padding: "20px", fontSize: "2rem" }}>
        <h1 ref={explodeRef}>Exploding Letters Animation!</h1>
      </div>

      <div style={{ padding: "50px", fontSize: "2rem", textAlign: "center" }}>
      <h1 ref={circleRef}>Circular GSAP Text Animation!</h1>
    </div>

    <div className="shuffle">
      <h1 ref={shuffleRef}>Shuffle Text Animation - Fun with letters.</h1>
    </div>

    <div className="flip">
      <div className="flip-container">
      <h1 ref={flipRef}>3D Flip Letters Animation!</h1>
      </div>
    </div>
    </div>
  );
}
