// adding EventListeners for submit button
document.querySelector('.submit').addEventListener('click', function() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const errorMessage = validateDate(day, month, year);
    if (errorMessage) {
        alert(errorMessage);
    } else {
        const age = calculateAge(new Date(year, month - 1, day));
        displayAge(age);
    }
});

function validateDate(day, month, year) {
    if (!day || !month || !year) {
        return 'All fields are required';
    }

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return 'Please enter valid numbers';
    }

    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);
    const yearInt = parseInt(year, 10);

    if (dayInt < 1 || dayInt > 31) {
        return 'Please enter a valid day';
    }

    if (monthInt < 1 || monthInt > 12) {
        return 'Please enter a valid month';
    }

    const currentYear = new Date().getFullYear();
    if (yearInt < 1900 || yearInt > currentYear) {
        return 'Please enter a valid year';
    }

    return null;
}

function calculateAge(birthDate) {
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
}

function displayAge(age) {
    const ageElements = document.querySelectorAll('.class .line1');
    ageElements[0].textContent = age.years;
    ageElements[1].textContent = age.months;
    ageElements[2].textContent = age.days;
}





