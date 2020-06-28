export default function runSetCovering() {
  function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    return new Set(Array.from(setA).filter(item => setB.has(item)));
  }

  let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
  const stations = {
    kone: new Set(["id", "nv", "ut"]),
    ktwo: new Set(["wa", "id", "mt"]),
    kthree: new Set(["or", "nv", "ca"]),
    kfour: new Set(["nv", "ut"]),
    kfive: new Set(["ca", "az"])
  };
  let finalStations = new Set();

  while (statesNeeded.size) {
    console.log(statesNeeded);
    let bestStation = null;
    let statesCovered = new Set();

    for (let station of Object.keys(stations)) {
      let statesForStation = stations[station];
      let covered = intersection<string>(statesNeeded, statesForStation);
      if (covered.size > statesCovered.size) {
        console.log("best station = ", (bestStation = station));
        console.log("states covered = ", (statesCovered = covered));
      }
    }

    finalStations.add(bestStation);
    statesNeeded = new Set(
      Array.from(statesNeeded).filter(state => !statesCovered.has(state))
    );
  }
}
