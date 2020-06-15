export default function quicksort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  } else {
    const [pivot, ...rest]: [T, T[]] = array;
    return [
      ...quicksort(rest.filter(x => x <= pivot)),
      pivot,
      ...quicksort(rest.filter(x => x > pivot))
    ];
  }
}
