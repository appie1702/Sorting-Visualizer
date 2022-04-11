export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <=1) {
        return array;
    }
    const auxiliaryarray = array.slice();
    mergesorthelper(array, 0, array.length-1, auxiliaryarray, animations);
    return animations;
}

function mergesorthelper(mainarray, start, end, auxiliaryarray, animations) {
    if (start === end) {
        return;
    }
    const middle = Math.floor((start+end)/2);
    mergesorthelper(auxiliaryarray, start, middle, mainarray, animations);
    mergesorthelper(auxiliaryarray, middle+1, end, mainarray, animations);
    
    domerge(mainarray, start, middle, end, auxiliaryarray, animations);
}

function domerge(mainarray, start, middle, end, auxiliaryarray, animations) {
    let i = start;
    let j = middle+1;
    let k = start;

    while (i <= middle && j <= end) {

        animations.push([i ,j]);
        animations.push([i, j]);
        if (auxiliaryarray[i] <= auxiliaryarray[j]) {
            animations.push([k,auxiliaryarray[i]]);
            mainarray[k++] = auxiliaryarray[i++];
        }else {
            animations.push([k,auxiliaryarray[j]]);
            mainarray[k++] = auxiliaryarray[j++];
        }
    }

    while (i <= middle) {
        animations.push([i,i]);
        animations.push([i,i]);

        animations.push([k,auxiliaryarray[i]]);
        mainarray[k++] = auxiliaryarray[i++];
    }
    while (j <= end) {
        animations.push([j,j]);
        animations.push([j,j]);

        animations.push([k,auxiliaryarray[j]]);
        mainarray[k++] = auxiliaryarray[j++];
    }
}