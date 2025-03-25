document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    function renderTable() {
        employeeTable.innerHTML = '';
        employees.forEach((employee, index) => {
            const row = employeeTable.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td> <!-- STT -->
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            `;
        });
    }

    function addEmployee(name, position) {
        employees.push({ name, position });
        localStorage.setItem('employees', JSON.stringify(employees));
        renderTable();
    }

    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        addEmployee(name, position);
        employeeForm.reset();
    });

    renderTable();
});