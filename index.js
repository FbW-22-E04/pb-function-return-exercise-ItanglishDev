// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
  age > 18 ? console.log('true') : console.log('false');;
}
checkAge(19)

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  a < b ? console.log(a) : console.log(b);

}
min(3, -1)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  console.log(x ** n);
}
pow(8, 3)