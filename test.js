const fs = require("fs");
fs.writeFileSync(
    "a.js",
    `
const a  =   1;

console.log(a   )
;
`,
    "utf-8"
);
