function deyk() {
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const x = document.getElementById('x');
    if (grade >= 98 && grade <= 100) {
        x.textContent = `${name}, your grade ${grade} is highest honor.`;
        x.style.color = 'lime';
    } else if (grade >= 95 && grade <= 97) {
        x.textContent = `${name}, your grade ${grade} is high honor.`;
        x.style.color = 'lime';
    } else if (grade >= 90 && grade <= 94) {
        x.textContent = `${name}, your grade ${grade} is with honor.`;
        x.style.color = 'lime';
    } else if (grade >= 75 && grade <= 89) {
        x.textContent = `${name}, your grade ${grade} is passed.`;
        x.style.color = 'lime';
    } else if (grade >= 1 && grade <= 74) {
        x.textContent = `Sorry ${name}, but your grade ${grade} is failed.`;
        x.style.color = 'red';
    } else if (name == '' && grade == '') {
        x.textContent = "Please enter your name and grade first.";
        x.style.color = 'red';
    } else if (name == '') {
        x.textContent = "Please enter your name.";
        x.style.color = 'red';
    } else if (grade == '') {
        x.textContent = "Please enter your grade.";
        x.style.color = 'red';
    } else {
        x.textContent = "Walang ganyan gaga ka.";
        x.style.color = 'red';
    }
}