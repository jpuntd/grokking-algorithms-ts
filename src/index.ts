import binarySearch from "./1-binary-search";
import bfs from "./6-breadth-first-search";
import quicksort from "./4-quicksort";
import runSetCovering from "./8-set-covering";

const ns = [0, 2, 5, 8, 9, 23, 56, 78];
console.log(binarySearch(ns, 8));

const users = ["Alice", "Bob", "Claire", "Di", "Erin", "Farah"];
console.log(binarySearch(users, "Bob"));

console.log(
  bfs(undefined, "you", name => name.slice(-1) === "mango".slice(0, 1))
);

const xs = [2, 5, 8, 9, 1, 3, 7, 7, 10];
const mangoGrowers = ["Alice", "Di", "Erin", "Farah", "Bob", "Claire", "Amir"];
console.log(quicksort(xs));
console.log(quicksort(mangoGrowers));

const graph: Object = {
  book: { lp: 5, poster: 0 },
  lp: { bass: 15, drums: 20 },
  bass: { piano: 20 },
  piano: {},
  drums: { piano: 10 },
  poster: { drums: 35, bass: 30 }
};

runSetCovering();
