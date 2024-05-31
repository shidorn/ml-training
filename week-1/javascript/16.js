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
 * 60-69 : D
 * 70-79 : C
 * 80-89 : B
 * >= 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

const computedGrade = (averageMark) => {
  if (averageMark < 60) {
    return "F";
  } else if (averageMark < 70) {
    return "D";
  } else if (averageMark < 80) {
    return "C";
  } else if (averageMark < 90) {
    return "B";
  } else {
    return "A";
  }
};

const getAverageMark = (students) => {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].mark;
  }
  return sum / students.length;
};

console.log(computedGrade(getAverageMark(students)));
