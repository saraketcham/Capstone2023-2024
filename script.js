
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("woman.jpeg")) {
    image.src = "cat.jpeg";
  } else {
    image.src = "woman.jpeg";
  }
}

function

document.getElementByID('myJob').onclick = changeJob

function changeJob() {
    var job = document.getElementById('myJob');
    if (job.innerHTML.match("The Chief Extra Oatmeal")) {
      job.innerHTML = "The Calloused Energy Oval";
    }
    else if (job.innerHTML.match("The Calloused Energy Oval")) {
        job.innerHTML = "The Crazy Extreme Occupation";
    
    } 
    else if (job.innerHTML.match("The Crazy Extreme Occupation")) {
        job.innerHTML = "What even is a job?!?!?!";
    
    } 
    else {
      job.inner = "The Chief Extra Oatmeal";
    }
  }