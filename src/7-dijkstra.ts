function lowestCostNode(costs) {
  return;
}

export default function dijkstra(
  graph: Object,
  source: string,
  destination: string
): void {
  let costs: Map<string, number> = new Map();
  let parents: Map<string, string> = new Map();
  let processed: Set<string> = new Set();
  let currentNode;

  Object.keys(graph).forEach(node => costs.set(node, Infinity));
  costs[source] = 0;
  console.log(costs);

  curentNode = lowestCostNode(costs);
}
