function matchTutor() {
    const tutors = ["Gia sư A", "Gia sư B", "Gia sư C"];
    const students = ["Học sinh 1", "Học sinh 2", "Học sinh 3"];
    
    const randomTutor = tutors[Math.floor(Math.random() * tutors.length)];
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    
    document.getElementById('result').innerText = `Ghép đôi: ${randomTutor} với ${randomStudent}`;
}