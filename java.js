
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null  || x == "") {
        document.getElementById("return").innerHTML="Please enter a username";
        return false;
    }
} 
