
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


function continueGame(){
    //step 1: generate a random alphabet 
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is :',alphabet);


    //set a randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;




    // alphabet keys color set
    addBackgroundColorById(alphabet);
}



function play (){
    hideElementById('home-screen')
    showElementById('play-ground');
    
    continueGame()
}



// alphabet keys color setting start
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');



}
