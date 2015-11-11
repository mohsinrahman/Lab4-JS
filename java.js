
/*function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null  || x == "") {
        document.getElementById("return").innerHTML="Please enter a username";
        return false;
    }
} */

var myImage = document.getElementById("img");

var imageArray = ["images/bg2.jpg", "images/bg3.jpg", "images/bg5.jpg"];

var imageIndex = 0;

function imageSlider() {

    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }

}
setInterval(imageSlider, 3000);