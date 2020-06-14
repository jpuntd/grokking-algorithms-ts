class Queue<T> {
  private items: T[] = [];

  public enqueue = (item: T) => this.items.push(item);

  public dequeue(): T {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  public show(): void {
    console.log(this.items);
  }
}

const friends = new Map<string, string[]>();
friends.set("you", ["bob", "claire", "alice"]);
friends.set("bob", ["peggy", "anuj"]);
friends.set("alice", ["peggy"]);
friends.set("anuj", []);
friends.set("peggy", []);
friends.set("claire", ["jonny", "thom"]);
friends.set("thom", []);
friends.set("jonny", []);

export default function bfs(
  friendList: Map<string, string[]> = friends,
  start: string,
  isMatch: Function
): string {
  let visited = new Set<string>();
  let queue = new Queue<string>();
  queue.enqueue(start);
  while (!queue.isEmpty()) {
    queue.show();
    let currentFriend = queue.dequeue();
    if (isMatch(currentFriend)) {
      return currentFriend;
    } else {
      visited.add(currentFriend);
      friendList.get(currentFriend).forEach(friend => {
        if (!visited.has(friend)) {
          queue.enqueue(friend);
        }
      });
    }
  }
  return "not found!";
}
