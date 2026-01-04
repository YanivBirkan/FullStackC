

const Edit1Button =document.getElementById("Edit1");
const Edit1OverlyButton =document.getElementById("Edit1Overlay");

function OpenEdit1Over(){
    const Player1name = document.getElementById("Player1Name");
    document.getElementById("overlay").style.display = "block";
    console.log(Player1name.innerText);    

}

function Edit1Details(){
    const anchorElements = document.querySelectorAll(".Player1Name");
    const Player1NewName = document.getElementById("Player1NewName").value;
    console.log(Player1NewName)
    for(const name of anchorElements){
        name.innerText=Player1NewName;
    }
        document.getElementById("overlay").style.display = "none";
}

function off() {
    document.getElementById("overlay").style.display = "none";
  }
  
Edit1Button.addEventListener("click" ,OpenEdit1Over);

Edit1OverlyButton.addEventListener("click" ,Edit1Details);
console.log("aaaa")
console.log("aaaa")
console.log("aaaa")
console.log("aaaa")