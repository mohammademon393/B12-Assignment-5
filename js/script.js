// heart btn functionalities
const hearts = document.getElementsByClassName('heart-btn-card');
let count = 1; 

for(const heart of hearts){
    heart.addEventListener('click', function(){
    const heartCount = document.getElementById('count-heart');
        const countUpdate = count++;
        
        heartCount.innerText = countUpdate;
    })
}


//call-btn functionaltise
let coins = 100;
const coinDisplay = document.getElementById('coin');
const callButton = document.getElementsByClassName('call-btn');
const callHistory = document.getElementById('call-history');


for( const btn of callButton){
    btn.addEventListener('click', function(){
        const card = btn.parentElement.parentElement;
        const serviceSubName = card.querySelector('.service-subName').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;

        //condistion
        if (coins < 20) {
            alert('Not enough coins! You need at least 20 coins to call.');
            return;
        }
        
        //coins Reduceing kora
        coins -= 20;
        coinDisplay.innerText = coins;
        alert(`
             Calling ${serviceSubName} ${serviceNumber}
        `);
    })
    
}