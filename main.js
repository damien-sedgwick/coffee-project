"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '< class="id-selection">' + coffee.id + '</>';
    html += '<h3 class="name-selection">' + coffee.name + '</h3>';
    html += '<p class="roast-selection">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {

    var html = ' ';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "All") {
            if(coffee.name.toLowerCase().includes(myInput.value.toLowerCase()))
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


//Create new coffee.
var createCoffee = document.querySelector('#submit4');
createCoffee.addEventListener('click', function(e){
    e.preventDefault()
    var addCoffeeRoast = document.getElementById('roast-selection2')
    var newCoffeeName = document.getElementById('newCoffee')

if(newCoffeeName !== ""){
    newCoffee(addCoffeeRoast.value, newCoffeeName.value);
    updateCoffees();
}
});

var newCoffee = function (type, name){
    var newCoffeeObj = {id: coffees.length + 1, name: name, roast: type};
    console.log (newCoffeeObj);
    coffees.push(newCoffeeObj);
    console.log(coffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Pop Off', roast: 'light'},
    {id: 2, name: 'Tail', roast: 'light'},
    {id: 3, name: 'Zoom', roast: 'light'},
    {id: 4, name: 'Jet', roast: 'medium'},
    {id: 5, name: 'Erase', roast: 'medium'},
    {id: 6, name: 'Copycat', roast: 'medium'},
    {id: 7, name: 'Explosion', roast: 'dark'},
    {id: 8, name: 'Dark Shadow', roast: 'dark'},
    {id: 9, name: 'Decay', roast: 'dark'},
    {id: 10, name: 'Blackhole', roast: 'dark'},
    {id: 11, name: 'Fiber Master', roast: 'dark'},
    {id: 12, name: 'Half Hot Half Cold', roast: 'dark'},
    {id: 13, name: 'All For one', roast: 'dark'},
    {id: 14, name: 'One For All', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var myInput = document.getElementById("myInput")

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
myInput.addEventListener("keyup", function(){
    updateCoffees(myInput.value)
})


