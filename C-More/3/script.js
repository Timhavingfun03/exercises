// Skapa en funktion isSameAge som accepterar två person-objekt som argument och returnerar true ifall deras property age är samma annars false

function isSameAge(person1, person2) {
    return person1.age === person2.age
}

const tim = {
    name: 'Tim',
    age: '17',
    height: '180'
}

const filip = {
    name: 'Filip',
    age: '18',
    height: '185'
}

isSameAge(tim, filip)

console.log(isSameAge(tim, filip))
