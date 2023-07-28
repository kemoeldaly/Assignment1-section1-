// HW:
//* 1. Cube Number Test
// Print out all cubed numbers up to the total value 1000. Meaning that if the cubed number is over 1000 break the loop.
// let number = 1;

// while(Math.pow(number, 3) <= 1000) {
//     let cubed = Math.pow(number, 3);

//     console.log(cubed);

//     number++;
// }

//* 2. Prime Numbers
// Get first prime numbers up to 100
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrime(100);

//* 3. Age Question
// Take in a users input for their age, if they are younger than 18 log kids,
//if they're 18 to 65 log adults, else log seniors
function ageTakein(age) {
  if (age < 18) {
    console.log("kids");
  } else if (age >= 18 && age <= 65) {
    console.log("adults");
  } else {
    console.log("senior");
  }
}

const userAge = parseInt(prompt("Enter your age:"));

ageTakein(userAge);
