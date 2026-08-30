

const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

function createFile() {
  console.log("Creating File...");
  try {
    fs.writeFileSync(filePath, "Hello Node.js");
    logger.success("File Created");
  } catch (err) {
    logger.error(`Failed to create file: ${err.message}`);
  }
}

function readFile() {
  console.log("Reading File");
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      logger.error("File not found. Nothing to read.");
    } else {
      logger.error(`Failed to read file: ${err.message}`);
    }
  }
}

function updateFile() {
  try {
    fs.appendFileSync(filePath, "\nLearning FS Module");
    logger.success("File Updated");
  } catch (err) {
    logger.error(`Failed to update file: ${err.message}`);
  }
}

function deleteFile() {
  try {
    fs.unlinkSync(filePath);
    logger.success("File Deleted");
  } catch (err) {
    if (err.code === "ENOENT") {
      logger.error("File not found. Nothing to delete.");
    } else {
      logger.error(`Failed to delete file: ${err.message}`);
    }
  }
}


createFile();
readFile();
updateFile();
readFile();
deleteFile();


readFile();
