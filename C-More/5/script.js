//Skapa en funktion filterOdds som accepterar en array av tal som argument och som returnerar en ny array utan udda tal (odd)

function udda(x){
    return x % 2 === 1 
}
function filterOdds(numbers){
    return numbers.filter(udda)
}

const numbeers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]