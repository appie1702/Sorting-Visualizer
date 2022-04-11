export function get_bubble_animation(array) {
    let animations = [];
    let auxiliaryarray = array.slice();
    bubble_sort(auxiliaryarray,animations);
    array = auxiliaryarray;
    return animations;
}

function bubble_sort(auxiliaryarray, animations) {
const n = auxiliaryarray.length;
for(let i=0; i< n-1; i++) {
    for(let j=0; j<n-i-1; j++) {
        animations.push([j,j+1]);
        animations.push([j,j+1]);
        if (auxiliaryarray[j] > auxiliaryarray[j+1]) {
            animations.push([j,auxiliaryarray[j+1]]);
            animations.push([j+1,auxiliaryarray[j]]);
            swap(auxiliaryarray,j,j+1);
            }else {
                animations.push([-1,-1]);
                animations.push([-1,-1]);
            }
        }
    }
}

function swap(auxiliaryarray, index1, index2) {
    //[auxiliaryarray[index1],auxiliaryarray[index2]] = [auxiliaryarray[index2],auxiliaryarray[index1]];
    const temp = auxiliaryarray[index1];
    auxiliaryarray[index1] = auxiliaryarray[index2];
    auxiliaryarray[index2] = temp;
}
