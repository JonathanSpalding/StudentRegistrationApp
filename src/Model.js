////////////////////////////////////////////////////////////////////////////////////
///// M O D E L
////////////////////////////////////////////////////////////////////////////////////

// This is an array to keep track of all the students that have been registered.
let studentList = [];

// This is an internal ID that we give each Student object. This will make each record easier to edit.
let nextStudentId = 1000;

// This is your student constructor
export class Student {
    constructor (firstName, lastName, male, uvuId, race, age, isVeteran) {
        this.id = nextStudentId++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.male = male;
        this.uvuIt = uvuId;
        this.race = race;
        this.age = age;
        this.isVeteran = isVeteran;
    }
    
    // A function to return a display-name
    sortableName () {
        return this.lastName + ", " + this.firstName;
    }
}

// Creates a new student
export let createStudent = (firstName, lastName, male, uvuId, race, age, isVeteran) => {
    let newStudent = new Student(firstName, lastName, male, uvuId, race, age, isVeteran);
    studentList.push(newStudent);

    console.log(`Created new student: ${newStudent.sortableName()}`);

    return newStudent; 
}

// Gets all students in the list
export function getAllStudents() {
    return studentList;
}

// Gets a student by its ID
export function getStudent(id) {
    return studentList.find(student => student.id === id);
}

export function updateStudent(id, firstName, lastName, male, uvuId, race, age, isVeteran) {
    let student = studentList.find(student => student.id === id);
    if (!student)
    return undefined;

    student.firstName = firstName;
    student.LastName = lastName;
    student.male = male;
    student.uvuId = uvuId;
    student.race = race;
    student.age = race;
    student.isVeteran = isVeteran;

    return student;
}

export function deleteStudent(id) {
    return;
}

export function editStudent(firstName, lastName, male, uvuId, race, age, isVeteran) {
    let newStudent = new Student(firstName, lastName, male, uvuId, race, age, isVeteran);
    studentList.push(newStudent);

    //console.log(`Created new student: ${newStudent.sortableName()}`);

    return newStudent;
}