import React from "react";
import SkillsSkeleton from "./skeletons/SkillsSkeleton";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiVite,
} from "react-icons/si";

import "../styles/Skills.css";


const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: "Advanced", color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced", color: "#1572b6" },
      { name: "JavaScript", icon: <FaJs />, level: "Intermediate", color: "#f7df1e" },
      { name: "React", icon: <FaReact />, level: "Intermediate", color: "#61dafb" },
    ],
  },
  {
    title: "Backend Development",
    description: "Working with server-side logic and databases.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate", color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, level: "Learning", color: "#ffffff" },
      { name: "Python", icon: <FaPython />, level: "Intermediate", color: "#3776ab" },
      { name: "MongoDB", icon: <SiMongodb />, level: "Learning", color: "#47a248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Learning", color: "#4169e1" },
      { name: "SQL", icon: <FaDatabase />, level: "Intermediate", color: "#ff725e" },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use to build, manage and develop projects.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: "Intermediate", color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, level: "Intermediate", color: "#ffffff" },
      { name: "VS Code", icon: <FaCode />, level: "Advanced", color: "#007acc" },
      { name: "Vite", icon: <SiVite />, level: "Intermediate", color: "#bd34fe" },
    ],
  },
];

/* ---------- Skeleton sub-components ---------- */







/* ---------- Main component ---------- */

const Skills = ({ loading = false }) => {
  return (
    <section
      className={`skills-section${loading ? " skeleton-section" : ""}`}
      id="skills"
    >
      <div className="skills-container">
        {loading ? (
          <SkillsSkeleton />
        ) : (
          <>
            <div className="skills-header">
              <span className="skills-eyebrow">
                <span className="skills-line"></span>
                WHAT I WORK WITH
              </span>
              <h2>
                My <span>Skills</span>
              </h2>
              <p>
                Technologies and tools I use to turn ideas into functional,
                responsive and meaningful digital experiences.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-card-header">
                    <span className="skill-number">0{index + 1}</span>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <div className="skill-item" key={skill.name}>
                        <div
                          className="skill-icon"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <div className="skill-details">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}</span>
                        </div>
                        <span className="skill-arrow">↗</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-bottom">
              <span className="skills-bottom-dot"></span>
              Always learning. Always building. Always improving.
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;