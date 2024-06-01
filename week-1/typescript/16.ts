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

function Average() : number[] | string[] {
  var mark = "";
  let average = [];
  for (var i = 0; i < students.length; i++) {
      if (students[i].mark < 60) {
          mark = "F";
      }
      if (students[i].mark >= 60 && students[i].mark < 70) {
          mark = "D";
      } 
      if (students[i].mark >= 70 && students[i].mark < 80) {
          mark = "C";
      }
      if (students[i].mark >= 80 && students[i].mark < 90) {
          mark = "B";
      } 
      if (students[i].mark >= 90) {
          mark = "A";
      } 
      average.push(students[i].name + ": "+ students[i].mark +": "+mark);
  }
  return average;
}
console.log(Average());