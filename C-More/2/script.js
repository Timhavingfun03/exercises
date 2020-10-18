//Skriv en funktion som accepterar en array som argument och byter ut sista elementet mot strängen "virus"

function AAR(arr){
arr[arr.length - 1] = 'VIRUS'
}

const words = ['apple', 'blue', 'Evil' ]

AAR(words)

console.log(words)