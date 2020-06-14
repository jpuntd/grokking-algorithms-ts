class Queue<T> {
  private items: T[] = [];
  
  public enqueue= (item: T) => this.items.push(item);

  public dequeue(): T {
      return this.items.shift();
  }

  isEmpty():boolean {
      return this.items.length === 0;
  }
}

const friends = new Map<string, string[]>();
friends.set('you',['bob', 'claire','alice']);
friends.set('bob',['peggy', 'anuj']);
friends.set('alice',['peggy']);
friends.set('anuj',[]);
friends.set('peggy',[]);
friends.set('claire',['jonny','thom']);
friends.set('thom',[]);
friends.set('jonny',[]);


export default bfs(friendList:Map<string, string[]>, start:string, isMatch:Function ):string {
  let visited = new Set<string>();
  let queue = new Queue<string>();
  queue.enqueue(start);
  while (!queue.isEmpty) {
    let currentFriend = queue.dequeue();
    if isMatch(currentFriend) {
      return currentFriend;
    } else {
      friendList.get(currentFriend).forEach(friend => {
        queue.enqueue(friend);
      })
    }
  }
  return 'not found!';
}

