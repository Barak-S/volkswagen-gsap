import React, { useRef, useEffect, useState } from "react";
import Menu from './images/menu.svg';
import Bus from './images/bus-2.jpg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap, TweenMax, TweenLite, Power2,TimelineMax }  from 'gsap';


function App() {

  let hero = useRef(null)
  let slider = useRef(null)
  let logo = useRef(null)
  let hamburger = useRef(null)
  let headline = useRef(null)

  useEffect(()=>{     
    console.log(hero,slider,logo, hamburger, headline)
    TweenMax.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeOut })
    TweenMax.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeOut, delay: 1 })
    // TweenMax.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeOut, delay: 1 })
    TweenMax.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0, ease: Power2.easeOut, delay: 1.7 })
    TweenMax.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0, ease: Power2.easeOut, delay: 1.7 })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h3 ref={el => (logo = el)} id="logo">volkswagen</h3>
          <img ref={el => (hamburger = el)} style={{height: 25}} src={Menu} className="hamburger"></img>
        </nav>
        <section>
          <div ref={el => (hero = el)} className="hero">
            <img src={Bus}></img>
            <h1 ref={el => (headline = el)} className="headline">Dream Big</h1>
          </div>
        </section>
      </header>
      <div ref={el => (slider = el)} className="slider"></div>
      {/* <div className="section-2">

      </div>
      <div className="section-3">

      </div> */}
    </div>
  );
}

export default App;
