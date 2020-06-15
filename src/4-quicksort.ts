export default function quicksort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array.slice(0, 1);
    const rest: T[] = array.slice(1);
    return [
      ...quicksort(rest.filter(x => x <= pivot)),
      pivot,
      ...quicksort(rest.filter(x => x > pivot))
    ];
  }
}
