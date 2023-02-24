const containerDom = document.querySelector('.container');

for(let i = 1; i <= 100; i = i + 1){




    if(i % 3 == 0){
        const squareFizz = `<div class="box box-fizz">Fizz</div>`;
        containerDom.innerHTML += squareFizz;
    } else if(i % 5 == 0){
        const squareBuzz = `<div class="box box-buzz">Buzz</div>`;
        containerDom.innerHTML += squareBuzz;
    } else if (i % 3 == 0 && i % 5 == 0){
        const squareFizzBuzz = `<div class="box box-fizzbuzz">FizzBuzz</div>`;
        containerDom.innerHTML += squareFizzBuzz;
    } else {
        const square = `<div class="box box-default">${i}</div>`;
        containerDom.innerHTML += square;
    };


};

