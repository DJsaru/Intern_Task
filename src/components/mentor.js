import React from "react";
import "./mentor.css";

const MentorCard = () => {
  return (
    <section>
      <div className="mentor-card">
        <img
          src="https://img.freepik.com/premium-photo/attractive-school-teacher-isolated_115919-22931.jpg?w=1380"
          alt="Mentor Profile"
          className="mentor-image"
        />
        <div className="mentor_name">
          <h2>Mentor & Advisor</h2>
          <p>
            Principal Project Scientist at Indian Institute of Technology,
            Madras
          </p>
        </div>
      </div>

      <div className="mentor-card-one">
        <img
          src="https://img.freepik.com/premium-photo/smiling-businessman-isolated-white_53419-1272.jpg?w=1380"
          alt="Mentor Profile"
          className="mentor-image"
        />
        <h2>Mentor & Advisor</h2>
        <p>
          Principal Project Scientist at Indian Institute of Technology, Madras
        </p>
      </div>
    </section>
  );
};

export default MentorCard;
