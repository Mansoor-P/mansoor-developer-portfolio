// import React, { useEffect, useRef } from "react";

// export default function MouseFollower() {
//   const circleRef = useRef(null);
//   const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const mouse = useRef({ x: position.current.x, y: position.current.y });

//   useEffect(() => {
//     const circle = circleRef.current;
//     let animationFrameId;

//     const lerp = (start, end, amt) => start + (end - start) * amt;

//     const animate = () => {
//       position.current.x = lerp(position.current.x, mouse.current.x, 0.15);
//       position.current.y = lerp(position.current.y, mouse.current.y, 0.15);

//       if (circle) {
//         // Position the circle
//         circle.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;

//         // Set background position to simulate magnification of underlying content
//         circle.style.backgroundPosition = `-${position.current.x * 1.5 - 75}px -${position.current.y * 1.5 - 75}px`;
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     const onMouseMove = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       ref={circleRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: 50,
//         height: 50,
//         borderRadius: "50%",
//         pointerEvents: "none",
//         border: "2px solid gray",
//        boxShadow: `
//   0 0 5px rgba(255, 0, 150, 0.2),
//   0 0 10px rgba(255, 100, 100, 0.2),
//   0 0 15px rgba(0, 200, 255, 0.3)
// `,

//         zIndex: 9999,

//         // This makes the magnifier effect:
//         backgroundColor: "transparent",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//         backgroundSize: `${window.innerWidth * 1.5}px ${window.innerHeight * 1.5}px`,

//         // Optional for smooth movement
//         transition: "background-color 0.3s ease",
//       }}
//     />
//   );
// }
