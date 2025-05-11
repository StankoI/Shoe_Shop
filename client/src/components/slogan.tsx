import "./slogan.css";

const Slogan = () => {
  return (
    <div className="slogan-section">
      <div className="slogan-text">
        <div className="slogan-badge">
          <div className="badge-new">New</div>
          <div className="badge-label">Sustainable Collection 2025</div>
        </div>

        <div className="slogan-heading">
          <div>Step</div>
          <div>Into</div>
          <div className="text-green">Comfort</div>
          <div>, </div>
          <div>Walk</div>
          <div>With</div> 
          <div className="text-orange">Style </div>
        </div>

        <div className="slogan-description">
          Discover our premium collection of shoes designed for comfort, style, and sustainability.
        </div>

        <div className="slogan-buttons">
          <button className="btn btn-black">Shop Now</button>
          <button className="btn btn-white">Learn More</button>
        </div>
      </div>

      <div className="slogan-image-wrapper">
        <div className="slogan-image"></div>
        <div className="color-options">
          <div className="color-circle green"></div>
          <div className="color-circle blue"></div>
          <div className="color-circle orange"></div>
          <div className="color-text">+12 Colors</div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
