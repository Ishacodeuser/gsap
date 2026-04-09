import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);
const App = () => {
  const textRef = useRef();
  const text1Ref = useRef();
  const ref = useRef();
  const waveRef = useRef();
  const text4Ref = useRef(null);
  const glichyRef = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      scrambleText: {
        text: "Hello, this is GSAP Scramble!",
        chars: "upperAndLowerCase",
        revealDelay: 1.5,
        speed: 1,
      },
      ease: "power2.out",
    });

    gsap.to(text1Ref.current, {
      duration: 2,
      delay: 4,
      scrambleText: {
        text: "Welcome to the world of animations!",
        chars: "upperAndLowerCase",
        revealDelay: 1.5,
        speed: 1,
      },
      ease: "power2.out",
    });
    const chars4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;
    const finalText = "Hello World";

    const interval = setInterval(() => {
      ref.current.innerText = finalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return finalText[index];
          return chars4[Math.floor(Math.random() * chars4.length)];
        })
        .join("");

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    //scramble + flicker reveal(wave pattern with random flicker)
    const text3 = "Scramble Text with Flicker Reveal!";
    const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const el = waveRef.current;
    let frame = 0;

    const flickerInterval = setInterval(() => {
      el.innerText = text3
        .split("")
        .map((letter, index) => {
          const progress = frame - index*2;
          if (progress < 10) {
            return text3[index];}

            if(progress>0){
              return Math.random() < 0.5 ? text3[index] : chars2[Math.floor(Math.random() * chars2.length)];
            }
          return chars2[Math.floor(Math.random() * chars2.length)];
        })
        .join("");

        frame++;

      if (frame >= text3.length * 3) {
  clearInterval(flickerInterval);
}

      frame += 1 / 4;
    }, 40);
// vertical rolling effect
const finalText3 = "WELCOME";
const chars3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const el1 = text4Ref.current;
let frame1 = 0;

const animate = () => {
  el1.innerText = finalText3
    .split("")
    .map((letter, index) => {
      const delay = index * 3;

      if (frame1 > delay + 10) return finalText3[index];
      if (frame1 > delay) return chars3[(frame1 + index) % chars3.length];
      return " ";
    })
    .join("");

  frame1++;

  if (frame1 < finalText3.length * 5) {
    requestAnimationFrame(animate);
  } else {
    gsap.fromTo(
      text4Ref.current,
      { opacity: 0, y: 20, filter: "blur(4px)" },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", yoyo: true, repeat: 1 }
    );
  }
};
animate();

//glichy hacker effect
  const el2 = glichyRef.current;
  el2.innerText = "GLITCHY HACKER EFFECT";
  document.body.appendChild(el2);

  glichyRef.current = el2;
  
  gsap.to(glichyRef.current, {
    duration: 4,
    scrambleText: {
      text: "GLITCHY HACKER EFFECT",
      chars: "upperAndLowerCase",
      revealDelay: 0.5,
      speed: 0.5,
    },
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
  } 
  );

  }, []);

  return (
    <div>   
   <section>
     <h1 className="text"ref={textRef}>
      Loading...
    </h1>
   </section>
    
      <section>
        <h2 className="hover" ref={text1Ref}>
      Hover....
    </h2>
      </section>
  
  <section>
     <h1 className="iteration" ref={ref}>
      Another heading.
    </h1>
  </section>
    
    <section>
      <h1 className="wave-text" ref={waveRef}>
        Wave Pattern with Random Flicker.
      </h1>
    </section>

    <section>
      <h1 className="verticalRoll" ref={text4Ref}> vertica
l rolling effect.
      </h1>
    </section>

    <section>
      <h1 className="glichy" ref={glichyRef}>
        Glichy Hacker Effect.
      </h1>
    </section>
    </div>
  );
}

export default App;
