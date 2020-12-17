let array;
let prev;
let arrayElements;
const sortingAlgorithms = document.querySelectorAll('.algorithm');
async function delay() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, document.getElementById('sorting-speed').value);
    });
}
function generateNewArray() {
    sortingAlgorithms.forEach(algorithm => {
        algorithm.classList.remove('selected');
    })
    if (this.type === 'range' && document.getElementById('array-size').value === prev)
        return;
    array = [];
    arrayElements = document.querySelectorAll('.array-element');
    for (let i = 0; i < arrayElements.length; ++i) {
        arrayElements[i].remove();
    }
    for (let i = 0; i < document.getElementById('array-size').value; ++i) {
        const div = document.createElement('div');
        const width = 598 / document.getElementById('array-size').value;
        div.style.width = `${Math.round(width)}px`;
        div.style.backgroundColor = '#1AA6B7';
        const height = Math.floor(Math.random() * (504 - 16 + 1) + 16);
        array.push(height);
        div.style.height = `${height}px`;
        div.classList.add('array-element');
        document.querySelector('.array-container').appendChild(div);
    }
    prev = document.getElementById('array-size').value;
    arrayElements = document.querySelectorAll('.array-element');
}
async function BubbleSort() {
    let temp;
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array.length - i - 1; ++j) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                arrayElements[j].style.backgroundColor = 'red';
                arrayElements[j + 1].style.backgroundColor = 'red';
                await delay();
                array[j] = array[j + 1];
                arrayElements[j].style.height = `${array[j + 1]}px`;
                array[j + 1] = temp;
                arrayElements[j + 1].style.height = `${temp}px`;
                await delay();
                arrayElements[j].style.backgroundColor = 'green';
                arrayElements[j + 1].style.backgroundColor = 'green';
                await delay();
                arrayElements[j].style.backgroundColor = ' #1AA6B7';
                arrayElements[j + 1].style.backgroundColor = ' #1AA6B7';
            }
            else {
                arrayElements[j].style.backgroundColor = 'green';
                arrayElements[j + 1].style.backgroundColor = 'green';
                await delay();
                arrayElements[j].style.backgroundColor = ' #1AA6B7';
                arrayElements[j + 1].style.backgroundColor = ' #1AA6B7';
            }
        }
        arrayElements[arrayElements.length - i - 1].style.backgroundColor = '#F0A500';
    }
    arrayElements.forEach(arrayBar => {
        arrayBar.style.backgroundColor = 'green';
    })
    await new Promise(resolve => {
        setTimeout(() => {
            arrayElements.forEach(arrayBar => {
                arrayBar.style.backgroundColor = '#F0A500';
            })
            resolve();
        }, 500);
    });
}
async function SelectionSort() {
    let minValue;
    let temp;
    for (let i = 0; i < array.length; ++i) {
        minValue = i;
        arrayElements[i].style.backgroundColor = 'blue';
        for (let j = i + 1; j < array.length; ++j) {
            arrayElements[j].style.backgroundColor = 'red';
            await delay();
            if (array[j] < array[minValue]) {
                arrayElements[minValue].style.backgroundColor = '#1AA6B7';
                minValue = j;
                arrayElements[j].style.backgroundColor = 'blue';
            }
            else {
                arrayElements[j].style.backgroundColor = '#1AA6B7';
            }
        }
        temp = array[i];
        await delay();
        arrayElements[minValue].style.backgroundColor = 'red';
        arrayElements[i].style.backgroundColor = 'red';
        await delay();
        array[i] = array[minValue];
        arrayElements[i].style.height = arrayElements[minValue].style.height;
        array[minValue] = temp;
        arrayElements[minValue].style.height = `${temp}px`;
        await delay();
        arrayElements[minValue].style.backgroundColor = '#1AA6B7';
        arrayElements[i].style.backgroundColor = 'green';
        await delay();
        arrayElements[i].style.backgroundColor = '#F0A500';
    }
    arrayElements.forEach(arrayBar => {
        arrayBar.style.backgroundColor = 'green';
    })
    await new Promise(resolve => {
        setTimeout(() => {
            arrayElements.forEach(arrayBar => {
                arrayBar.style.backgroundColor = '#F0A500';
            })
            resolve();
        }, 700);
    });
}
async function InsertionSort() {
    let temp;
    let j;
    for (let i = 0; i < array.length; ++i) {
        temp = array[i];
        j = i;
        arrayElements[i].style.backgroundColor = 'red';
        while (j > 0 && temp < array[j - 1]) {
            await delay();
            array[j] = array[j - 1];
            arrayElements[j].style.height = `${parseInt(arrayElements[j - 1].style.height.substring(0, arrayElements[j - 1].style.height.search('p')))}px`;
            arrayElements[j].style.backgroundColor = 'green';
            arrayElements[j - 1].style.backgroundColor = 'red';
            --j;
        }
        await delay();
        array[j] = temp;
        arrayElements[j].style.height = `${temp}px`;
        arrayElements[j].style.backgroundColor = 'green';
    }
    await new Promise(resolve => {
        setTimeout(() => {
            arrayElements.forEach(arrayBar => {
                arrayBar.style.backgroundColor = '#F0A500';
            })
            resolve();
        }, 500)
    })
}
async function merge(mainArray, startIndex, midIndex, endIndex, auxiliaryArray) {
    let turn = startIndex;
    let i = startIndex;
    let j = midIndex + 1;
    while (i <= midIndex && j <= endIndex) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            arrayElements[turn].style.backgroundColor = 'blue';
            arrayElements[i].style.backgroundColor = 'red';
            if (startIndex === 0 && endIndex === array.length - 1 && i <= turn) {
                arrayElements[i].style.backgroundColor = '#F0A500';
            }
            arrayElements[j].style.backgroundColor = 'red';
            if (startIndex === 0 && endIndex === array.length - 1 && j <= turn) {
                arrayElements[j].style.backgroundColor = '#F0A500';
            }
            await delay();
            arrayElements[i].style.backgroundColor = 'green';
            if (startIndex === 0 && endIndex === array.length - 1 && i <= turn) {
                arrayElements[i].style.backgroundColor = '#F0A500';
            }
            await delay();
            arrayElements[i].style.backgroundColor = '#1AA6B7';
            if (startIndex === 0 && endIndex === array.length - 1 && i <= turn) {
                arrayElements[i].style.backgroundColor = '#F0A500';
            }
            arrayElements[j].style.backgroundColor = '#1AA6B7';
            if (startIndex === 0 && endIndex === array.length - 1 && j <= turn) {
                arrayElements[j].style.backgroundColor = '#F0A500';
            }
            mainArray[turn] = auxiliaryArray[i];
            arrayElements[turn].style.backgroundColor = 'green';
            arrayElements[turn].style.height = `${auxiliaryArray[i++]}px`;
            await delay();
            arrayElements[turn].style.backgroundColor = '#1AA6B7';

        }
        else {
            arrayElements[turn].style.backgroundColor = 'blue';
            arrayElements[i].style.backgroundColor = 'red';
            if (startIndex === 0 && endIndex === array.length - 1 && i <= turn) {
                arrayElements[i].style.backgroundColor = '#F0A500';
            }
            arrayElements[j].style.backgroundColor = 'red';
            if (startIndex === 0 && endIndex === array.length - 1 && j <= turn) {
                arrayElements[j].style.backgroundColor = '#F0A500';
            }
            await delay();
            arrayElements[j].style.backgroundColor = 'green';
            if (startIndex === 0 && endIndex === array.length - 1 && j <= turn) {
                arrayElements[j].style.backgroundColor = '#F0A500';
            }
            await delay();
            arrayElements[i].style.backgroundColor = '#1AA6B7';
            if (startIndex === 0 && endIndex === array.length - 1 && i <= turn) {
                arrayElements[i].style.backgroundColor = '#F0A500';
            }
            arrayElements[j].style.backgroundColor = '#1AA6B7';
            if (startIndex === 0 && endIndex === array.length - 1 && j <= turn) {
                arrayElements[j].style.backgroundColor = '#F0A500';
            }
            mainArray[turn] = auxiliaryArray[j];
            arrayElements[turn].style.backgroundColor = 'green';
            arrayElements[turn].style.height = `${auxiliaryArray[j++]}px`;
            await delay();
            arrayElements[turn].style.backgroundColor = '#1AA6B7';
        }
        if (startIndex === 0 && endIndex === array.length - 1) {
            arrayElements[turn].style.backgroundColor = '#F0A500';
        }
        ++turn;
    }
    while (i <= midIndex) {
        mainArray[turn] = auxiliaryArray[i];
        arrayElements[turn].style.height = `${auxiliaryArray[i++]}px`;
        if (startIndex === 0 && endIndex === array.length - 1) {
            arrayElements[turn].style.backgroundColor = '#F0A500';
        }
        ++turn
    }
    while (j <= endIndex) {
        mainArray[turn] = auxiliaryArray[j];
        arrayElements[turn].style.height = `${auxiliaryArray[j++]}px`;
        if (startIndex === 0 && endIndex === array.length - 1) {
            arrayElements[turn].style.backgroundColor = '#F0A500';
        }
        ++turn
    }
    if (startIndex === 0 && endIndex === array.length - 1) {
        arrayElements.forEach(arrayBar => {
            arrayBar.style.backgroundColor = 'green';
        })
        await new Promise(resolve => {
            setTimeout(() => {
                arrayElements.forEach(arrayBar => {
                    arrayBar.style.backgroundColor = '#F0A500';
                })
                resolve();
            }, 500);
        });
    }
}
async function MergeSort(mainArray, startIndex, endIndex, auxiliaryArray) {
    if (startIndex === endIndex) {
        return;
    }
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    await MergeSort(auxiliaryArray, startIndex, midIndex, mainArray);
    await MergeSort(auxiliaryArray, midIndex + 1, endIndex, mainArray);
    await merge(mainArray, startIndex, midIndex, endIndex, auxiliaryArray);
}
async function partition(startIndex, endIndex) {
    let ptr = startIndex;
    arrayElements[ptr].style.backgroundColor = 'blue';
    //let randomIndex = Math.floor(Math.random() * (Math.floor(endIndex) - Math.ceil(startIndex) + 1) + Math.ceil(startIndex));
    //[array[randomIndex], array[endIndex]] = [array[endIndex], array[randomIndex]];
    //arrayElements[randomIndex].style.height = `${array[randomIndex]}px`;
    //arrayElements[endIndex].style.height = `${array[endIndex]}px`;
    for (let i = startIndex; i < endIndex; ++i) {
        if (array[i] <= array[endIndex]) {
            arrayElements[i].style.backgroundColor = 'red';
            arrayElements[endIndex].style.backgroundColor = 'red';
            await delay();
            [array[i], array[ptr]] = [array[ptr], array[i]];
            await delay();
            arrayElements[i].style.height = `${array[i]}px`;
            arrayElements[ptr].style.height = `${array[ptr]}px`;
            await delay();
            arrayElements[i].style.backgroundColor = 'green';
            arrayElements[ptr].style.backgroundColor = 'green';
            await delay();
            arrayElements[ptr++].style.backgroundColor = '#1AA6B7';
            arrayElements[ptr].style.backgroundColor = 'blue';
            arrayElements[i].style.backgroundColor = '#1AA6B7';
        }
        arrayElements[endIndex].style.backgroundColor = '#1AA6B7';
    }
    [array[ptr], array[endIndex]] = [array[endIndex], array[ptr]];
    arrayElements[ptr].style.height = `${array[ptr]}px`
    arrayElements[ptr].style.backgroundColor = '#F0A500';
    arrayElements[endIndex].style.height = `${array[endIndex]}px`;
    return ptr;
}
async function QuickSort(startIndex, endIndex) {
    if (startIndex >= endIndex) {
        if (startIndex === endIndex) {
            arrayElements[startIndex].style.backgroundColor = '#F0A500';
        }
        return;
    }
    let partitionIndex = await partition(startIndex, endIndex);
    await QuickSort(startIndex, partitionIndex - 1);
    await QuickSort(partitionIndex + 1, endIndex);
    if (startIndex === 0 && endIndex === array.length - 1) {
        arrayElements.forEach(arrayBar => {
            arrayBar.style.backgroundColor = 'green';
        })
        await new Promise(resolve => {
            setTimeout(() => {
                arrayElements.forEach(arrayBar => {
                    arrayBar.style.backgroundColor = '#F0A500';
                })
                resolve();
            }, 500);
        });
    }
}
async function siftDown(currentIndex, endIndex) {
    while (true) {
        if (currentIndex * 2 + 1 <= endIndex && array[currentIndex * 2 + 1] > array[currentIndex]
            && ((currentIndex * 2 + 2 <= endIndex && array[currentIndex * 2 + 1] > array[currentIndex * 2 + 2]) || currentIndex * 2 + 2 > endIndex)) {
            arrayElements[currentIndex].style.backgroundColor = 'red';
            arrayElements[currentIndex * 2 + 1].style.backgroundColor = 'red';
            await delay();
            [array[currentIndex], array[currentIndex * 2 + 1]] = [array[currentIndex * 2 + 1], array[currentIndex]];
            arrayElements[currentIndex].style.height = `${array[currentIndex]}px`;
            arrayElements[currentIndex * 2 + 1].style.height = `${array[currentIndex * 2 + 1]}px`;
            await delay();
            arrayElements[currentIndex].style.backgroundColor = 'green';
            arrayElements[currentIndex * 2 + 1].style.backgroundColor = 'green';
            await delay();
            arrayElements[currentIndex].style.backgroundColor = '#1AA6B7';
            arrayElements[currentIndex * 2 + 1].style.backgroundColor = '#1AA6B7';
            currentIndex = currentIndex * 2 + 1;
        }
        else if (currentIndex * 2 + 2 <= endIndex && array[currentIndex * 2 + 2] > array[currentIndex]) {
            arrayElements[currentIndex].style.backgroundColor = 'red';
            arrayElements[currentIndex * 2 + 2].style.backgroundColor = 'red';
            await delay();
            [array[currentIndex], array[currentIndex * 2 + 2]] = [array[currentIndex * 2 + 2], array[currentIndex]];
            arrayElements[currentIndex].style.height = `${array[currentIndex]}px`;
            arrayElements[currentIndex * 2 + 2].style.height = `${array[currentIndex * 2 + 2]}px`;
            await delay();
            arrayElements[currentIndex].style.backgroundColor = 'green';
            arrayElements[currentIndex * 2 + 2].style.backgroundColor = 'green';
            await delay();
            arrayElements[currentIndex].style.backgroundColor = '#1AA6B7';
            arrayElements[currentIndex * 2 + 2].style.backgroundColor = '#1AA6B7';
            currentIndex = currentIndex * 2 + 2;
        }
        else {
            if (currentIndex * 2 + 1 <= endIndex) {
                arrayElements[currentIndex].style.backgroundColor = 'green';
                arrayElements[currentIndex * 2 + 1].style.backgroundColor = 'green';
                await delay();
                arrayElements[currentIndex].style.backgroundColor = '#1AA6B7';
                arrayElements[currentIndex * 2 + 1].style.backgroundColor = '#1AA6B7';
            }
            if (currentIndex * 2 + 2 <= endIndex) {
                arrayElements[currentIndex].style.backgroundColor = 'green';
                arrayElements[currentIndex * 2 + 2].style.backgroundColor = 'green';
                await delay();
                arrayElements[currentIndex].style.backgroundColor = '#1AA6B7';
                arrayElements[currentIndex * 2 + 2].style.backgroundColor = '#1AA6B7';
            }
            return;
        }
    }
}
async function buildHeap() {
    for (let i = Math.floor((array.length - 2) / 2); i >= 0; --i) {
        await siftDown(i, array.length - 1);
    }
}
async function HeapSort() {
    endIndex = array.length - 1;
    while (endIndex > 0) {
        arrayElements[0].style.backgroundColor = 'red';
        arrayElements[endIndex].style.backgroundColor = 'red';
        await delay();
        [array[0], array[endIndex]] = [array[endIndex], array[0]];
        arrayElements[0].style.height = `${array[0]}px`;
        arrayElements[endIndex].style.height = `${array[endIndex]}px`;
        await delay();
        arrayElements[0].style.backgroundColor = 'green';
        arrayElements[endIndex].style.backgroundColor = 'green';
        await delay();
        arrayElements[0].style.backgroundColor = '#1AA6B7';
        arrayElements[endIndex--].style.backgroundColor = '#F0A500';
        await siftDown(0, endIndex)
    }
    arrayElements[0].style.backgroundColor = 'green';
    await delay();
    arrayElements[0].style.backgroundColor = '#F0A500';
    await delay();
    arrayElements.forEach(arrayBar => {
        arrayBar.style.backgroundColor = 'green';
    })
    await new Promise(resolve => {
        setTimeout(() => {
            arrayElements.forEach(arrayBar => {
                arrayBar.style.backgroundColor = '#F0A500';
            })
            resolve();
        }, 500);
    });
}
async function sort(clickedID) {
    document.getElementById('sorting-speed').disabled = true;
    document.getElementById('array-size').disabled = true;
    document.getElementById('generate-array').style.pointerEvents = 'none';
    sortingAlgorithms.forEach(algorithm => {
        algorithm.classList.remove('selected');
    })
    sortingAlgorithms.forEach(algorithm => {
        algorithm.style.pointerEvents = 'none';
    })
    document.getElementById(clickedID).classList.add('selected');
    if (clickedID === 'bubble-sort') {
        await BubbleSort();
    }
    else if (clickedID === 'selection-sort') {
        await SelectionSort();
    }
    else if (clickedID === 'insertion-sort') {
        await InsertionSort();
    }
    else if (clickedID === 'merge-sort') {
        let auxiliaryArray = array.slice();
        await MergeSort(array, 0, array.length - 1, auxiliaryArray);
    }
    else if (clickedID === 'quick-sort') {
        await QuickSort(0, array.length - 1);
    }
    else if (clickedID === 'heap-sort') {
        await buildHeap();
        await HeapSort();
    }
    document.getElementById('generate-array').style.pointerEvents = 'initial';
    sortingAlgorithms.forEach(algorithm => {
        algorithm.style.pointerEvents = 'initial';
    })
    document.getElementById('array-size').disabled = false;
    document.getElementById('sorting-speed').disabled = false;
}
function init() {
    generateNewArray();
    document.getElementById('generate-array').addEventListener('click', generateNewArray);
    document.getElementById('array-size').addEventListener('mousemove', generateNewArray);
    document.querySelectorAll('.algorithm').forEach(item => {
        item.addEventListener('click', event => {
            sort(item.id);
        })
    })
}
init();