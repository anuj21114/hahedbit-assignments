let input = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

let output = input.map(studentObj => {
    let studentName = Object.keys(studentObj)[0];
    let subjects = Object.values(studentObj)[0];
    let average = Object.values(subjects).reduce((acc, curr) => acc + curr, 0) / Object.keys(subjects).length;
    return { [studentName]: { average: average } };
});

console.log(output);
// Output:
// [
//     { student1: { average: 64.2 } },
//     { student2: { average: 64.2 } },
//     { student3: { average: 64.2 } }
// ]
