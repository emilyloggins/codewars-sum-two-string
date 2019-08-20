// Create a function that takes 2 numbers in form of a string as an input, and outputs the sum (also as a string) 

const string = "34";

addTwoStrings = (str) => {
    const ints = string.split("");
    var parse = ints.map(x =>
        parseInt(x));
    const answer = parse.reduce((a, b) => a + b).toString();
    console.log(answer);
}

addTwoStrings(string);
