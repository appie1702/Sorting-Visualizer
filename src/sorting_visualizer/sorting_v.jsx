//import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import { get_bubble_animation } from '../sorting_algo/bubblesort';
import './sorting_v.css';
import React, { useState, useEffect, useCallback} from 'react'
import { getMergeSortAnimations } from '../sorting_algo/mergesort';
import { get_insertion_animation } from '../sorting_algo/insertionsort';
import { getquickSortAnimations } from '../sorting_algo/quicksort';

export default function Sortingalgo() {

    const [array, setarray] = useState([]);
    const [number_of_bars, setnumber_of_bars] = useState(100);
    const [algo_speed, setalgo_speed] = useState(30);

    const resetarray = useCallback(() => {
        const array = [];
        for (let i=0; i<number_of_bars; i++) {
            array.push(randomIntFromInterval(5,575));
        }
        setarray(array);
    },[number_of_bars]);


    useEffect(() => {
        resetarray();
    },[resetarray]);

    const handleChange = (event) => {
        setnumber_of_bars(event.target.value);
    }

    const handlespeed = (event) => {
        setalgo_speed((10000/event.target.value));
    }

    function mergeSort() {
        let animations_m = getMergeSortAnimations(array);
        disable_buttons(algo_speed/10, animations_m);
        for (let i=0; i< animations_m.length; i++) {
            console.log(animations_m[i].length)
            const arraybars_m = document.getElementsByClassName('array-bar');

            const is_color_change_m = i % 3 !== 2;
            if (is_color_change_m) {
                const [bar1_index_m, bar2_index_m] = animations_m[i];
                const color_m = i % 3 === 0  ? `#ff00ff` : 'turquoise';
                const bar1_style_m = arraybars_m[bar1_index_m].style;
                const bar2_style_m = arraybars_m[bar2_index_m].style;
                
                setTimeout(() => {
                    bar1_style_m.backgroundColor = color_m;
                    bar2_style_m.backgroundColor = color_m;
                }, i*algo_speed/10);
            }else {
                setTimeout(() => {
                    const [bar1_index_m, newheight_m] = animations_m[i];
                    const bar1_style_m = arraybars_m[bar1_index_m].style;
                    bar1_style_m.height = `${newheight_m}px`;
                    
                }, i*algo_speed/10);
            }
        }
    }

    function insertionSort() {
        let animations_i = get_insertion_animation(array);
        disable_buttons(algo_speed/10,animations_i);
        console.log("working")
        for (let i=0; i< animations_i.length; i++) {
            console.log("loop working")
            const arraybars_i = document.getElementsByClassName('array-bar');

            const is_color_change_i = (animations_i[i][0] === "comp1") || (animations_i[i][0] === "comp2");
            if (is_color_change_i) {
                const [bar1_index_i, bar2_index_i] = animations_i[i].slice(1,3);
                const color_i = animations_i[i][0] === "comp1" ? `#ff00ff` : 'turquoise';
                console.log([bar1_index_i,bar2_index_i]);
                const bar1_style_i = arraybars_i[bar1_index_i].style;
                const bar2_style_i = arraybars_i[bar2_index_i].style;
                console.log("loop working")
                setTimeout(() => {
                    bar1_style_i.backgroundColor = color_i;
                    bar2_style_i.backgroundColor = color_i;
                }, i*algo_speed/10);
            }else {
                setTimeout(() => {
                    const [bar1_index_i, newheight_i] = animations_i[i].slice(1,3);
                    const bar1_style_i = arraybars_i[bar1_index_i].style;
                    bar1_style_i.height = `${newheight_i}px`;
                }, i*algo_speed/10);
            }
        }
    }



    function bubbleSort() {
        let animations_b = get_bubble_animation(array);
        disable_buttons(algo_speed/10, animations_b,);
        for (let i=0; i<animations_b.length; i++) {
            console.log(i)
            const is_color_change_b = ( i % 4 === 0) || ( i % 4 === 1 );
            const arraybars_b = document.getElementsByClassName('array-bar');

            if (is_color_change_b === true) {
                const color_b = ( i % 4 === 0) ? 'red' : 'turquoise';
                const [bar1_index_b, bar2_index_b] = animations_b[i];
                const bar1_style_b = arraybars_b[bar1_index_b].style;
                const bar2_style_b = arraybars_b[bar2_index_b].style;

                setTimeout(() =>{
                    bar1_style_b.backgroundColor = color_b;
                    bar2_style_b.backgroundColor = color_b;

                },i*algo_speed/10);
            }else {
                const [bar_index_b, newheight_b] = animations_b[i];
                if (bar_index_b === -1) {
                    continue;
                }else {
                    const bar_style_b = arraybars_b[bar_index_b].style;
                    setTimeout(() =>{
                        bar_style_b.height = `${newheight_b}px`;
                    },i*algo_speed/10);
                }
            }
            
        }
        
    }

    function quickSort_try() {
        let animations_q = getquickSortAnimations(array);
        disable_buttons(algo_speed/10, animations_q,);
        for (let i=0; i<animations_q.length; i++) {
            console.log(i)
            const is_color_change_q = (animations_q[i][0] !== "overwrite");
            const arraybars_q = document.getElementsByClassName('array-bar');

            if (is_color_change_q === true) {
                const qr = animations_q[i][0];
        
                if(qr === "pivot_active" || qr === "pivot_deactive"){
                    const color_q = animations_q[i][0] === "pivot_active" ? 'red' : 'turquoise';
                    const bar_index_q = animations_q[i][1];
                    const bar_style_q = arraybars_q[bar_index_q].style;
                    setTimeout(() => {
                        bar_style_q.backgroundColor = color_q;
                    },i*algo_speed/10);
                }

                if(qr === "comp1" || qr === "comp2"){
                    const color_q = animations_q[i][0] === "comp1" ? '#ff00ff' : 'turquoise';
                    const [bar1_index_q, bar2_index_q] = animations_q[i].slice(1,3);
                    if (bar1_index_q === -1) {
                        continue;
                    }else{
                        const bar1_style_q = arraybars_q[bar1_index_q].style;
                        const bar2_style_q = arraybars_q[bar2_index_q].style;
                        setTimeout(() => {
                            bar1_style_q.backgroundColor = color_q;
                            bar2_style_q.backgroundColor = color_q;
                        },i*algo_speed/10);
                    }
                }

            }else {
                const [bar_index_q, newheight_q] = animations_q[i].slice(1,3);
                const bar_style_q = arraybars_q[bar_index_q].style;
                setTimeout(() =>{
                    bar_style_q.height = `${newheight_q}px`;
                },i*algo_speed/10);
            }
        }   
    }


    function disable_buttons(time, animations=[]) {
        if (animations.length !== 0) {
        document.getElementById("reset").disabled = true;
        document.getElementById("merge").disabled = true;
        document.getElementById("quick").disabled = true;
        document.getElementById("bubble").disabled = true;
        document.getElementById("insertion").disabled = true;
        document.getElementById("customrange").disabled = true;
        document.getElementById("customspeed").disabled = true;
        setTimeout(() => {
            document.getElementById("reset").disabled = false;
            document.getElementById("merge").disabled = false;
            document.getElementById("quick").disabled = false;
            document.getElementById("bubble").disabled = false;
            document.getElementById("insertion").disabled = false;
            document.getElementById("customrange").disabled = false;
            document.getElementById("customspeed").disabled = false;
        },animations.length*time);
    }else{
        console.log("disabling me gadbd");
    }
    }


    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random() * (max-min+1) + min)
    };
    
    return (
        <>
        <div className='nav_items'>
            <div style={{"text-align": "center"}}><h3 style={{'color': 'white'}}><kbd>Sorting Visualizer</kbd></h3></div>
            <div id="reset_button" style={{'display': 'inline-block'}}>
            <Button className="button" id="reset" variant="light" onClick={() => resetarray()}>Reset</Button>
            </div>
            <div id="typeinp" style={{'display': 'inline-block'}}>
                <div>
                    <span><label for="customrange" className="form-label" style={{'color': 'white'}}>Array Size</label></span>
                    <span><input style={{'margin-left': '4px'}} id="customrange" type="range" min="30" max="200" value={number_of_bars} onChange={handleChange} step="1"/></span>
                </div>
                <div>
                    <span><label for="customspeed" className="form-label" style={{'color': 'white'}}>Speed</label></span>
                    <span><input style={{'margin-left': '30px'}} id="customspeed" type="range" min="80" max="800" value={10000/algo_speed} onChange={handlespeed} step="1"/></span>
                </div>
            </div>
            <div id="buttons" style={{'display': 'inline-block'}}>
                <Button className="button" id="bubble" variant="light"  onClick={() => bubbleSort()}>Bubble</Button>
                <Button className="button" id="quick" variant="light" onClick={() => quickSort_try()}>Quick</Button>
                <Button className="button" id="merge" variant="light" onClick={() => mergeSort()}>Merge</Button>
                <Button className="button" id="insertion" variant="light" onClick={() => insertionSort()}>Insertion</Button>
            </div>
        </div>
        <div className='array-container' >
            {array.map((value, idx) => (
                <div className='array-bar' 
                key={idx} 
                style={{height: `${value}px`, width: `${(1350-2.5*number_of_bars)/(number_of_bars)}px`}}>{value}
                </div>
            ))}
        </div>
        </>
    );
}
