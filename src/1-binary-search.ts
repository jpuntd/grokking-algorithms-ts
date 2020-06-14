interface SearchResult {
  index: number;
  numberOfLookups: number;
}
export default function binarySearch<T>(
  sortedArray: T[],
  needle: T
): SearchResult {
  let numberOfLookups = 0;
  let [begin, end] = [0, sortedArray.length];
  let mid: number;
  let midValue: T;
  while (begin <= end) {
    mid = Math.floor((begin + end) / 2);
    midValue = sortedArray[mid];
    numberOfLookups++;
    if (midValue === needle) {
      return { index: mid, numberOfLookups };
    }
    if (needle < midValue) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }
  return { index: -1, numberOfLookups };
}
