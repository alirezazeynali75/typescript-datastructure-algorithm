
export function insertionSort(array: number[]): number[] {
    IndexIterator:
    for (let i = 1; i< array.length; i++) {
        const key = array[i];

        InsertionKey:
        for (let j = i-1 ; j>=0; j--) {
            if (key >= array[j]) {
                array[j + 1] = key
                continue IndexIterator
            } else {
                array[j + 1] = array[j];
                array[j] = key
                continue InsertionKey
            }
        }
    }
    return array;
} 