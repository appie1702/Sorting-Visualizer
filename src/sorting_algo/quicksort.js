export function getquickSortAnimations(array) {
    const animations = [];
    if (array.length <=1) {
        return array;
    }
    const auxiliaryarray = array.slice();
    quicksorthelper(auxiliaryarray, 0, array.length-1, animations);
    array = auxiliaryarray;
    return animations;
}

function quicksorthelper(auxiliaryarray, low, high, animations) {
    if (low < high) {
        const pi = quick_partition(auxiliaryarray, low, high, animations);
        quicksorthelper(auxiliaryarray, low, pi - 1, animations);
        quicksorthelper(auxiliaryarray, pi + 1, high, animations);
    }else {
        return;
    }
}

function quick_partition(arr, low, high, animations) {
    let pivot = arr[high];
    let i = low;
    animations.push(["pivot_active",high]);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            animations.push(["comp1",i,j]);
            animations.push(["comp2",i,j]);
            swap(arr, i, j, animations);
            i++;
        }else{
            animations.push(["comp1",-1,-1]);
            animations.push(["comp2",-1,-1]);
        }
    }
    animations.push(["pivot_deactive",high]);
    swap(arr, i, high, animations);
    return (i);
}

function swap(arr, i, j,animations) {
    console.log([i,j])
    animations.push(["overwrite",i,arr[j]]);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    animations.push(["overwrite",j,temp]);
}


