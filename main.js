

function recognize(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GI-0a8IoL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Ready");
}




function gotResults(error,results){
    console.log("Got Results");
    if(results[0].label=="🐶"){
        document.getElementById("dog_or_cat").src="dog.png";   
    }
    else if(results[0].label=="🙀"){
        document.getElementById("dog_or_cat").src="cat.png";   
    }
    else{
        document.getElementById("dog_or_cat").src="muted.png";
    }
    if(error){
        console.log(error);
    }else{
        console.log(results);
        r=Math.round(Math.random()*255);
        g=Math.round(Math.random()*255);
        b=Math.round(Math.random()*255);
        document.getElementById("audio").innerHTML='I Can Hear--  '+results[0].label;
        document.getElementById("accuracy").innerHTML='Accuracy--  '+(results[0].confidence*100).toFixed(3)+" %";
        document.getElementById("audio").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("accuracy").style.color="rgb("+r+","+g+","+b+")";
        
        alien1=document.getElementById("alien_1");
        alien2=document.getElementById("alien_2");
        alien3=document.getElementById("alien_3");
        alien4=document.getElementById("alien_4");

        if(results[0].label=="Whistling"){
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        if(results[0].label=="Talking"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        if(results[0].label=="Snapping"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }
        if(results[0].label=="Clapping"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
        }
        if(results[0].label=="Typing"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }
        if(results[0].label=="Background Noise"){
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.gif";
        }
    }
}
