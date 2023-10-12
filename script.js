
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("woman.jpeg")) {
    image.src = "cat.jpeg";
  } else {
    image.src = "woman.jpeg";
  }
}

var job = document.getElementById('myJob');



function changeJob(){
  if (job.innerHTML.match("The Chief Extra Oatmeal")){
    job.innerHTML = "The Calloused Eggy Oval";
    job.style.backgroundColor = "red"
  }
  else if (job.innerHTML.match("The Calloused Eggy Oval")){
    job.innerHTML = "The Crazy Elephant Overdresser";
    job.style.backgroundColor = "silver"
  }
  else if (job.innerHTML.match("The Crazy Elephant Overdresser")){
    job.innerHTML = "What even is a job?!?!?!";
    job.style.backgroundColor = "pink"
  }
  else if (job.innerHTML.match("What even is a job?!?!?!")){
    job.innerHTML = "wow";
    job.style.backgroundColor = "orange"
  }
  else{
    job.innerHTML = "The Chief Extra Oatmeal";
    job.style.background= "transparent"
  }
  }


let z = 0;
function myMoveFunction() {
    document.getElementById("demo1").innerHTML = z+=1;
  }
  
var image2 = document.getElementById('sloth');

function normalImage(){
    image2.src = "sloth.avif";
}

function sleepingImage(){
    image2.src = "sleepingsloth.jpeg"
}