import binarySearch from "./1-binary-search";
import bfs from "./6-breadth-first-search";

const ns = [0, 2, 5, 8, 9, 23, 56, 78];
console.log(binarySearch(ns, 8));

const users = ["Alice", "Bob", "Claire", "Di", "Erin", "Farah"];
console.log(binarySearch(users, "Bob"));

console.log(
  bfs(undefined, "you", name => name.slice(-1) === "mango".slice(0, 1))
);
