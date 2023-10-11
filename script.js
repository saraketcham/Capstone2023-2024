
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("woman.jpeg")) {
    image.src = "cat.jpeg";
  } else {
    image.src = "woman.jpeg";
  }
}


function changeJob() {
    var job = document.getElementById('myJob');
    if (job.innerHTML.match("The Chief Extra Oatmeal")) {
      job.innerHTML = "The Calloused Eggy Oval";
    }
    else if (job.innerHTML.match("The Calloused Eggy Oval")) {
        job.innerHTML = "The Crazy Elephant Overdresser ";
        job.style.backgroundColor = "#0000ff";
    
    } 
    else if (job.innerHTML.match("The Crazy Elephant Overdresser")) {
        job.innerHTML = "What even is a job?!?!?!";
    
    } 
    else
        job.innerHTML = "The Chief Extra Oatmeal";
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