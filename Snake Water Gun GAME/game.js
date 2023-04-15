// / Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

let word = ["S", "W", "G"] // S- Snake , W - Water , G - Gun
let game = true || false;
while (game) {
    
    let user = prompt("Choose S(Snake) or W(Water) or G(Gun)");
    let computer = word[Math.round(Math.random() * 3)]
    if (computer === user) {
        alert("Game Draw")
    }
    else if (user === 'S' && computer === "W") {
        alert("You Won")
    }
    else if (user === 'S' && computer === "G") {
        alert("Computer Won")
    }
    else if (user === 'W' && computer === "G") {
        alert("You Won")
    }
    else if (user === 'W' && computer === "S") {
        alert("Computer Won")
    }
    else if (user === 'G' && computer === "W") {
        alert("Computer Won")
    }
    else if (user === 'G' && computer === "S") {
        alert("You Won")
    }
    else{
        alert("Choose Valid Role")
    }
    game = confirm("You want to play Again")
}