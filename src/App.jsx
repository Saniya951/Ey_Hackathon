// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<h1>This is Home Page</h1>} />
//           <Route path="/tutorials" element={<h1>This is Tutorials Page</h1>} />
//           <Route path="/about" element={<h1>This is About Page</h1>} />
//           <Route path="/contact" element={<h1>This is Contact Page</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";

import Chatbot from "./components/Chatbot";
import LearningModules from "./components/LearningModules";
import CommunitySupport from "./components/CommunitySupport";
import BudgetTracker from "./components/BudgetTracker";
import InvestmentPlans from "./components/InvestmentPlans";
import Mentorship from "./components/Mentorship";

const App = () => {
  const navigate = useNavigate();

  // List of voice commands and their corresponding routes
  const commands = [
    {
      command: ["go to chatbot", "open chatbot", "chatbot page"],
      callback: () => navigate("/chatbot"),
    },
    {
      command: [
        "go to learning modules",
        "open learning modules",
        "learning modules page",
        "navigate to learning modules",
      ],
      callback: () => navigate("/learning-modules"),
    },
    {
      command: [
        "go to community support",
        "open community support",
        "community support page",
      ],
      callback: () => navigate("/community-support"),
    },
    {
      command: [
        "go to budget tracker",
        "open budget tracker",
        "budget tracker page",
      ],
      callback: () => navigate("/budget-tracker"),
    },
    {
      command: [
        "go to investment plans",
        "open investment plans",
        "investment plans page",
      ],
      callback: () => navigate("/investment-plans"),
    },
    {
      command: ["go to mentorship", "open mentorship", "mentorship page"],
      callback: () => navigate("/mentorship"),
    },
  ];

  // Register the speech commands
  useSpeechRecognition({
    commands,
  });

  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      console.log("You said:", transcript); // Log the transcript for debugging
    }
  }, [transcript]);




  useEffect(() => {
    // Ensure that the Google Translate widget is initialized
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    try {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        const translateSelect = document.querySelector(".goog-te-combo");
        if (translateSelect) {
          translateSelect.value = selectedLanguage;
          translateSelect.dispatchEvent(new Event("change"));
        } else {
          console.error("Google Translate dropdown not found.");
        }
      } else {
        console.error("Google Translate library is not loaded.");
      }
    } catch (error) {
      console.error("Error changing language: ", error);
    }
  };



  return (
    <div className="app">

      <div className="lang">
      <select id="languageSelect" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="bn">Bengali</option>
        <option value="te">Telugu</option>
        <option value="ml">Malayalam</option>
        <option value="gu">Gujarati</option>
        <option value="kn">Kannada</option>
        <option value="mr">Marathi</option>
        <option value="pa">Punjabi</option>
        <option value="or">Odia</option>
        <option value="as">Assamese</option>
        <option value="kok">Konkani</option>
      </select>
      </div>

      <Navbar />
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/learning-modules" element={<LearningModules />} />
        <Route path="/community-support" element={<CommunitySupport />} />
        <Route path="/budget-tracker" element={<BudgetTracker />} />
        <Route path="/investment-plans" element={<InvestmentPlans />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>
    </div>
  );
};

export default App;
