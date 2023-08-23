const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    // "echo hola como estas   " -> ["echo", "hola", "como", "estas"]
    let args = data.toString().trim().split(" ");
    // "echo hola"
    // ["hola", "como", "estas"]
    const cmd = args.shift();
    // echo
    if (commands[cmd]) commands[cmd](print, args.join(" "));
    else print(`command not found: ${cmd}`);
  });
}

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};
