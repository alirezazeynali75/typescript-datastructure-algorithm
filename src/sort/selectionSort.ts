export function selectioSort(array: number[]): number[] {
    for (let i = 1; i < array.length - 1; i++) {
        let min = i 

        for (let j = i + 1 ; j < array.length; j++ ) {

            if( array[j] < array[min] ){
                min = j 
            }
        }
        const tmp = array[min]
        array[min] = array[i]
        array[i] = tmp

    }
    return array;
}

