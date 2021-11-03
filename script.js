//********Get the button********
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/******** FAQ ***********/
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



// *******slideshow********
const slideshowImages = document.querySelectorAll(".intro .content");
slideshowImages[1].style.display = "none";

const nextImageDelay = 3000;
let currentImageCounter = 0;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.display = "block";
}


//*******Mouseover and Mouseleave********
const swimMenu = document.querySelector("#sportOut");
const swimMenu1 = document.querySelector("#sportOut1");
const swimMenu2 = document.querySelector("#sportOut2");
const swimMenu3 = document.querySelector("#sportOut3");
const swimMenu4 = document.querySelector("#sportOut4");
const swimMenu5 = document.querySelector("#sportOut5");
swimMenu1.style.display = "none";
swimMenu3.style.display = "none";
swimMenu5.style.display = "none";

swimMenu.addEventListener("mouseover", e => {
    swimMenu1.style.display = "block";
    swimMenu1.style.transition = "translate3d(100px, 0px, 0px)";
})
swimMenu1.addEventListener("mouseover", e => {
  swimMenu1.style.display = "block";
})

swimMenu.addEventListener("mouseleave", e => {
  swimMenu1.style.display = "none";
})
swimMenu1.addEventListener("mouseleave", e => {
  swimMenu1.style.display = "none";
})

swimMenu2.addEventListener("mouseover", e => {
  swimMenu3.style.display = "block";
})
swimMenu3.addEventListener("mouseover", e => {
swimMenu3.style.display = "block";
})

swimMenu2.addEventListener("mouseleave", e => {
swimMenu3.style.display = "none";
})
swimMenu3.addEventListener("mouseleave", e => {
swimMenu3.style.display = "none";
})

swimMenu4.addEventListener("mouseover", e => {
  swimMenu5.style.display = "block";
})
swimMenu5.addEventListener("mouseover", e => {
swimMenu5.style.display = "block";
})

swimMenu4.addEventListener("mouseleave", e => {
swimMenu5.style.display = "none";
})
swimMenu5.addEventListener("mouseleave", e => {
swimMenu5.style.display = "none";
})

swimMenu5.addEventListener("mouseover", e => {
swimMenu3.style.display = "block";
})
swimMenu5.addEventListener("mouseleave", e => {
swimMenu3.style.display = "none";
})


/*****ImgSlide*****/
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
// Image List
images[0] = "./images/MainBanner1.jpg";
images[1] = "./images/MainBanner2.jpg";
// Change Image
function changeImg(){
	document.slide.src = images[i];
	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
	// Run function every x seconds
	setTimeout("changeImg()", time);
}
// Run function when page loads
window.onload=changeImg;


/*****shop slider*****/
var leftBtn = document.getElementById("rightarrow");
var moveLeft = document.getElementById("margin-all");
leftBtn.onclick=function(){
    let currentPos = parseFloat(moveLeft.style.left);
    currentPos = isNaN(currentPos) ? 0 : currentPos;
    //console.dir((currentPos + 184) - "px");
    if(currentPos >= -500){
    moveLeft.style.left = (currentPos - 184) + "px";
  }
}
var rightBtn = document.getElementById("leftarrow");
rightBtn.onclick=function(){
  let currentPos = parseFloat(moveLeft.style.left);
  currentPos = isNaN(currentPos) ? 0 : currentPos;
  //console.dir((currentPos + 184) + "px");
  if(currentPos <= -20){
  moveLeft.style.left = (currentPos + 184) + "px";
  }
}

/***LatestProducts***/
var rightClick = document.getElementById("rightBtn");
var scrollRight = document.getElementById("rightC");
rightClick.onclick=function(){
    let currentPos = parseFloat(scrollRight.style.left);
    currentPos = isNaN(currentPos) ? 0 : currentPos;
    //console.dir((currentPos + 232.5) - "px");
    if(currentPos >= -920){
        scrollRight.style.left = (currentPos - 232.5) + "px";
  }
}
var leftClick = document.getElementById("leftBtn");
leftClick.onclick=function(){
  let currentPos = parseFloat(scrollRight.style.left);
  currentPos = isNaN(currentPos) ? 0 : currentPos;
  //console.dir((currentPos + 232.5) + "px");
  if(currentPos <= -20){
        scrollRight.style.left = (currentPos + 232.5) + "px";
  }
}

/******LatestNews**********/
var topClick = document.getElementById("angleUp");
var scrollTop  = document.getElementById("scrollC");
topClick.onclick=function(){
    let currentPos = parseFloat(scrollTop.style.top);
    currentPos = isNaN(currentPos) ? 0 : currentPos;
    if(currentPos >= -600){
        //console.dir((currentPos - 206.5) + "px");
        scrollTop.style.top = (currentPos - 206.5) + "px";
    }
}
var downClick = document.getElementById("angleDown");
downClick.onclick=function(){
  let currentPos = parseFloat(scrollTop.style.top);
  currentPos = isNaN(currentPos) ? 0 : currentPos;
  if(currentPos <= -10){
        //console.dir((currentPos + 206.5) + "px");
        scrollTop.style.top = (currentPos + 206.5) + "px";
  }
}


/**Timer**/
    // The data/time we want to countdown to
    var countDownDate = new Date("Jun 2, 2025 00:00:01").getTime();
    // Run myfunc every second
    var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        }
    }, 1000);