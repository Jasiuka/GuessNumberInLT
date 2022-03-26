'use strict';

// Sukuriam random skaičiu:
function randomNum() {
    return Math.trunc(Math.random()*20)+1
}

let secretNumber = randomNum() 
let taskai = 20
let didTaskai = 0
let game = true
const scoreboard = document.getElementById('scoreboard');
let english = false;




const zinute = function(message) {
    document.querySelector('.message').textContent = message
}



// document.querySelector('.secretNumber').textContent = secretNumber

document.querySelector('.checkButton').addEventListener('click', function() {

    const guess = Number(document.querySelector('.typeBox').value)

    if(!guess && game) {
        if(!english) {
        zinute('Neįrašytas skaičius!') 
    } else zinute('No number is written!')

    }
// LAIMĖJIMAS:
    else if(guess === secretNumber && game) {
        if(!english) {
        zinute('Teisingas skaičius!') 
        } else zinute('Correct number!')
        document.querySelector('.secretNumber').style.backgroundColor = 'green'
        document.querySelector('.secretNumber').textContent = secretNumber
        game = false;
        
        
        if (taskai > didTaskai ) {
            didTaskai = taskai
        }
        if(!english) {
        document.querySelector('.highscore-label').textContent = `GERIAUSIAS REZULTATAS 🥇: ${didTaskai} `;
        } else document.querySelector('.highscore-label').textContent = `HIGHSCORE 🥇: ${didTaskai}`;

        
        
        
        
        // document.querySelector('.window').classList.remove('hidden');
        // document.querySelector('.overlay').classList.remove('hidden');
        // document.querySelector('#btn-no').addEventListener('click', function(){
        //     document.querySelector('.window').classList.add('hidden');
        //     document.querySelector('.overlay').classList.add('hidden');
        // })
        // document.querySelector('#btn-yes').addEventListener('click', function() {
        //     document.querySelector('#name-input').classList.remove('hidden');
        //     document.querySelector('#label').classList.remove('hidden')
        //     document.querySelector('#header').classList.add('hidden');
        //     document.querySelector('#btn-yes').classList.add('hidden');
        //     document.querySelector('#btn-no').classList.add('hidden');
        //     document.querySelector('#btn-ok').classList.remove('hidden');
        //     document.querySelector('#btn-ok').addEventListener('click', function() {
                
        //         document.querySelector('.window').classList.add('hidden');
        //         document.querySelector('.overlay').classList.add('hidden');
        //         // document.querySelector('#name-input').value 
                
        //         document.querySelector('#name-input').addEventListener('keyup', event => {

        //             localStorage.setItem('names', scoreboard.value);
        //             })
        //     })
        // })
    }
    // Neteisingi spėjimai:
    else if (guess !== secretNumber && game) {
        if(taskai > 1) {
            if(!english) {
            zinute(guess > secretNumber ? 'Per didelis!' : 'Per mažas!') 
            } else zinute(guess > secretNumber ? 'Too big!' : 'Too small!')

            taskai--
            if(!english){
            document.querySelector('.points-label').textContent = `TAŠKAI: ${taskai}`
            } else document.querySelector('.points-label').textContent = `POINTS: ${taskai}`
        }else {
            if(!english) {
            document.querySelector('.points-label').textContent = `TAŠKAI: ${taskai=0}`
            } else document.querySelector('.points-label').textContent = `POINTS: ${taskai=0}`
            if(!english) {
            zinute('Pralaimėjai') 
            } else zinute('You lost!')
            document.querySelector('.secretNumber').style.backgroundColor = 'red'
        }


    } if(guess > 20 || guess === 0 && game || guess < 0) {
        if(!english) {
        zinute('Skaičius turi būti tarp 1 ir 20!') ;
        } else zinute('Number must be between 1 and 20!');
    }

})

document.querySelector('.again').addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key === 'Enter') {
        againButtonPress()
    }
})
document.querySelector('.again').addEventListener('click', function(){
    game = true;
    taskai = 20;
    if(!english) {
    document.querySelector('.points-label').textContent = `TAŠKAI: ${taskai}`;
    zinute('Spėk skaičiu...') 
    } else {
         document.querySelector('.points-label').textContent = `POINTS: ${taskai}`;
         zinute('Guess Number...');
        }
    // secretNumber = randomNum();
    document.querySelector('.secretNumber').style.backgroundColor = 'black'
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.typeBox').value = ''
    secretNumber = randomNum();

})


const againButtonPress = function() {
    if(!english) {
        game = true;
        taskai = 20;
        document.querySelector('.points').textContent = `TAŠKAI: ${taskai}`;
        if(!english) {
        zinute('Spėk skaičiu...') 
        } else zinute('Guess the number...')
        // secretNumber = randomNum();
        document.querySelector('.secretNumber').style.backgroundColor = 'black'
        document.querySelector('.secretNumber').textContent = '?';
        document.querySelector('.typeBox').value = ''
        secretNumber = randomNum();
    }

}


// scoreboard.value = localStorage.getItem('names')
// /// TEST SCOREBOARD
// // scoreboard.addEventListener('keyup', event => {

// // localStorage.setItem('names', scoreboard.value);
// // })



document.querySelector('#en-btn').addEventListener('click', function() {
    if(taskai === 20) {
    taskai = 20;
    };
    english = true;
    englishSwap();
})

document.querySelector('#lt-btn').addEventListener('click', function() {
    if(taskai === 20) {
        taskai = 20;
        };
    english = false;
    englishSwap();
})

const englishSwap = function() {
    
    
    
    document.querySelector('.message').textContent = english ? 'Guess number...' : 'Spėk skaičiu...';
    document.querySelector('.firstHeader').textContent = english ? 'GAME' : 'ŽAIDIMAS';
    document.querySelector('.gameName').textContent = english ? 'Guess number!' : "SPĖK SKAIČIU!"
    document.querySelector('.numberRulesTitle').textContent = english ? '⏩HOW GAME WORKS⏪' : '⏩ŽAIDIMO VEIKIMAS⏪'
    document.querySelector('.numberRules').textContent = english ? ` ---Write number between 1 and 20 \n
    -------Press *CHECK* button \n ----*Message*: "Too small" - number is smaller than correct number--- \n
    *Message*: "Too big" - number is bigger than correct number`: ` ---Įrašyk skaičiu nuo 1 iki 20 \n
    ----Spausk *PATIKRINK* Mygtuką \n ----*ŽINUTĖ*: "Per mažas" - įrašytas skaičius mažesnis už atsakymo sk.--- \n
    *ŽINUTĖ*: "Per didelis" - įrašytas skaičius didesnis už atsakymo sk.` ;
    document.querySelector('.checkButton').textContent = english ? 'CHECK!' : 'PATIKRINK!';
    if(didTaskai > 0) {
        document.querySelector('.highscore-label').textContent = english ? `HIGHSCORE 🥇: ${didTaskai} ` : `GERIAUSIAS REZULTATAS 🥇: ${didTaskai}`
    } else document.querySelector('.highscore-label').textContent = english ? `HIGHSCORE 🥇: ` : 'GERIAUSIAS REZULTATAS 🥇:'
    
    document.querySelector('.points-label').textContent = english ? `POINTS: ${taskai}` : `TAŠKAI: ${taskai}`
    document.querySelector('.again').textContent = english ? 'PLAY AGAIN 🔄' : 'ŽAISTI DAR KARTĄ 🔄'
}
