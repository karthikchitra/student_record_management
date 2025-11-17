// studentExample2.js

// 1) Create object
let student = {
  name: "Kiran",
  age: 22,
  course: "B.Tech Mechanical",
  marks: 56
};

console.log("Initial Student Object:");
console.log(student);
console.log("--------------------------------------------------");

// 2) Add new property 'grade' and change 'marks'
student.grade = "B";
student.marks = 63;

console.log("After Adding Grade & Updating Marks:");
console.log(student);
console.log("--------------------------------------------------");

// 3) Object.keys() & Object.values()
console.log("Object.keys(student):", Object.keys(student));
console.log("Object.values(student):", Object.values(student));
console.log("--------------------------------------------------");

// 4) Object.entries()
console.log("Object.entries(student):", Object.entries(student));
console.log("--------------------------------------------------");

// 5) Create extraDetails & merge using Object.assign()
let extraDetails = {
  hostel: "A-Block",
  rollNo: "ME23-119"
};

Object.assign(student, extraDetails);

console.log("After Merging extraDetails:");
console.log(student);
console.log("--------------------------------------------------");

// 6) hasOwnProperty() checks
console.log("Has 'course'? ->", student.hasOwnProperty("course"));
console.log("Has 'address'? ->", student.hasOwnProperty("address"));
console.log("--------------------------------------------------");

// 7) Freeze copy
let frozenCopy = { ...student }; // spread copy
Object.freeze(frozenCopy);

console.log("Frozen Copy Before Modification Attempt:");
console.log(frozenCopy);

// Attempts (will NOT change)
frozenCopy.marks = 99;
frozenCopy.newField = "test";
delete frozenCopy.hostel;

console.log("Frozen Copy After Modification Attempt (unchanged):");
console.log(frozenCopy);
console.log("--------------------------------------------------");

// 8) Seal copy
let sealedCopy = { ...student };
Object.seal(sealedCopy);

console.log("Sealed Copy Before Changes:");
console.log(sealedCopy);

// Allowed: modify existing property
sealedCopy.marks = 72;

// Not allowed: add/delete properties
sealedCopy.newField = "cannot"; 
delete sealedCopy.rollNo;

console.log("Sealed Copy After Attempted Changes:");
console.log(sealedCopy);
console.log("--------------------------------------------------");

// Final Summary
console.log("Summary:");
console.log("Original Student:", student);
console.log("Frozen Object (no change allowed):", frozenCopy);
console.log("Sealed Object (modify allowed, add/delete not allowed):", sealedCopy);