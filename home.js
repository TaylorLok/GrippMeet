// alert("Welcome! let the journey begins")

//get acces to the button and set up a click vent listener
var button = document.getElementById("signupbtn");
button.onclick = createForm;

function createForm(){
    var signupbtn = document.forms["myForm"]["fname"].value;
    if (signupbtn == "") {
        alert("Space must be filled out");
        return false;
}
}