
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
      job.innerHTML = "The Calloused Energy Oval";
    }
    else if (job.innerHTML.match("The Calloused Energy Oval")) {
        job.innerHTML = "The Crazy Extreme Occupation";
    
    } 
    else if (job.innerHTML.match("The Crazy Extreme Occupation")) {
        job.innerHTML = "What even is a job?!?!?!";
    
    } 
    else if (job.innerHTML.match("What even is a job?!?!?!")) {
        job.innerHTML = "The Chief Extra Test";
        
        } 
    else
        job.innerHTML = "The Chief Extra Oatmeal";
}

let z = 0;
function myMoveFunction() {
    document.getElementById("demo1").innerHTML = z+=1;
  }
  