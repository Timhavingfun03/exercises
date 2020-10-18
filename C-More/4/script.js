//Skapa en funktion isSameUser som accepterar två person-objekt som argument och returnerar true ifall deras property email är samma annars false

function isSameUser(user1, user2){
    return user1.mail === user2.mail
}

const tim = {
    mail: 'timlippe'
}

const filip = {
    mail: 'filippe'
}

console.log(isSameUser(tim, filip))