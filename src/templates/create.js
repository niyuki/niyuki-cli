const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const symbols = require("log-symbols");
const res = path.resolve;
const exist = fs.existsSync;
module.exports = async function (token, prefix, mongo, language, CommandLog, VC) {
  if (exist(res("src")))
    return console.log(
      chalk.red(`${symbols.error} Please delete the "src" directory`)
    );
  await fs.mkdirSync(res("src"));
  //package json
  fs.readFile(
    res(path.join(__dirname, `..`, "onewbot", "package.json")),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("package.json"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} package.json is ready xd!`));
    }
  );

  // setting.json
  const config = res("src/setting.json");
  await fs.writeFileSync(config, 
`{
    "token": "${token}",
    "prefix": "${prefix}",
    "mongopath": "${mongo}",
    "language": "${language}",
    "CommandLog": "${CommandLog}",
    "voicechannel": "${VC}"
}`);
  console.log(chalk.green(`${symbols.success} setting.json is ready xd!`));

  // index.js
  const index = res("src/niyuki.js");
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "niyuki.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(index, data, (err) => console.log(err));
      console.log(chalk.green(`${symbols.success} niyuki.js is ready xd!`));
    }
  );

  // handler folder and files
  fs.mkdirSync(res("src/handlers"));
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "command.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/handlers/command.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} command.js is ready xd!`));
    }
  );
      // handler folder and files
  fs.mkdirSync(res("src/models"));
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "afkschema.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/models/afkschema.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} afkschema.js is ready xd!`));
    }
  );
  // events folder and files
  fs.mkdirSync(res("src/events"));
  fs.mkdirSync(res("src/events/Standard"));
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "ready.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/events/Standard/ready.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} ready.js is ready!`));
    }
  );
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "message.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/events/Standard/message.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} message.js is ready!`));
    }
  );
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "snipes.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/events/Standard/snipes.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} snipes.js is ready!`));
    }
  );

  // commands folder and files
  fs.mkdirSync(res("src/commands"));
  fs.mkdirSync(res("src/commands/info"));
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "ping.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/commands/info/ping.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} ping.js is ready for test!`));
    }
  );
    fs.readFile(
      path.join(__dirname, "..", "onewbot", "avatar.js"),
      "utf8",
      async (err, data) => {
        if (err) throw err;
        await fs.writeFileSync(res("src/commands/info/avatar.js"), data, (err) =>
          console.log(err)
        );
        console.log(chalk.green(`${symbols.success} avatar.js is ready for test!`));
      }
    );
  fs.readFile(
    path.join(__dirname, "..", "onewbot", "device.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/commands/info/device.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} device.js is ready for test!`));
    }
  );
    fs.readFile(
      path.join(__dirname, "..", "onewbot", "eval.js"),
      "utf8",
      async (err, data) => {
        if (err) throw err;
        await fs.writeFileSync(res("src/commands/info/eval.js"), data, (err) =>
          console.log(err)
        );
        console.log(chalk.green(`${symbols.success} eval.js is ready for test!`));
      }
    );
        fs.readFile(
          path.join(__dirname, "..", "onewbot", "snipe.js"),
          "utf8",
          async (err, data) => {
            if (err) throw err;
            await fs.writeFileSync(res("src/commands/info/snipe.js"), data, (err) =>
              console.log(err)
            );
            console.log(chalk.green(`${symbols.success} snipe.js is ready for test!`));
          }
        );
        fs.readFile(
          path.join(__dirname, "..", "onewbot", "help.js"),
          "utf8",
          async (err, data) => {
            if (err) throw err;
            await fs.writeFileSync(res("src/commands/info/help.js"), data, (err) =>
              console.log(err)
            );
            console.log(chalk.green(`${symbols.success} help.js is ready for test!`));
          }
        );
        fs.readFile(
          path.join(__dirname, "..", "onewbot", "clear.js"),
          "utf8",
          async (err, data) => {
            if (err) throw err;
            await fs.writeFileSync(res("src/commands/info/clear.js"), data, (err) =>
              console.log(err)
            );
            console.log(chalk.green(`${symbols.success} clear.js is ready for test!`));
          }
        );
        fs.readFile(
          path.join(__dirname, "..", "onewbot", "afk.js"),
          "utf8",
          async (err, data) => {
            if (err) throw err;
            await fs.writeFileSync(res("src/commands/info/afk.js"), data, (err) =>
              console.log(err)
            );
            console.log(chalk.green(`${symbols.success} afk.js is ready for test!`));
          }
        );
};
