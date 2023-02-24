const containerDom = document.querySelector('.container');

const messageFizz = `Fizz`;

const messageBuzz = `Buzz`;

const messageFizzBuzz = `FizzBuzz`;

for (let i = 1; i <= 100; i++ ){

    if (i % 15 == 0) {
        const squareFizzBuzz = `<div class="box box-fizzbuzz">FizzBuzz</div>`;
        containerDom.innerHTML += squareFizzBuzz;
    } else if (i % 5 == 0) {
        const squareBuzz = `<div class="box box-buzz">Buzz</div>`;
        containerDom.innerHTML += squareBuzz;
    } else if (i % 3 == 0) {
        const squareFizz = `<div class="box box-fizz">Fizz</div>`;
        containerDom.innerHTML += squareFizz;
    } else {
        const square = `<div class="box box-default">${i}</div>`;
        containerDom.innerHTML += square;
    };

    //Metodo con la funzione `append()`
    /*if (i % 15 == 0) {
        const squareFizzBuzz = document.createElement('div');
        squareFizzBuzz.classList.add('box', 'box-fizzbuzz');
        squareFizzBuzz.append(messageFizzBuzz);
        containerDom.append(squareFizzBuzz);
    } else if (i % 5 == 0) {
        const squareBuzz = document.createElement('div');
        squareBuzz.classList.add('box', 'box-buzz');
        squareBuzz.append(messageBuzz);
        containerDom.append(squareBuzz);
    } else if (i % 3 == 0) {
        const squareFizz = document.createElement('div');
        squareFizz.classList.add('box', 'box-fizz');
        squareFizz.append(messageFizz);
        containerDom.append(squareFizz);
    } else {
        const square = document.createElement('div');
        square.classList.add('box', 'box-default');
        square.append(i);
        containerDom.append(square);
    };*/

    

};



