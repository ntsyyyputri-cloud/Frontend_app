import { useEffect, useState } from "react";
import "./App.css";
import Onboarding from "./onboarding";

import logo from "../assets/FinEdu.png";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) {
    return <Onboarding />;
  }

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={logo} alt="FinEdu+" className="logo" />
        <h1>FinEdu+</h1>
      </div>
    </div>
  );
}

export default App;