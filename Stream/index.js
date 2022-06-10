const fs = require("fs");

const writeAbleStream = fs.createWriteStream("article.txt");

writeAbleStream.write(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
);

writeAbleStream.end();

const readableStream = fs.createReadStream("./article.txt", {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`${readableStream.read()} \n`);
  } catch (error) {
    // console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
