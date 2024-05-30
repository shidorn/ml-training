/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

function Average() {
  let sum = 0;
  let mark = "";
  for(let i = 0; i < students.length; i++) {
    sum += students[i].mark;
  }
let average = sum / students.length;
if(average < 60) mark = "F";
if(average >= 60 && average <= 70) mark = "D";
if(average >= 70 && average <= 80) mark = "C";
if(average >= 80 && average <= 90) mark = "B";
if(average > 90) mark = "A";;
return average +' : '+mark;
}

console.log(Average());