
document.addEventListener('DOMContentLoaded', function() {
    function calculateGPA(event) {
        event.preventDefault();
        
        const subjectsContainer = document.getElementById('subjectsContainer');
        const subjects = subjectsContainer.getElementsByClassName('subject');
        
        let totalCredits = 0;
        let totalGradePoints = 0;
        
        for (let subject of subjects) {
            const inputs = subject.getElementsByTagName('input');
            const select = subject.getElementsByTagName('select')[0];
            
            const credits = parseFloat(inputs[1].value);
            const grade = parseFloat(select.value);
            
            totalCredits += credits;
            totalGradePoints += credits * grade;
            
                   
    }
       
        if (totalCredits === 0) {
            document.getElementById('result').textContent = 'No subjects entered.';
            return;
        }

        const gpa = totalGradePoints / totalCredits;
        document.getElementById('result').textContent = `GPA: ${gpa.toFixed(2)}`;
    }

    function addSubject() {
        const subjectsContainer = document.getElementById('subjectsContainer');
        const subjectTemplate = `
            <div class="subject">
                <input type="text" placeholder="Subject Name" required>
                <input type="number" placeholder="Credits" min="1" required>
                <select required>
                    <option value="">Grade</option>
                    <option value="4.0">A</option>
                    <option value="3.5">AB</option>
                    <option value="3.0">B</option>
                    <option value="2.5">BC</option>
                    <option value="2.0">C</option>
                    <option value="1.0">D</option>
                    <option value="0.0">E</option>
                </select>
            </div>
        `;
        subjectsContainer.insertAdjacentHTML('beforeend', subjectTemplate);
    }

    function removeSubject() {
    const subjectsContainer = document.getElementById('subjectsContainer');
    const subjects = subjectsContainer.getElementsByClassName('subject');
    if (subjects.length > 1) {
      subjectsContainer.removeChild(subjects[subjects.length - 1]);
    }
  }



    document.getElementById('gpaForm').addEventListener('submit', calculateGPA);

    document.getElementById('addSubjectButton').addEventListener('click', addSubject);

    document.getElementById('removeSubjectButton').addEventListener('click', removeSubject);
});

