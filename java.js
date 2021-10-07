const diceContainer = document.getElementById("diceContainer")
const newDie = document.getElementById("newDie")
const rollDie = document.getElementById("rollDie")
const sumDie = document.getElementById("sumDie")

let diceArray = [];

class die {
    constructor() {
        this.value = (Math.floor(Math.random() * 6) + 1);
        this.dice = document.createElement("div");
        this.dice.className = 'dice';
        this.dice.textContent = this.value;
        diceArray.push(this)
        console.log(diceArray)
        diceContainer.appendChild(this.dice);
        this.dice.addEventListener("click", () => this.roll());
        this.dice.addEventListener("dblclick", () => {
            diceContainer.removeChild(this.dice);
            let index = diceArray.indexOf(this);
            diceArray.splice(index, 1)
        });
    };

    roll() {
        this.value = (Math.floor(Math.random() * 6) + 1);
        this.dice.textContent = this.value

    };
};

newDie.addEventListener("click", function () {
    new die()
});


rollDie.addEventListener("click", function () {
    diceArray.forEach(food => {
        food.roll()
    });

});

sumDie.addEventListener("click", function () {
    let sum = 0
    diceArray.forEach(chicken => {
        sum += chicken.value
    });
    alert(sum)
});




