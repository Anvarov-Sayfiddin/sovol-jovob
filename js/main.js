

let elText = document.querySelector(".text");
let elInput = document.querySelector(".inputt");
let elCount = document.querySelector(".count")


let count = 0;



let questions = [
    {
        question: 'JavaScriptda nechta falsy value bor',
        correctAnswer: '6'
    },
    {
        question: 'JavaScriptda nechta data type mavjud',
        correctAnswer: '8'
    },
    {
        question: "consoledan nima chiqadi: ->  console.log('12' + '4' - 2)",
        correctAnswer: '122'
    },
    {
        question: "consoledan nima chiqadi -> console.log('' == false)",
        correctAnswer: 'true'
    },
    {
        question: "consoledan nima chiqadi -> console.log(0 === false)",
        correctAnswer: 'false'
    },
    {
        question: `consoledan nima chiqadi -> 
        let number = 2    
        console.log(num); `, 
        correctAnswer: 'reference error'
    },
    {
        question: `consoledan nima chiqadi: ->
        function func(a){
            return;
        }
        console.log(func(5))`,
        correctAnswer: "undifined"
    },
    {
        question: `consoledan nima chiqadi: ->
        let num = 5
        console.log(num === 5)`,
        correctAnswer: 'true'
    },
    {
        question: `consoledan nima chiqadi:
        let num = 5,
        num = 8
        console.log(num)`,
        correctAnswer: '8'
    },
    {
        question: `consoledan nima chiqadi
        let array = [1,2,3,4,5]
        console.log(array[5])`,
        correctAnswer:'undifined'
    }
]

function* generator(array) {
    for(let  i = 0; i <array.length; i++) {
        let res = yield (elText.textContent = array[i].question)
        array[i].answer = res;
        if(array[i].answer == array[i].correctAnswer) {
            count ++;
        }
    }
    let son = 10 - count;
    elCount.textContent = count + ' ta togri ' + son + ' notogri topdiz'
}



let gen = generator(questions);
gen.next();

elInput.addEventListener("keyup", function(evt) {
    if(evt.keyCode == '13') {
        let InputValue = evt.target.value;
        if(gen.next(InputValue).done) {
            alert('sovol qomadi!!!')
            console.table(questions);

        }
        evt.target.value = "";
    }
})






