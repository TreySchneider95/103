// console.log("Script");
// function test(name){
//     console.log(`Hello ${name}`);
// };
// test("Trey");

// let traveling = function(city){
//     return `<li>Traveling to ${city}</li>`;
// };
// // let travel1 = traveling('La Paz');
// // let travel2 = traveling('San Diego');
// // let travel3 = traveling('Qatar');

// document.write(travel1);
// document.write(travel2);
// document.write(travel3);

// function inputCity(){
//     let txtCity = document.getElementById("txtCity").value
//     document.getElementById("test").innerHTML += traveling(txtCity)
// };
let petName = prompt("Enter your pets name:")
let hunger = 80;
let happiness = 50;
let energy = 40;

function displayInfo(){
    document.getElementById("hunger").innerHTML = `🍗 Hunger: ${hunger}`
    document.getElementById("happiness").innerHTML = `😺 Happiness: ${happiness}`
    document.getElementById("energy").innerHTML = `⚡ Energy: ${energy}`
    document.getElementById("pet-name").innerHTML = petName
}
function feed(){
    if(hunger>0&&hunger<100&&energy<100){
        hunger-=10
        energy+=10
    }
    else if(happiness>0){
        happiness-=10
    }
    displayInfo()
    // return hunger
}
function pet(){
    if(happiness<100&&energy<100){
        happiness+=10
        energy+=10
    }
    else if(hunger<100){
        hunger+=10
    }
    displayInfo()
}
function play(){
    if(hunger<60&&happiness>0){
        happiness-=20
    }
    if(energy>0&&happiness<100&&hunger<80){
        happiness+=10
        energy-=10
        hunger+=10
    }
    else if(energy>0){
        energy-=10
    }
    displayInfo()
}
displayInfo()
