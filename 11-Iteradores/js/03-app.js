//Fizz Buzz
//3 6 9 12 .. Fizz
//5 10 15 20 .. buzz
//15 30 45 .. fizz buzz.

for(let i = 0; i < 100; i++){

    let v = "";
    if(i%3 === 0){
        v += "fizz";
    }
    if(i%5 === 0){
        v+= "buzz";
    }

    console.log(i + ": " + v);
}