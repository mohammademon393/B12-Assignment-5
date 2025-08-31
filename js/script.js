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
        const name = card.querySelector('.name').innerText;


        //condistion
        if (coins < 20) {
            alert('Not enough coins! You need at least 20 coins to call.');
            return;
        }
        
        //coins Reduceing 
        coins -= 20;
        coinDisplay.innerText = coins;
        alert(`
             Calling ${serviceSubName} ${serviceNumber}
        `);

        const time = new Date().toLocaleTimeString();
            
        //history section
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-[#dfefff] h-[80px] rounded-lg flex justify-between items-center px-1 mt-2">
                        <span>
                            <h1 class="font-bold w-[70%]">${name}</h1>
                            <p class="font-[400]">${serviceNumber}</p>
                        </span>
                        <span>
                            <h3 class="font-semibold">${time}</h3>
                        </span>
                    </div>
        `;
        callHistory.appendChild(div);
    })
}



// clear button functionalitise
const clear = document.getElementById('call-history');
document.getElementById('clear-btn')
    .addEventListener('click', function (){
        clear.innerHTML = '';  
});


//copy btn functionalitis
let copyNumber = 1;
const btnCopy = document.getElementsByClassName('copy-btn');

for(const copy of btnCopy){
    copy.addEventListener('click', function(){
        const copyCount = document.getElementById('copy-count');
        const totalCopy = copyNumber++;

        copyCount.innerText = totalCopy;
    })


    
}