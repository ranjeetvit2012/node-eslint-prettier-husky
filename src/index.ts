import express from "express";
import userData from "./user";
const app = express();
const port = 3000;

userData();

/*eslint space-before-function-paren: "error"*/
// function foo() {
//   // ...
// }

// var bar = function() {
//   // ...
// };

// var bar = function foo() {
//   // ...
// };
// Examples of correct code for this rule with the default "always" option:
// function foo() {
//   // ...
// }

// const bar = function () {
//   // ...
// };

// foo();
// bar();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
