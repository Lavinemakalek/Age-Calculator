function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
   

    if (!day || !month || !year) {
        alert("Please enter your date of birth.");
        return;
    }

    const dob = new Date(year, month - 1, day);
    const today = new Date();

    if (dob > today) {
        alert("Date of birth cannot be in the future.");
        return;
    }
   
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
}