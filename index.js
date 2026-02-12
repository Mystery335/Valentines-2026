function optionChosen(answer){
    if (answer === 'yes'){
        swapImage();
        disappear();
        document.getElementById('question').innerText = "Yayyy!!! You are now my Valentine!";
        flashRainbowColors();
        document.getElementById("yes").remove();
    }
    else{
        let noButton = document.getElementById("no");
        if(!noButton) return;
        else if(document.getElementById("no").innerText == "Too bad! You have to be mine 😝"){
            disappear();
        }
        else if(document.getElementById("no").innerText == "You don't want to be my Valentine?"){
            document.getElementById("no").innerText = "Too bad! You have to be mine 😝";
        }
        else if(document.getElementById("no").innerText == "Why are you being evil?"){
            document.getElementById("no").innerText = "You don't want to be my Valentine?";
        }
        else if(document.getElementById("no").innerText == "No"){
            document.getElementById("no").innerText = "Why are you being evil?";
        }
    }
}

function disappear(){
    let noButton = document.getElementById("no");
    if(noButton){
        noButton.remove();
    }
}

function swapImage(){
    document.getElementById("hope").src = "/images/Heart-Cat.gif";
}

function flashRainbowColors(callback) {
    var colors = ['#ffabab', '#e19cc2', '#fa93ff', '#ff00bf', '#ff00ff', '#b4539d', '#d30090'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}