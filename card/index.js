#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import fetch from "node-fetch";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const sendForm = async (name, email, message) => {
  const request = await fetch("https://beta.scidroid.co/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      message
    })
  });

  if (request.ok) {
    console.log(chalk.green("\nMessage sent!\n"));
  } else {
    console.log(chalk.red("\nMessage not sent!\n"));

    console.log("Alternatively, you can send me an email to: hi@scidroid.co");
    open(
      `mailto:hi@scidroid.co?subject=Message%20from%20${name}&body=${message}`
    );
  }
};

const projects = [
  {
    year: "2022",
    name: "Searchy",
    org: "ASOFI",
    description:
      "Searchy is a phone line that allows users to search the internet, even if they don't have an internet connection. It's a convenient tool for accessing information on the go, and it has won the National Programming Contest."
  },
  {
    year: "2022",
    name: "Cough Dashboard",
    org: "Virufy",
    description:
      "Next.js interactive map dashboard for Virufy, with live data of shared data."
  },
  {
    year: "2022",
    name: "AgroScan",
    org: "ASOFI",
    description:
      "AgroScan is a PWA that detects plant diseases with ML, even when offline."
  }
];

const writing = [
  {
    year: "2022",
    name: "Your site is probably illegal",
    description:
      "Learn how to make analytics protect the privacy of your users and learn how to do it easily."
  },
  {
    year: "2021",
    name: "Learning to code in Python",
    description:
      "Learn to program in Python, a high-level, interpreted, multi-paradigm language used for Web with Flask and Django, Artificial Intelligence and Data Science."
  },
  {
    year: "2021",
    name: "Our computers runs on sand",
    description:
      "Yes, although it seems incredible what I am saying our economy works with sand. well, not exactly, it is a component of sand called silicon."
  }
];

const awards = [
  {
    year: "2022",
    name: "First Place from Colombian Olympiad of Computation",
    description:
      "Selected for training camp and possible member of the Colombian team for the International Olympiad in Informatics."
  },
  {
    year: "2022",
    name: "MLH Top 50 Class of 2022",
    description:
      "Selected as one of the most influential hackers in the 2022 season in the MLH community."
  },
  {
    year: "2022",
    name: "Third Place from National Programming Contest",
    description:
      "Doing research on social issues and building solutions to help vulnerable communities around the world."
  }
];

const workExperience = [
  {
    year: "2022 — Now",
    name: "Fullstack Engineer",
    org: "Ninjo",
    description:
      "Building a platform to collect the stories of people around the world. Working with Next.js and CMS Products."
  },
  {
    year: "2022 — Now",
    name: "Co-founder",
    org: "ASOFI",
    description:
      "Building products and projects to break the cycle of poverty in the colombian rural population."
  },
  {
    year: "2022 — Now",
    name: "Web Developer",
    org: "Virufy",
    description:
      "Building web experiences for fighting against the COVID-19 pandemic."
  }
];

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Contact me`,
        value: async () => {
          const { name, email, message } = await prompt([
            {
              type: "input",
              name: "name",
              message: "What's your name?"
            },
            {
              type: "input",
              name: "email",
              message: "What's your email?"
            },
            {
              type: "input",
              name: "message",
              message: "What's your message?"
            }
          ]);

          console.log("Sending message...");

          await sendForm(name, email, message);
        }
      },
      {
        name: "Read my resume",
        value: () => {
          open("https://cv.scidroid.co/");
        }
      },
      {
        name: "View my projects",
        value: () => {
          projects.map(project => {
            const year = chalk.white(project.year);
            const name = chalk.bold.green(project.name);
            const org = chalk.white(project.org);
            const description = chalk.white(project.description);

            console.log(`\n${year} - ${name} at ${org}\n\n${description}\n`);
          });
        }
      },
      {
        name: "View my writing",
        value: () => {
          writing.map(article => {
            const year = chalk.white(article.year);
            const name = chalk.bold.green(article.name);
            const description = chalk.white(article.description);

            console.log(`\n${year} - ${name}\n\n${description}\n`);
          });
        }
      },
      {
        name: "View my awards",
        value: () => {
          awards.map(award => {
            const year = chalk.white(award.year);
            const name = chalk.bold.green(award.name);
            const description = chalk.white(award.description);

            console.log(`\n${year} - ${name}\n\n${description}\n`);
          });
        }
      },
      {
        name: "View my work experience",
        value: () => {
          workExperience.map(experience => {
            const year = chalk.white(experience.year);
            const name = chalk.bold.green(experience.name);
            const org = chalk.white(experience.org);
            const description = chalk.white(experience.description);

            console.log(`\n${year} - ${name} at ${org}\n\n${description}\n`);
          });
        }
      },
      {
        name: "Exit",
        value: () => {
          console.log("Good bye!\n");
        }
      }
    ]
  }
];

const calcAge = () => {
  const birthday = +new Date("August 16, 2007");
  const ageWithDecimals = ((Date.now() - birthday) / 31557600000).toFixed(9);

  return ageWithDecimals;
};

const name = chalk.bold.green("  Juan Almanza");
const handle = chalk.white("@scidroid");
const work = chalk.white("Front-End Developer in Colombia, He/Him");
const aboutMe1 = chalk.green(
  `Hi! I'm Juan, a ${calcAge()} years old Front-End developer based in Colombia building beautiful and performant products. Building with Next.js, React, TypeScript, and more.`
);
const aboutMe2 = chalk.white(
  "I started programming when I was 12 years old, when I tried to create a text adventure (like in the 70s), in the attempt I learned Python, my first programming language and since then it has become my obsession, I have participated in multiple contests and won several awards and recognitions."
);

const website = chalk.dim("Website: ") + chalk.green("https://scidroid.co");
const resume = chalk.dim("Resume: ") + chalk.green("https://cv.scidroid.co");
const github = chalk.dim("GitHub: ") + chalk.green("@scidroid");
const linkedin = chalk.dim("LinkedIn: ") + chalk.green("/in/scidroid");
const devpost = chalk.dim("Devpost: ") + chalk.green("@scidroid");
const npx = chalk.red("npx") + " " + chalk.white("scidroid");

const box = boxen(
  [
    `${name} ${handle}`,
    ``,
    `${work}`,
    ``,
    `${aboutMe1}`,
    ``,
    `${aboutMe2}`,
    ``,
    `${website}`,
    `${resume}`,
    `${github}`,
    `${linkedin}`,
    `${devpost}`,
    `${npx}`
  ].join("\n"),
  {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green"
  }
);

const run = async () => {
  console.log(box);
  const { action } = await prompt(questions);
  await action();
};

run();
