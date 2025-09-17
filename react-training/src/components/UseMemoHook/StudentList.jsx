import React, { useMemo, useState } from "react";

const StudentList = () => {
  const studentList = ["Mahesh", "Snehal", "Khushi", "Sudip", "Shikhar"];
  const [student, setStudent] = useState("");
  const [studentListState, setStudentListState] = useState(studentList);

  const memorizedStudent = useMemo(
    () => studentListState,
    [studentListState.length]
  );

  const complexFunction = () => {};

  console.log(memorizedStudent);

  const addStudent = (student) => {
    // add a student
    setStudentListState((prevStudentList) => {
      return [...prevStudentList, student];
    });
    setStudent("");
  };

  const handleInput = (event) => {
    // handles the input
    setStudent(event.target.value);
  };

  return (
    <div>
      <p>Names of Students</p>
      {memorizedStudent.map((value) => (
        <div key={value}>{value}</div>
      ))}
      Add Student: <input type="text" onChange={handleInput} value={student} />
      <p>{student}</p>
      <button onClick={() => addStudent(student)}>Add Student</button>
    </div>
  );
};

export default StudentList;
