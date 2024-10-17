import  { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleCardClick = (prompt) => {
    setInput(prompt);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Mav's Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Chomi</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div onClick={() => handleCardClick("How can I optimize a React application for better performance?")} className="card">
                <p>How can I optimize a React application for better performance?</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div onClick={() => handleCardClick("What are the key concepts in the field of artificial intelligence?")} className="card">
                <p>What are the key concepts in the field of artificial intelligence?</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div onClick={() => handleCardClick("What are some creative team-building activities for a remote work team?")} className="card">
                <p>What are some creative team-building activities for a remote work team?</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div onClick={() => handleCardClick("What are some hidden gems to visit on a road trip through India?")} className="card">
                <p>What are some hidden gems to visit on a road trip through India?</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" /> : null}
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
