// import React from "react";
// import Scramble, { getNoBreakSpaces } from "react-scramble";
// import "./Title.css";

// const Title = () => (
//   <div className="Title-container">
//     <Scramble
//       autoStart
//       text="Scramble-eggs"
//       speed="slow"
//       steps={[
//         {
//           roll: 10,
//           text: "Scramble eggs",
//         },
//         {
//           roll: 10,
//           type: "random",
//           action: "+",
//         },
//         { roll: 10 },
//         {
//           roll: 3,
//           type: "random",
//           action: "-",
//         },
//         { roll: 5 },
//         {
//           roll: 5,
//           type: "random",
//           action: "+",
//         },
//         { roll: 5 },
//         {
//           roll: 20,
//           type: "random",
//           action: "-",
//         },
//       ]}
//     />
//     <Scramble
//       autoStart
//       text={getNoBreakSpaces(15)}
//       steps={[
//         { roll: 50 },
//         {
//           roll: 30,
//           type: "random",
//           action: "+",
//         },
//         {
//           roll: 10,
//           text: "with Esteban, Xiaodan",
//         },
//         {
//           roll: 30,
//           type: "forward",
//           action: "-",
//         },
//       ]}
//     />
//     <Scramble
//       autoStart
//       text={getNoBreakSpaces(15)}
//       steps={[
//         { roll: 70 },
//         {
//           roll: 15,
//           type: "all",
//           action: "+",
//         },
//         {
//           roll: 35,
//           text: "Agnieszka and Patryk",
//         },
//         {
//           roll: 55,
//           type: "random",
//           action: "-",
//         },
//       ]}
//     />
//   </div>
// );

// export default Title;
