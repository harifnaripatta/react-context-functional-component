function greater(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Not a number";
  } else if (num1 > num2) {
    console.log("num1 greater than num2");
  } else {
    console.log("num2 greater than num1");
  }
}

try {
  let x = greater(10, "ten");
} catch (error) {
  console.log(error);
}
