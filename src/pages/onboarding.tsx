import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./onboarding.css";

type OnboardingData = {
  image: string;
  title: string;
};
 
const onboardingScreens: OnboardingData[] = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Mulai Kelola\nKeuangan Anda\ndengan Cerdas",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    title: "Aplikasi Kelola\nKeuangan yang\nMudah Digunakan",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2620/2620983.png",
    title: "Dengan Beragam\nmodul dan fitur\nsimulasi yang\nmenarik",
  },
];
 
// ✅ Fix 1: Component name must be PascalCase — "Onboarding" not "onboarding"
// React only treats PascalCase functions as components; lowercase = treated as
// an HTML tag, which breaks rendering and causes the layout offset you're seeing
function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); // ✅ add this

  // ✅ Fix 2: Use functional updater to avoid stale closure on currentPage
  const handleSkip = () => {
    setCurrentPage((prev) => {
      if (prev < onboardingScreens.length - 1) return prev + 1;
      return prev;
    });
  };
 
  return (
    <div className="onboarding">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
        }}
      >
        {onboardingScreens.map((item, index) => (
          <div className="page" key={index}>
            <div className="content">
              <img
                src={item.image}
                alt="onboarding"
                className="image"
              />
              <h1 className="title">
                {item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
            </div>
 
            <div className="bottom">
              {index !== onboardingScreens.length - 1 ? (
                <button className="skip-btn" onClick={handleSkip}>
                  Skip →
                </button>
              ) : (
                // ✅ Fix 3: Don't use <a href="Login.jsx"> — use a proper route
                // Replace the href below with your actual login route path
                <button className="start-btn" onClick={() => navigate("/login")}>
                  Mulai
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Onboarding;