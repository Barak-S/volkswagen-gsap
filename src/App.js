import React, { useRef, useEffect, useState } from "react";
import Menu from './images/menu.svg';
import Logo from './images/v-logo.png';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useIntersection } from "react-use";
import { gsap, TweenMax, TweenLite, Power2,TimelineMax }  from 'gsap';


function App() {

  let hero = useRef(null)
  let slider = useRef(null)
  let logo = useRef(null)
  let hamburger = useRef(null)
  let headline = useRef(null)

  // let section2 = useRef(null)

  // const intersection = useIntersection(section2, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1
  // })

  // const fadeIn = el =>{
  //   gsap.to(el,1,{
  //       opacity: 1,
  //       ease: "Power4.out",
  //   })
  // }
  // const fadeOut = el =>{
  //   gsap.to(el,1,{
  //       opacity: 0,
  //       ease: "Power4.out",
  //   })
  // }

  // intersection && intersection.intersectionRatio > 1 && fadeIn(".section-2")

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
          <h3 ref={el => (logo = el)} id="logo"><img src={Logo} style={{height: 35, paddingTop: 18, paddingRight: 10}}></img>Volkswagen</h3>
          <img ref={el => (hamburger = el)} style={{height: 25}} src={Menu} className="hamburger"></img>
        </nav>
        <section>
          <div ref={el => (hero = el)} className="hero">
            <img src={'https://images.unsplash.com/photo-1455275803899-34511e680e27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}></img>
            <h3 ref={el => (headline = el)} className="headline">Dream Big</h3>
          </div>
        </section>
      </header>
      <div ref={el => (slider = el)} className="slider"></div>
      {/* <div ref={section2} className="section-2"></div>
      <div className="section-3">
        <button className="shop-button">Shop Now</button>
      </div> */}
    </div>
  );
}

export default App;
