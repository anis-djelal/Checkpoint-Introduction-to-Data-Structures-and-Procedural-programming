
// Problem 1:


// Function to find the sum of distinct elements
function sumOfDistinct(set1, set2) {
  let sum = 0;

  // Check elements of set1 not in set2
  for (let i = 0; i < set1.length; i++) {
    let found = false;
    // Nested loop to search in set2
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += set1[i];
    }
  }

  // Check elements of set2 not in set1
  for (let i = 0; i < set2.length; i++) {
    let found = false;
    // Nested loop to search in set1
    for (let j = 0; j < set1.length; j++) {
      if (set2[i] === set1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += set2[i];
    }
  }

  return sum;
}

// Example for Problem 1
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log("Problem 1 → Sum of distinct elements =", sumOfDistinct(set1, set2));




// Problem 2: 
// Function to calculate dot product of two vectors
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

// Function to check if two vectors are orthogonal
function areOrthogonal(v1, v2) {
  return dot_product(v1, v2) === 0;
}

// Examples for Problem 2
let v1 = [1, 2, 3];
let v2 = [-3, -2, 1]; 
let v3 = [2, -1, 0];  

console.log("Problem 2 → Dot product of v1 and v2 =", dot_product(v1, v2));
console.log("Problem 2 → Are v1 and v3 orthogonal?", areOrthogonal(v1, v3));
