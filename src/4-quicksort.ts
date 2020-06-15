export default function quicksort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const rest = array.slice(1) as T[];
    return [
      ...quicksort(rest.filter(x => x <= pivot)),
      pivot,
      ...quicksort(rest.filter(x => x > pivot))
    ] as T[];
  }
}
