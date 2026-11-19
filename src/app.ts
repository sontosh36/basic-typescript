type Student = {
  name: string,
  age: number,
  isPassed: boolean,
  subjects: string[],
  address: string,
  status: [string, number, boolean]
};
const rofiq: Student = {
  name: "Rofiq",
  age: 20,
  isPassed: true,
  subjects: ["Physics", "Math", "Chemistry"],
  address: "752 Street, New York, USA",
  status: ["Unmarried", 1, true]
};
function printStudentInfo(student: Student): void {
    console.log(`Name: ${student.name}`);
    console.log(`Subjects: ${student.subjects.join(",")}`);
    console.log(`Is Passed: ${student.isPassed}`);
    console.log(`Address: ${student.address}`);

}
printStudentInfo(rofiq);