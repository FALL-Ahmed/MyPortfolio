import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: any;
  color?: any;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.icon[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.icon;
    } else {
      return skill.icon[0];
    }
  };

  const getSkillColor = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.color[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.color;
    } else {
      return skill.color[0];
    }
  };

  return (
    <article
  className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 
    max-lg:w-full max-lg:grid-cols-2 max-lg:p-8 max-lg:pt-32 
    ${theme === "dark" ? "bg-[--blackblue] dark-mode-shadow" : "bg-[--icewhite] dark-shadow"}`}
>
<div
  className={`absolute top-15 left-1/2 transform -translate-x-1/2 px-2 py-2 rounded-t-xl flex items-center`}
>
 
        <p className="font-black text-4xl">
          <span className="text-[--orange]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--orange]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8  border-solid border-[0.25rem]  text-center max-lg:items-center    ${
            theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
          }`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: getSkillColor(theme, skill),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            e.currentTarget.style.transform = "scale(1)";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";
            e.currentTarget.style.transform = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
        >
          <img
            src={getSkillIconSrc(theme, skill)}
            alt={`${skill.icon}-icon`}
            className="h-[10rem]"
          />
          <h3 className="text-[2rem] mb-4">
  {skill.title}
</h3>

        </div>
      ))}
    </article>
  );
};

export default SkillSection;
