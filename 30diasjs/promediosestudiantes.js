export function getStudentAverage(students){
    let total = 0;
    const course = {
        classAverage: 0,
        students: []
    };
    for (const student of students){
        let sum = student.grades.reduce((sum,grade)=> sum + grade);
        let averageStudent = (sum / student.grades.length).toFixed(2);
        const aStudent = {
            name : student.name,
            average: Number(averageStudent)
        }
        course.students.push(aStudent);
        total += Number(averageStudent);
    }
}