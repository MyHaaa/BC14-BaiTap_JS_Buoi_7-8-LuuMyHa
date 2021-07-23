document.getElementById('addNumToArray').addEventListener('click', addNumArray)

document.getElementById('btnSumPositive').addEventListener('click', sumOfPositive)

document.getElementById('btnCountPositive').addEventListener('click', countPositive)

document.getElementById('btnMinNum').addEventListener('click', findminNum)

document.getElementById('btnMinPos').addEventListener('click', findMinPos)

document.getElementById('btnLastEven').addEventListener('click', findLastEven)

document.getElementById('btnSwap').addEventListener('click', swapLocation)

document.getElementById('btnSort').addEventListener('click', sortArray)

document.getElementById('btnPrime').addEventListener('click', findFirstPrime)

document.getElementById('btnCompare').addEventListener('click', numberCompare)

document.getElementById('btnDoubleArrDisplay').addEventListener('click', function(){
    var formDoubleDiv = document.getElementById('doubleForm');
    formDoubleDiv.classList.toggle('hide')
})

document.getElementById('btnAddNumToDoubleArray').addEventListener('click', addNumToDoubleArray)

document.getElementById('btnCountInterger').addEventListener('click', countInterger)

var array = [];

var arrayDouble = [];

function addNumArray(){
    var numInput = document.getElementById('inputNum').value;
    var num = parseInt(numInput);

    array.push(num);
    document.getElementById('inputNum').value = "";

    var resultOutput = document.getElementById('yourArray');
    resultOutput.innerHTML = array;
}

document.getElementById('btnReset').addEventListener('click', function(){
    array = [];

    var resultOutput = document.getElementById('yourArray');
    resultOutput.innerHTML = array;
})

function sumOfPositive(){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            sum+=array[i];
        }       
    }
    var resultOutput = document.getElementById('result');
    resultOutput.innerHTML = sum;
}

function countPositive(){
    var countP = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            countP++;
        }       
    }
    var resultOutput = document.getElementById('result');
    resultOutput.innerHTML = countP;
}

function findminNum(){
    var min = array[0];
    for (let i = 0; i < array.length; i++) {
        if(min > array[i]){
            min = array[i];
        }       
    }
    var resultOutput = document.getElementById('result');
    resultOutput.innerHTML = min;
}

function findMinPos(){
    var arrayPos = [];
    var resultOutput = document.getElementById('result');
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            arrayPos.push(array[i]);
        }       
    }
    if(arrayPos.length == 0){
        resultOutput.innerHTML = 'dont have any positive value in array!';
    }
    else if(arrayPos.length == 1){
        resultOutput.innerHTML = arrayPos[0];
    }
    else{
        var minP = arrayPos[0];
        for (let i = 0; i < arrayPos.length; i++) {
            if(minP > arrayPos[i]){
                minP = arrayPos[i];
            }       
        } 
        resultOutput.innerHTML = minP; 
    }
}

function findLastEven(){
    var value = 0;
    var resultOutput = document.getElementById('result');
    for (let i = array.length; i >= 0; i--) {
        if(array[i]%2 == 0){
            value = array[i];
            break;
        }    
    }
    if(value == 0){
        resultOutput.innerHTML = 'Dont have any even num in your array'; 
    }
    else{
        resultOutput.innerHTML = value; 
    }
}

function sortArray(){
    var arraySort = array.slice()
    arraySort.sort(function (a, b) {
        return a - b;
    });
    
    var resultOutput = document.getElementById('result');
    resultOutput.innerHTML = arraySort
}

function findFirstPrime(){
    var prime = -1;
    var resultOutput = document.getElementById('result');

    for (let i = 0; i < array.length; i++) {
        if(isPrime(array[i])){
            prime = array[i];
            break;
        }
    }
    if(prime == -1){
        resultOutput.innerHTML = 'Dont have any prime value in array'
    }
    else{
        resultOutput.innerHTML = prime
    }
}

function isPrime(a){
    var check  = true;
    if(a == 1){
        check =false;
        return check;
    }
    else{
        for (let i = 2; i < a; i++) {
            if(a % i == 0){
                check = false;
                break;
            }
        }
        return check;
    }
}

function numberCompare(){
    var countNeg = 0;
    var countPos = 0;
    var resultOutput = document.getElementById('result');

    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            countPos++;
        }
        else if(array[i] < 0){
            countNeg++;
        }  
    }
    
    if(countNeg > countPos){
        resultOutput.innerHTML = 'The number of negative is bigger than the number of positive'
    }
    else if(countNeg < countPos){
        resultOutput.innerHTML = 'The number of negative is smaller than the number of positive'
    }
    else{
        resultOutput.innerHTML = 'The number of negative is equal the number of positive'
    }
}

function swapLocation(){
    var fristIn = document.getElementById('firstLocateInput').value;
    var first = parseInt(fristIn);
    $('#swapModal').modal('hide');

    var secondIn = document.getElementById('secondLocateInput').value;
    var second = parseInt(secondIn);

    if(first < 1 && first > array.length){
        alert('The first location is not valid. Please check it again!')
    }
    else if(second < 1 && second > array.length){
        alert('The second location is not valid. Please check it again!')
    }
    else{
        first= first-1;
        second= second-1;
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;

        var resultOutput = document.getElementById('result');
        resultOutput.innerHTML = array;
    }
}

function addNumToDoubleArray(){
    var numDouble = document.getElementById('numberDoubleArr').value;

    arrayDouble.push(numDouble);
    document.getElementById('numberDoubleArr').value = "";

    var resultOutput = document.getElementById('yourDoubleArray');
    resultOutput.innerHTML = arrayDouble;
}

document.getElementById('btnResetDouble').addEventListener('click', function(){
    arrayDouble = [];

    var resultOutput = document.getElementById('yourArray');
    resultOutput.innerHTML = arrayDouble;
})

function countInterger(){
    var countInt = 0;
    for (let i = 0; i < arrayDouble.length; i++) {
        var temp = arrayDouble[i] - Math.floor(arrayDouble[i])
        if(temp == 0){
            countInt++;
        }
    }
    var resultOutput = document.getElementById('result');
    resultOutput.innerHTML = countInt;
}