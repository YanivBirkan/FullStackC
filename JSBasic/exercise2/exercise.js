



// // Practice what you learned!

// // 1) Select the two <button> elements and store them in two different variables.
// //    - Select the first button without adding or using any "id"
// //    - Select the second button by using an "id"
// const FirstButton = document.querySelector('button');
// const SecondButton = document.getElementById("SecondButton");



// // 2) Add "click" event listener to both buttons (with two different functions).
// //    The functions should "console.dir()" the clicked buttons.
// //    - Output the first button by using the variable in which it's stored
// //    - Output the second button WITHOUT using the variable in which it's stored

// FirstButton.addEventListener("click" , FirstClick)
// SecondButton.addEventListener("click" , SecondClick)

// // function FirstClick (event){
// //     console.dir(FirstButton)
// // }

// // function SecondClick(event){
// //     console.dir(event.target)

// // }

// // 3) Now select and store the paragraphs mentioned in the text you see on the page
// //    (first and third paragraph)
// //    - Select BOTH paragraphs by drilling into the document and "navigating" to the
// //      mentioned elements
// //    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// // const FirstParagraph= document.body.children[2].children[1]
// // const SecondParagraph= document.body.children[2].children[3]



// // // 4) Change the functions from (2) such that:
// // //    - The first button removes the third paragraph (i.e. the <p> prior to it)
// // //    - The second button changes the background color of the first paragraph to blue
// // function FirstClick (event){
// //     SecondParagraph.remove()

// // }

// // function SecondClick(event){

// //     FirstParagraph.className='blue-bg';
// //         console.dir(event.target)

// // }


// // 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
// //    Note: You'll have to add those classes to the styles.css file first!


// const myName = 'Max';

// if (myName === 'Max') {
//   console.log('Hello!');
// }

// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log('User is NOT logged in!');
// }

// const enteredUserName = ''; // 0

// if (enteredUserName) {
//   console.log('Input is valid!');
// }

//calculator



const calculateSumBotton = document.querySelector('#calculator button');

calculateSumBotton.addEventListener('click', calculateSum );

function calculateSum(){
    
    const userNumberInputElement = document.getElementById("user-number");
    const enteredNumber =userNumberInputElement.value;

    let sumUpToNumber = 0;
    for (let i = 0; i < enteredNumber; i++) {
        sumUpToNumber+=i;
    }
    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent=sumUpToNumber;
    outputResultElement.style.display = 'block';
} 



//highlight

const highlightLinksButton = document.querySelector('#highlight-links button');

highlightLinksButton.addEventListener('click', highlightLinks);

function highlightLinks(){
    const anchorElements = document.querySelectorAll("#highlight-links a");
    for(const element of anchorElements){
        element.classList.add("highlight");
    }
}

