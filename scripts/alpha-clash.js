
// function play(){
//     // step-1:hide the home screen to hide the screen at hidden class

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)


    
    
    
    
//     // and show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)


// }



function handleKeyboardBtnPress(event){

    const playerPressed = event.key;
    

    // console.log('player Pressed', playerPressed);

    //stop the game pressed "Esc"
    if(playerPressed === 'Escape'){
        gameOver()
    }




    //get the expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet')

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // console.log(playerPressed, expectedAlphabet)

    //chack press of keys wright  or not

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        
        
        //------------------------------------------------------------------

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore)

        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);



        //------------------------------------------------------------------
        
        
        
        
        // score update
        // console.log('you have pressed correctly', expectedAlphabet);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)



        // //increase the score
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;   
        

        
        
        // start a new round 
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. you lost a life')

        //---------------------------------------

        const currentLife = getTextElementValueById('current-life');
        const upDatedLife = currentLife - 1;
        setTextElementValueById('current-life', upDatedLife) 


        if(upDatedLife === 0 ){
            gameOver();
        }

        //-------------------------------------

        // const currentLieElement = document.getElementById('current-life');
        // //step 1 get the current number
        // const currentLifeText = currentLieElement.innerText;

        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife)

        // //step 2 reduce the life count 
        // const newLife = currentLife - 1;
        
        // currentLieElement.innerText = newLife;   

    }
}


// this is the call back function  
document.addEventListener('keyup',handleKeyboardBtnPress )


function continueGame(){
    //step 1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is :',alphabet);


    //set a randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;




    // alphabet keys color set
    addBackgroundColorById(alphabet);
}



function play (){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    
    continueGame()
}


function gameOver(){

    hideElementById('play-ground');
    showElementById('final-score');


    // update final score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    
    setTextElementValueById('last-score', lastScore);


    // clear the last selected alphabet and background 
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);

}

