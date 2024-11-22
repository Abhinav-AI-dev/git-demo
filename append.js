const fs=require("fs");
fs.appendFileSync("./mynewfile1.txt","\n"+new Date().toLocaleDateString());
