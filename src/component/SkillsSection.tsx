"use client";
import {
  Html,
  Js,
  Python,
  React,
  Scss,
  Figma,
  GitHub,
  Flask,
  Git,
  Affinity,
  Bootstrap,
  Css,
  Mongo,
  Mysql,
  Netlify,
  Vercel,
  GitLab,
  Kubernetes,
  Docker,
  PostgreSql,
  Selenium,
  Jest,
  Django,
  
  FastApi,
  NextJs,
  NodeJs,
  CLang,
  Bash,
} from "@/images/index";
import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  img: any;
}

const Skills: React.FC<{ numberOfSkills?: number }> = ({
  numberOfSkills = 4,
}) => {
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingImages(false);
    }, 500);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const skillsList: SkillItem[] = [
    { name: "Python", img: Python },
    { name: "Javascript", img: Js },
    { name: "Html5", img: Html },
    { name: "CSS3", img: Css },
    { name: "React", img: React },
    { name: "Django", img: Django },
    { name: "Git", img: Git },
    { name: "MongoDb", img: Mongo },
    { name: "Docker", img: Docker },
    { name: "Vercel", img: Vercel },
    { name: "PostgreSql", img: PostgreSql },
    { name: "Flask", img: Flask },
    { name: "GitLab", img: GitLab },
    { name: "Kubernetes", img: Kubernetes },
    { name: "Jest", img: Jest },
    { name: "FastApi", img: FastApi },
    { name: "NextJs", img: NextJs },
    { name: "AWS", img: AWS },
    { name: "NodeJs", img: NodeJs },
    { name: "CLang", img: CLang },
    { name: "Bash", img: Bash },
    { name: "Selenium", img: Selenium },
    { name: "Scss", img: Scss },
    { name: "Figma", img: Figma },
    { name: "GitHub", img: GitHub },
    { name: "Affinity", img: Affinity },
    { name: "Bootrap", img: Bootstrap },
    { name: "SQl", img: Mysql },
    { name: "Netlify", img: Netlify },
  ];

  const getNumberOfRows = (): number => {
    return Math.ceil(numberOfSkills / 4); // Calculate number of rows
  };

  const renderSkills = (skills: SkillItem[]): JSX.Element[] =>
    skills.map((skill) => (
      <div key={skill.name} className={`${skill.name} skill-img `}>
        <img src={skill.img} alt={`An image of ${skill.name}`} />
        <p className={skill.name}>{skill.name}</p>
      </div>
    ));

  const renderRows = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    const numRows = getNumberOfRows();
    for (let i = 0; i < numRows; i++) {
      const startIndex = i * 4;
      const endIndex = Math.min(startIndex + 4, numberOfSkills); // Avoid exceeding skillsList length
      const skillsForRow = skillsList.slice(startIndex, endIndex);
      rows.push(
        <div key={i} className="row">
          {renderSkills(skillsForRow)}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="skill__section">
      <div className="container">
        <div className="skill__section-content">{renderRows()}</div>
        <div className="see-more">
          <section>
            <a href="/skills">
              <p>See more</p>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
