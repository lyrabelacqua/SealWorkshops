var counter = 0;

var divCounter = document.querySelector(".counter");
divCounter.textContent = counter;

var cat = document.getElementById("cat");
cat.addEventListener('click', function() {
    counter ++;
    divCounter.textContent = counter;
    if (counter > 5) {
        alert("You caught the cat! He is not happy about it...");
        counter = 0;
        divCounter.textContent = counter;
    }
        
});

