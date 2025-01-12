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
import budget from "../icons/budget.png";

const LearningModules = () => {
  const [activeTab, setActiveTab] = useState("Budgeting");

  const videos = {
    Budgeting: [
      {
        url: "https://www.youtube.com/embed/INnPo0QPXf4?si=bRFAL3dxFhxy9AEE",
        title: "What is budgeting?",
      },
      {
        url: "https://www.youtube.com/embed/-ANjtUiYbZ8?si=_SifW1qIb4JjasMO",
        title: "Indian Budgeting",
      },
      {
        url: "https://www.youtube.com/embed/sVKQn2I4HDM?si=sHiaEEjGy5FZJkBc",
        title: "Budget Basics",
      },
      {
        url: "https://www.youtube.com/embed/U0a0JErlA5U?si=006uIcctqQWd6Ksy",
        title: "Simplifying concept of budget",
      },
    ],
    Savings: [
      {
        url: "https://www.youtube.com/embed/iZGljcA3G24?si=QMNPno-rCE_PRjyS",
        title: "Checking Savings and Accounts",
      },
      {
        url: "https://www.youtube.com/embed/sCiE4X_y1a0?si=dKxHf48HqdaH91F4",
        title: "What is Savings Account?",
      },
      {
        url: "https://www.youtube.com/embed/0SpI5CCmfNU?si=mCIjI6576KjhaFNA",
        title: "Regular Savings",
      },
      {
        url: "https://www.youtube.com/embed/D740SawepFU?si=nRUwqeku-gDrrcRB",
        title: "Savings accounts vs Current account",
      },
    ],
    Investments: [
      {
        url: "https://www.youtube.com/embed/qIw-yFC-HNU?si=KOaeuXwGH4mD7BGE",
        title: "The Basics of Investing ",
      },
      {
        url: "https://www.youtube.com/embed/lNdOtlpmH5U?si=ICbK1rseAiFv8p5c",
        title: "How to Invest for Beginners",
      },
      {
        url: "https://www.youtube.com/embed/Arz_9WX-pn0?si=PdsvfX-kGy7qD8Kd",
        title: "What is Investing",
      },
      {
        url: "https://www.youtube.com/embed/tHxwyWnNu0c?si=qd34zxLv2AenPoUZ",
        title: "How to start Investing?",
      },
    ],
  };

  const concepts = [
    {
      src: investmentIcon,
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
    {
      src: budget,
      title: "Budgets",
      link: "https://www.stash.com/learn/budgeting-for-young-adults/",
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
