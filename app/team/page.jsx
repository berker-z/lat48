"use client";
import { useState } from "react";
import Team from "@components/Team";
import TeamSm from "@components/TeamSm";
const TeamPage = () => {
  const [teamToggle, setTeamToggle] = useState(false);

  const handleTToggle = () => {
    return setTeamToggle(!teamToggle);
  };

  return (
    <div>
      <p className="boxxy baslik cursor-pointer" onClick={handleTToggle}>
        {teamToggle ? "v " : "> "}team
      </p>
      <div
        className={`max-h-0 opacity-0 transition-all duration-200 overflow-hidden ${
          teamToggle ? "max-h-full opacity-100" : ""
        }`}
      >
        <Team className="sm:hidden" />
      </div>
      <TeamSm className="notsm:hidden" />
    </div>
  );
};

export default TeamPage;
