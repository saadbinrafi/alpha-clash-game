function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    

}



function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    return alphabet;



    // alphabet keys  background color setting
    
    addBackGroundColorById(alphabet);
}



// function getARandomAlphabet(){
//     // get or create an alphabet array 
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets)


//     //get a random index alphabets
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    

//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }