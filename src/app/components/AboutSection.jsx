"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./About-utils/TabButton";
import { About } from "../../../public/images";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML / CSS / SCSS</li>
        <li>JavaScript / TypeScript</li>
        <li>Python</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Express</li>
        <li>Flask</li>
        <li>MongoDb</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FreeCode camp Front-end Development</li>
        <li>ALX Fullstack SWE course</li>
        <li>Enugu State University of Science and Technology </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ALX Fullstack SWE</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={About} alt="About me image " width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-themeblue mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Absolutely, here&rsquo;s a refined version: As a full-stack web
            developer, I excel in blending creativity and technical prowess to
            craft immersive digital experiences. Proficient in both front-end
            and back-end technologies, I wield HTML, CSS, JavaScript, React, and
            Next.js to breathe life into captivating user interfaces
            (front-end). Meanwhile, my expertise in Flask, Express, PostgreSQL,
            and MongoDB empowers me to architect robust and scalable solutions
            (back-end). I navigate version control with Git and GitHub
            seamlessly and deploy applications efficiently using Docker.
            Additionally, my proficiency in Python, C, Bash, and the Linux
            ecosystem adds versatility to my skill set. What truly sets me apart
            is my insatiable thirst for learning and collaborative spirit.
            I&rsquo;m passionate about solving problems and am driven by a
            relentless pursuit of excellence. Let&rsquo;s connect and explore
            how we can innovate together.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
