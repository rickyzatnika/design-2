// import React, { useEffect, useRef } from "react";

// const BubbleAnimation = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.canvas.width = window.innerWidth;
//     ctx.canvas.height = window.innerHeight;
//     let particleArray;

//     // Create gradient color
//     const gradient = ctx.createLinearGradient(
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     );
//     gradient.addColorStop(0, "#ff660d40");
//     gradient.addColorStop(0.4, "#f8d2123b");
//     gradient.addColorStop(1, "#b5f5062f");

//     //  create constructor function
//     function Particle(x, y, directionX, directionY, size, gradient) {
//       this.x = x;
//       this.y = y;
//       this.directionX = directionX;
//       this.directionY = directionY;
//       this.size = size;
//       this.gradient = gradient;
//     }
//     //add draw method to particle prototype
//     Particle.prototype.draw = function () {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//       ctx.fillStyle = this.gradient;
//       ctx.fill();
//     };

//     // add update method to particle prototype
//     Particle.prototype.update = function () {
//       if (this.x + this.size > canvas.width || this.x - this.size < 0) {
//         this.directionX = -this.directionX;
//       }
//       if (this.y + this.size > canvas.height || this.y - this.size < 0) {
//         this.directionY = -this.directionY;
//       }
//       this.x += this.directionX;
//       this.y += this.directionY;

//       this.draw();
//     };
//     // create particle Array
//     function init() {
//       particleArray = [];
//       for (let i = 0; i < 20; i++) {
//         let size = Math.random() * 20;
//         let x = Math.random() * (innerWidth - size * 2);
//         let y = Math.random() * (innerHeight - size * 2);
//         let directionX = Math.random() * 1 - 0.7;
//         let directionY = Math.random() * 1 - 0.7;
//         let color = gradient;

//         particleArray.push(
//           new Particle(x, y, directionX, directionY, size, color)
//         );
//       }
//     }

//     //animation loop
//     function animate() {
//       requestAnimationFrame(animate);
//       ctx.clearRect(0, 0, innerWidth, innerHeight);

//       for (let i = 0; i < particleArray.length; i++) {
//         particleArray[i].update();
//       }
//     }

//     init();
//     animate();

//     // responsive canvas animation
//     window.addEventListener("resize", function () {
//       canvas.width = innerWidth;
//       canvas.height = innerHeight;
//       init();
//     });
//   }, []);

//   return (
//     <canvas
//       className="  bg-cover bg-center bg-[url(../public/img/10.jpg)] w-full h-full fixed top-0 left-0 right-0 bottom-0 -z-50"
//       ref={canvasRef}
//       width={400}
//       height={400}
//     />
//   );
// };

// export default BubbleAnimation;
