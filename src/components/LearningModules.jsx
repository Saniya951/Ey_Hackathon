// import React, { useState } from "react";
// import "../cssfiles/LearningModules.css";

// const LearningModules = () => {
//   const [activeTab, setActiveTab] = useState("Budgeting");

//   const videos = {
//     Budgeting: [
//       { src: "budget-video1.png", title: "Budget Video 1" },
//       { src: "budget-video2.png", title: "Budget Video 2" },
//       { src: "budget-video3.png", title: "Budget Video 3" },
//     ],
//     Savings: [
//       { src: "savings-video1.png", title: "Savings Video 1" },
//       { src: "savings-video2.png", title: "Savings Video 2" },
//       { src: "savings-video3.png", title: "Savings Video 3" },
//     ],
//     Investments: [
//       { src: "investments-video1.png", title: "Investments Video 1" },
//       { src: "investments-video2.png", title: "Investments Video 2" },
//       { src: "investments-video3.png", title: "Investments Video 3" },
//     ],
//   };

//   const concepts = [
//     { src: "investments-concept.png", title: "Investments" },
//     { src: "loan-concept.png", title: "Loan" },
//     { src: "savings-concept.png", title: "Money Saving" },
//   ];

//   return (
//     <div className="learning-modules-container">
//       {/* First Div: Tabs Section */}
//       <div className="tabs-section">
//         <h2>Learn Financial Skills</h2>
//         <p>Interactive lessons to empower your financial knowledge</p>
//         <div className="tabs">
//           {["Budgeting", "Savings", "Investments"].map((tab) => (
//             <button
//               key={tab}
//               className={activeTab === tab ? "active-tab" : ""}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="videos-container">
//           {videos[activeTab].map((video, index) => (
//             <div key={index} className="video-card">
//               <img src={video.src} alt={video.title} />
//               <p>{video.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Second Div: Concepts Section */}
//       <div className="concepts-section">
//         <h3>Concepts</h3>
//         <div className="concepts-container">
//           {concepts.map((concept, index) => (
//             <div key={index} className="concept-card">
//               <img src={concept.src} alt={concept.title} />
//               <p>{concept.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Third Div: Quiz Section */}
//       <div className="quiz-section">
//         <h3>Test Your Knowledge - Quiz</h3>
//         <div className="quiz-buttons">
//           <button>Budgeting Quiz</button>
//           <button>Savings Quiz</button>
//           <button>Investments Quiz</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LearningModules;

import React, { useState } from "react";
import "../cssfiles/LearningModules.css";

import investmentIcon from "../icons/investments.png";
import loan from "../icons/loan.png";
import savings from "../icons/savings.png";

const LearningModules = () => {
  const [activeTab, setActiveTab] = useState("Budgeting");

  const videos = {
    Budgeting: [
      {
        url: "https://www.youtube.com/embed/INnPo0QPXf4?si=bRFAL3dxFhxy9AEE",
        title: "Budget Video 1",
      },
      {
        url: "https://www.youtube.com/embed/INnPo0QPXf4?si=bRFAL3dxFhxy9AEE",
        title: "Budget Video 2",
      },
      {
        url: "https://www.youtube.com/embed/INnPo0QPXf4?si=bRFAL3dxFhxy9AEE",
        title: "Budget Video 3",
      },
    ],
    Savings: [
      {
        url: "https://www.youtube.com/embed/iZGljcA3G24?si=QMNPno-rCE_PRjyS",
        title: "Savings Video 1",
      },
      {
        url: "https://www.youtube.com/embed/iZGljcA3G24?si=QMNPno-rCE_PRjyS",
        title: "Savings Video 2",
      },
      {
        url: "https://www.youtube.com/embed/iZGljcA3G24?si=QMNPno-rCE_PRjyS",
        title: "Savings Video 3",
      },
    ],
    Investments: [
      {
        url: "https://www.youtube.com/embed/qIw-yFC-HNU?si=KOaeuXwGH4mD7BGE",
        title: "Investments Video 1",
      },
      {
        url: "https://www.youtube.com/embed/qIw-yFC-HNU?si=KOaeuXwGH4mD7BGE",
        title: "Investments Video 2",
      },
      {
        url: "https://www.youtube.com/embed/qIw-yFC-HNU?si=KOaeuXwGH4mD7BGE",
        title: "Investments Video 3",
      },
    ],
  };

  const concepts = [
    {
      src:  investmentIcon ,
      title: "Investments",
      link: "https://www.investopedia.com/",
    },
    {
      src: loan,
      title: "Loan",
      link: "https://www.thebalance.com/what-is-a-loan-5184905",
    },
    {
      src: savings,
      title: "Money Saving",
      link: "https://www.moneysavingexpert.com/",
    },
  ];

  return (
    <div className="learning-modules-container">
      {/* First Div: Tabs Section */}
      <div className="tabs-section">
        <h2>Learn Financial Skills</h2>
        <p>Interactive lessons to empower your financial knowledge</p>
      </div>
      <div className="tabs">
        {["Budgeting", "Savings", "Investments"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="videos-container">
        {videos[activeTab].map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="400"
              height="300"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Second Div: Concepts Section */}
      <div className="concepts-section">
        <h3>Concepts</h3>
        <div className="concepts-container">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <img src={concept.src} alt={concept.title} />
              <p>{concept.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Div: Quiz Section */}
      <div className="quiz-section">
        <h3>Test Your Knowledge - Quiz</h3>
        <div className="quiz-buttons">
          <button>Budgeting Quiz</button>
          <button>Savings Quiz</button>
          <button>Investments Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default LearningModules;
