// import React, { useEffect, useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
//     useState(true);
//   const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check browser support for speech recognition
//     if (!browserSupportsSpeechRecognition) {
//       setIsSpeechRecognitionSupported(false);
//     }
//   }, [browserSupportsSpeechRecognition]);

//   useEffect(() => {
//     const command = transcript.toLowerCase();
//     if (command.includes("community support")) {
//       navigate("/community-support");
//     } else if (command.includes("learning modules")) {
//       navigate("/learning-modules");
//     } else if (command.includes("budget tracker")) {
//       navigate("/budget-tracker");
//     } else if (command.includes("investment plans")) {
//       navigate("/investment-plans");
//     } else if (command.includes("chatbot")) {
//       navigate("/chatbot");
//     } else if (command.includes("mentorship")) {
//       navigate("/mentorship");
//     }

//     // Reset transcript after navigating
//     if (command) {
//       setTimeout(() => resetTranscript(), 3000); // Reset after 1 second
//     }
//   }, [transcript, navigate, resetTranscript]);

//   const startListening = () => {
//     if (isSpeechRecognitionSupported) {
//       SpeechRecognition.startListening({ continuous: true, language: "en-US" });
//     }
//   };

//   const stopListening = () => {
//     if (isSpeechRecognitionSupported) {
//       SpeechRecognition.stopListening();
//     }
//   };

//   if (!isSpeechRecognitionSupported) {
//     return (
//       <div className="no-support-message">
//         <p>
//           Your browser doesn't support speech recognition. Please use navigation
//           links.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li>
//           <Link to="/chatbot">Chatbot</Link>
//         </li>
//         <li>
//           <Link to="/learning-modules">Learning Modules</Link>
//         </li>
//         <li>
//           <Link to="/community-support">Community Support</Link>
//         </li>
//         <li>
//           <Link to="/budget-tracker">Budget Tracker</Link>
//         </li>
//         <li>
//           <Link to="/investment-plans">Investment Plans</Link>
//         </li>
//         <li>
//           <Link to="/mentorship">Mentorship</Link>
//         </li>
//       </ul>

//       <div className="voice-controls">
//         <button onClick={startListening}>🎤 Start Voice Navigation</button>
//         <button onClick={stopListening}>❌ Stop Voice Navigation</button>
//         <p>
//           {transcript
//             ? `You said: "${transcript}"`
//             : "Say something to navigate..."}
//         </p>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Import icons
import communitySupportIcon from "../icons/community-support.png";
import learningModulesIcon from "../icons/learning-modules.png";
import budgetTrackerIcon from "../icons/budget-tracker.png";
import investmentPlansIcon from "../icons/investment-plans.png";
import chatbotIcon from "../icons/chatbot.png";
import mentorshipIcon from "../icons/mentorship.png";

const Navbar = () => {
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(true);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Check browser support for speech recognition
    if (!browserSupportsSpeechRecognition) {
      setIsSpeechRecognitionSupported(false);
    }
  }, [browserSupportsSpeechRecognition]);

  useEffect(() => {
    const command = transcript.toLowerCase();
    if (command.includes("community support")) {
      navigate("/community-support");
    } else if (command.includes("learning modules")) {
      navigate("/learning-modules");
    } else if (command.includes("budget tracker")) {
      navigate("/budget-tracker");
    } else if (command.includes("investment plans")) {
      navigate("/investment-plans");
    } else if (command.includes("chatbot")) {
      navigate("/chatbot");
    } else if (command.includes("mentorship")) {
      navigate("/mentorship");
    }

    // Reset transcript after navigating
    if (command) {
      setTimeout(() => resetTranscript(), 3000); // Reset after 1 second
    }
  }, [transcript, navigate, resetTranscript]);

  const startListening = () => {
    if (isSpeechRecognitionSupported) {
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    }
  };

  const stopListening = () => {
    if (isSpeechRecognitionSupported) {
      SpeechRecognition.stopListening();
    }
  };

  // Check if the current page is one of the card content pages
  const isCardPage = [
    "/community-support",
    "/learning-modules",
    "/budget-tracker",
    "/investment-plans",
    "/chatbot",
    "/mentorship",
  ].includes(location.pathname);

  if (!isSpeechRecognitionSupported) {
    return (
      <div className="no-support-message">
        <p>
          Your browser doesn't support speech recognition. Please use navigation
          links.
        </p>
      </div>
    );
  }

  if (isCardPage) {
    return null; // Return null if the current page is a card content page
  }

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="header-box">
          <h1>Empowering Women, One Step at a Time.</h1>
          <div className="voice-controls">
            <button onClick={startListening}>Activate Voice Navigation</button>
            <button onClick={stopListening}>Stop Voice Navigation</button>
          </div>
        </div>
      </header>
      <p className="subtitle">
        Financial literacy and independence made simple for you
      </p>
      <h1>What We Provide</h1>
      <div className="card-container">
        <Link to="/community-support">
          <div className="card">
            <img src={communitySupportIcon} alt="Community Support" />
            <h3>Community Support</h3>
            <p>Connect with mentors and other women.</p>
          </div>
        </Link>

        <Link to="/learning-modules">
          <div className="card">
            <img src={learningModulesIcon} alt="Learning Modules" />
            <h3>Learning Modules</h3>
            <p>Learn with videos and information cards.</p>
          </div>
        </Link>

        <Link to="/budget-tracker">
          <div className="card">
            <img src={budgetTrackerIcon} alt="Budget Tracker" />
            <h3>Budget Tracker</h3>
            <p>Manage your expenses and savings.</p>
          </div>
        </Link>

        <Link to="/investment-plans">
          <div className="card">
            <img src={investmentPlansIcon} alt="Investment Plans" />
            <h3>Investment Plans</h3>
            <p>Start small, grow big.</p>
          </div>
        </Link>

        <Link to="/chatbot">
          <div className="card">
            <img src={chatbotIcon} alt="Chatbot" />
            <h3>Chatbot</h3>
            <p>Get instant answers to your questions.</p>
          </div>
        </Link>

        <Link to="/mentorship">
          <div className="card">
            <img src={mentorshipIcon} alt="Mentorship" />
            <h3>Mentorship</h3>
            <p>Get guidance from successful entrepreneurs.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
