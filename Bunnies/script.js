var bunnies = [{name: "Uszaty", image: "http://www.rynek-rolny.pl/images/articles/840/8d060f508cbd1b864db1eae74ba5cf45-rasy-krolikow-kroliki-miniaturkowe-male-jpg.jpg"} ];

var button = document.getElementById("button");
var bunniesContainer = document.getElementById("cage");
            
var renderBunnies = function() {
    bunnies.forEach(function(b) {
        var name = document.createElement("p");
        name.textContent = b.name;
        var image = document.createElement("img");
        image.src = b.image;
        var bunny = document.createElement("div");
        bunny.appendChild(name);
        bunny.appendChild(image);
        bunniesContainer.appendChild(bunny);
    });
};
                
button.addEventListener('click', function() {
    var bunnyName = document.getElementById("name").value;
    if (!(bunnyName == "")){
        while (bunniesContainer.lastChild) {
            bunniesContainer.removeChild(bunniesContainer.lastChild);
        }
        bunnies.push({name: bunnyName, image: "http://www.rynek-rolny.pl/images/articles/840/8d060f508cbd1b864db1eae74ba5cf45-rasy-krolikow-kroliki-miniaturkowe-male-jpg.jpg" });
        renderBunnies();
    }
});
            

renderBunnies();