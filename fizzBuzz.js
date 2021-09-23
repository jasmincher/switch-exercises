let result;
let max = 100;

for (let x = 1; x <= max; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    result = "fizzbuzz";
  } else if (x % 3 == 0) {
    result = "fizz";
  } else if (x % 5 == 0) {
    result = "buzz";
  } else {
    result = x;
  }

  console.log(result);
}
