// Method 1 - Hardcode JSX element

// import { useRef } from 'react'
// import { gsap } from 'gsap'
// import './App.css'

// function App() {

//   const itemRefs = useRef([]);
//   const items = itemRefs.current = [];

//   const addToRefs = (el) => {
//     if (el && !itemRefs.current.includes(el)) {
//       const newArr = [...items, el];
//       newArr.map((item) => {
//           gsap.to(item, {
//             x: 50,
//             y: 100,
//             repeat: -1,
//             ease: "slow",
//             yoyo: true
//           })
//       })
//     }
//   }

//   return (
//     <div className="App">
//             <div ref={addToRefs} className="App-item">item 1</div>
//             <div ref={addToRefs} className="App-item">item 2</div>
//             <div ref={addToRefs} className="App-item">item 3</div>
//     </div>
//   )
// }

// export default App;


// Method 2 - Using Map to create an array of JSX elements using useRef();

// import { useRef } from 'react'
// import { gsap } from 'gsap'
// import './App.css'

// function App() {

//   const arrayOfItems = [1,2,3];
//   const itemRefs = useRef([]);
//   const items = itemRefs.current = [];

//   const addToRefs = (el) => {
//     if (el && !itemRefs.current.includes(el)) {
//       // items.push(el)
//       const newArr = [...items, el];
//       newArr.map((item) => {
//           gsap.to(item, {
//             x: 50,
//             y: 100,
//             repeat: -1,
//             ease: "slow",
//             yoyo: true
//           })
//       })
//     }
//   }

//   return (
//     <div className="App">
//         {arrayOfItems.map((item, index) => {
//           return (
//             <div ref={addToRefs} className="App-item" key={index}>item {index}</div>
//           )
//         })}
//     </div>
//   )
// }

// export default App;



// Method 3 -  ChatGPT not using useRef();

// import { useCallback, useMemo } from 'react'
// import { gsap } from 'gsap'
// import './App.css'

// function App() {

//   const arrayOfItems = [1,2,3];

//   const addToRefs = useCallback((el) => {
//     if (el) {
//       gsap.to(el, {
//         x: 100,
//         y: 200,
//         repeat: -1,
//         ease: "slow",
//         yoyo: true
//       })
//     }
//   }, [])

//   const items = useMemo(() => arrayOfItems.map((item, index) => {
//     return (
//       <div ref={addToRefs} className="App-item" key={index}>item {index}</div>
//     )
//   }), [arrayOfItems, addToRefs])

//   return (
//     <div className="App">
//       {items}
//     </div>
//   )
// }

// export default App


// Method 4 - Using Map to create an array of JSX elements using useRef(), target all element with GSAP Utils;

// import { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import './App.css'

// function App() {

//   const arrayOfItems = [1,2,3];
//   const el = useRef();

// const queryAll = gsap.utils.selector(el)
// useLayoutEffect(() => {
//   gsap.to(queryAll(".App-item"), {
//     x: 100,
//       stagger: 0.33,
//       repeat: -1,
//       repeatDelay: 1,
//       yoyo: true
//   })
// },[])

//   return (
//     <div className="App" ref={el}>
//         {arrayOfItems.map((item, index) => {
//           return (
//             <div className="App-item" key={index}>item {index}</div>
//           )
//         })}
//     </div>
//   )
// }

// export default App;


// Method 5 - Using Map to create an array of JSX elements using useRef(), target all element with vanilla JS;

// import { useEffect, useRef } from 'react';
// import './App.css'

// function App() {

//   const arrayOfItems = [1,2,3];
//   const el = useRef();

//   useEffect(() => {
//     const items = Array.from(el.current.children);
//     items.map((item) => {
//       item.style.transform = "translateX(200px)";
//       item.style.transitionDuration = "3000ms";
//     })
//   },[])

//   return (
//     <div className="App" ref={el}>
//         {arrayOfItems.map((item, index) => {
//           return (
//             <div className="App-item" key={index}>item {index}</div>
//           )
//         })}
//     </div>
//   )
// }

// export default App;