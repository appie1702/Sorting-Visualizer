export function get_insertion_animation(array) {
    let animations = [];
    let auxiliaryarray = array.slice();
    insertion_sort(auxiliaryarray,animations);
    array = auxiliaryarray;
    return animations;
}

function insertion_sort(arr,animations) {
    let i, key, j;
    for (i = 1; i < arr.length; i++)
    {
        key = arr[i]; 
        j = i - 1;
        if(j>=0) {
        animations.push(["comp1", j, i]);
        animations.push(["comp2", j, i]);
        }
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key){
            animations.push(["overwriting", j+1, arr[j]]);
            arr[j + 1] = arr[j];
            j = j - 1;
            if (j>=0) {
                animations.push(["comp1", j, i]);
                animations.push(["comp2", j, i]);
            }
        }
        animations.push(["overwriting", j+1, key])
        arr[j + 1] = key;
    }
}
