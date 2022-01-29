function sayHello(userName, location){
    let nameList = ['Trey', 'Bob', 'Nik']
    let phrase = `<h2>Hello <span class='name'>${userName}</span> from <span class='place'>${location}</span></h2>`;
    console.log('User name:', userName, '\n\n', 'location:', location);
    for(x = 0; x < 3; x++){
        document.write(
            `<h2>Hello <span class='name'>${nameList[x]}</span> from <span class='place'>${location}</span></h2>`
        );
    };
    return phrase
};


document.write(sayHello('Tim', 'Mexico'));

function makeColor(color){
    let names = document.getElementsByClassName('name');
    for(x = 0; x < names.length; x++){
        names[x].style.color=color;
    };
};

// makeColor(prompt('Favorite color?'));