'use strict';

// Sukuriam random skaičiu:
function randomNum() {
    return Math.trunc(Math.random()*20)+1
}

let secretNumber = randomNum() 
let taskai = 20
let didTaskai = 0


const zinute = function(message) {
    document.querySelector('.message').textContent = message
}

// document.querySelector('.secretNumber').textContent = secretNumber

document.querySelector('.checkButton').addEventListener('click', function() {

    const guess = Number(document.querySelector('.typeBox').value)

    if(!guess) {
        zinute('Neįrašytas skaičius!')
    }
// LAIMĖJIMAS:
    else if(guess === secretNumber) {
        zinute('Teisingas skaičius!')
        document.querySelector('.secretNumber').style.backgroundColor = 'green'
        document.querySelector('.secretNumber').textContent = secretNumber
        
        if (taskai > didTaskai) {
            didTaskai = taskai
        }
        
        document.querySelector('.highscore').textContent = didTaskai
    }
    // Neteisingi spėjimai:
    else if (guess !== secretNumber) {
        if(taskai > 1) {
            zinute(guess > secretNumber ? 'Per didelis!' : 'Per mažas!')
            taskai--
            document.querySelector('.points').textContent = taskai

        }else {
            document.querySelector('.points').textContent = 0
            zinute('Pralaimėjai')
            document.querySelector('.secretNumber').style.backgroundColor = 'red'
        }


    } if(guess > 20 || guess === 0) {
        zinute('Skaičius turi būti tarp 1 ir 20')
    }


})
document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key === 'Enter') {
        againButtonPress()
    }
})
document.querySelector('.again').addEventListener('click', function(){
    taskai = 20;
    document.querySelector('.points').textContent = taskai;
    zinute('Spėk skaičiu...')
    // secretNumber = randomNum();
    document.querySelector('.secretNumber').style.backgroundColor = 'black'
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.typeBox').value = ''
    secretNumber = randomNum();

})


const againButtonPress = function() {
    taskai = 20;
    document.querySelector('.points').textContent = taskai;
    zinute('Spėk skaičiu...')
    // secretNumber = randomNum();
    document.querySelector('.secretNumber').style.backgroundColor = 'black'
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.typeBox').value = ''
    secretNumber = randomNum();


}