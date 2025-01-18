// 'use client'
// import { useState } from 'react';

// export default function NewsUpdates() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#fff4e6', borderRadius: '8px', border: '1px solid #f5d3b3' }}>
//       <h2>University of Lucknow Latest Updates and News</h2>
//       <div>
//         <p>
//           <strong style={{ color: 'red' }}>20 Dec, 2024</strong><br />
//           CAT 2024 results have been announced on December 19, 2024. The candidates can check and download their scorecards using their CAT ID and password from the CAT official website at iimcat.ac.in.
//         </p>
//         <p>
//           <strong style={{ color: 'red' }}>03 Dec, 2024</strong><br />
//           JEE Main 2025 Session 1 will be conducted from January 22 to January 31, 2025. NTA will release City Intimation Slip in the first week of January followed by the admit card on the official website @ jeemain.nta.nic.in.
//         </p>
//       </div>
//       {isExpanded && (
//         <pre
//           style={{
//             backgroundColor: '#f9f9f9',
//             padding: '10px',
//             marginTop: '20px',
//             borderRadius: '5px',
//             border: '1px solid #ddd',
//             overflow: 'auto',
//           }}
//         >
//           {`
// HTML and CSS Code Example:

// <div class="news-box" style="background-color: #fff4e6; border: 1px solid #f5d3b3; padding: 20px; border-radius: 8px;">
//   <h2>University of Lucknow Latest Updates and News</h2>
//   <p><b>20 Dec, 2024</b>: CAT 2024 results have been announced...</p>
//   <p><b>03 Dec, 2024</b>: JEE Main 2025 Session 1 will be conducted...</p>
// </div>
//           `}
//         </pre>
//       )}
//       <button
//         onClick={toggleExpand}
//         style={{
//           marginTop: '20px',
//           padding: '10px 20px',
//           backgroundColor: isExpanded ? '#e63946' : '#006d77',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {isExpanded ? 'Hide Code' : 'Show Code'} 
//       </button>
//     </div>
//   );
// }
