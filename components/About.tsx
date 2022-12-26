import React, { useEffect, useState } from "react";

import Double from "./elements/Double";

const About: React.FC = () => {
  const calcAge = () => {
    const birthday = +new Date("August 16, 2007");
    const ageWithDecimals = ((Date.now() - birthday) / 31557600000).toFixed(9);

    return ageWithDecimals;
  };

  const [age, setAge] = useState("15");

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calcAge());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const links = [
    {
      link: "https://top.mlh.io/2022/profiles/juan-almanza",
      abbreviation: "MLH",
      full: "Major League Hacking",
      before: "",
      after: " Top 50"
    },
    {
      link: "https://fedesoft.org/vi-concurso-nacional-de-programacion-para-colegios-2022/",
      abbreviation: "CNPC",
      full: "National Programming Contest",
      before: "",
      after: " Winner"
    },
    {
      link: "http://oc.uan.edu.co/component/k2/item/645-xxxiii-occ-resultados-finales-2022",
      abbreviation: "OCC",
      full: "Colombian Olympiad of Computing",
      before: "First place in ",
      after: ""
    },
    {
      link: "https://asofi.us/",
      abbreviation: "ASOFI",
      full: "Women's Association of Innovation for Rural Development",
      before: "",
      after: " Co-founder"
    }
  ];

  return (
    <Double>
      <div className="large:flex large:flex-col large:items-center large:justify-center">
        <h2 className="text-center w-full mb-6 font-bold text-2xl">About me</h2>
        <div className="flex justify-between flex-wrap">
          <article className="large:w-8/12">
            <p className="mb-4">
              Hi! I&apos;m Juan, a{" "}
              <span className="font-mono font-medium">{age}</span> years old
              Front-End developer based in Colombia building beautiful and
              performant products. Building with Next.js, React, TypeScript and
              more.
            </p>
            <p>
              I started programming when I was 12 years old, when I tried to
              create a text adventure (like in the 70s), in the attempt I
              learned Python, my first programming language and since then it
              has become my obsession, since then I have participated in
              multiple contests and won several awards and recognitions.
            </p>
          </article>
          <article className="w-full mt-8 large:mt-0 large:w-auto large:ml-8">
            <ul className="flex flex-col justify-between min-h-full w-full large:w-auto">
              {links.map(({ link, abbreviation, full, before, after }) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                  key={abbreviation}
                >
                  <li className="border text-lg font-medium rounded-xl text-center p-2 m-2 w-full hover:bg-slate-100">
                    {before}
                    <abbr title={full}>{abbreviation}</abbr>
                    {after}
                  </li>
                </a>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Double>
  );
};

export default About;
