#!/usr/bin/env node
const inquirer = require("inquirer");
const newProject = require("./templates/create");
const chalk = require('chalk')

inquirer
  .prompt([
    {
      type: "list",
      message: "You are here for a new bot aren't you?",
      name: "options",
      choices: ["Yes", "No"],
    },
  ])
  .then(({ options }) => {
      if (options === "Yes") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "botToken",
            message: "BOT TOKEN?",
          },
          {
            type: "input",
            name: "botPrefix",
            message: "BOT PREFIX?",
          },
          {
            type: "input",
            name: "botMongo",
            message: "Your MONGOURL? (If you don't have one just skip)",
          },
          {
            type: "input",
            name: "botLanguage",
            message: "What language should the bot have? (If english just type english or skip this)",
          },
          {
            type: "input",
            name: "botCommandLog",
            message: "Channel ID for Command-Log?",
          },
          {
            type: "input",
            name: "botVC",
            message: "Voice Channel ID for Bot JOIN?",
          },
        ])
        .then(({ botToken, botPrefix, botMongo , botLanguage, botCommandLog, botVC}) => {
          newProject(botToken, botPrefix, botMongo, botLanguage, botCommandLog, botVC);
        });
    } else if(options === "No") {
        inquirer
        .prompt([
            {
				        name: "hegay",
                message: "Then gtfo of here xd"
            }
        ])
    }
  });
