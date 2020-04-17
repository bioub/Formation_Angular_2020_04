const fs = require("fs");

process.chdir(__dirname); // cd langage

const file = "./01-callback-sync-vs-async.js";
const fileCopy = "./01-copy.js";

// Sync
try {
  const content = fs.readFileSync(file, { encoding: "UTF-8" });
  fs.writeFileSync(fileCopy, content);
  console.log("copy done");
} catch (err) {
  console.log(err);
}

// Async
// -> callback hell / pyramid of doom
// callbackhell.com
fs.readFile(file, { encoding: "UTF-8" }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(fileCopy, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("copy done");
      }
    });
  }
});

// Defer -> jQuery
// Promise -> ES2015
// fs.promises.readFile(file, { encoding: "UTF-8" })
//   .then(() => {
//     fs.promises.writeFile(fileCopy, content)
//       .then(() => console.log("copy done"))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

fs.promises.readFile(file, { encoding: "UTF-8" })
  .then(() => fs.promises.writeFile(fileCopy, content))
  .then(() => console.log("copy done"))
  .catch((err) => console.log(err));

// ES2017 -> async functions
async function copy() {
  try {
    const content = await fs.promises.readFile(file, { encoding: "UTF-8" });
    await fs.promises.writeFile(fileCopy, content);
    console.log("copy done");
  } catch (err) {
    console.log(err);
  }
}

copy();
