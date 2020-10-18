//Skriv en funktion som accepterar en array som argument och returnerar sista elementet utan att i övrigt påverka arrayen

function last(arr){
    return arr[0]
}

const shapes = ['circle', 'rectangle', 'triangle' ]
const names = ['Tim', 'Filip', 'Hampus']

console.log(last(shapes))
console.log(last(names))