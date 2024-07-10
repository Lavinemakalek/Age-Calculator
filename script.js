// adding EventListeners for submit button.when clicked the function inside will execute
document.querySelector('.submit').addEventListener('click', function() {
    // retieves information from Html using ids and stores them in the variables
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
// checks for any errors in the inputs
    const errorMessage = validateDate(day, month, year);
    if (errorMessage) {
        alert(errorMessage);
        /* if there is no error message, it calculates the age using the calculateAge function and
         then displays the age using the displayAge function.*/
    } else {
        const age = calculateAge(new Date(year, month - 1, day));
        displayAge(age);
    }
});
/* Checks if any of the fields are empty. If any field is empty, 
it returns the error message "All fields are required"*/
function validateDate(day, month, year) {
    if (!day || !month || !year) {
        return 'All fields are required';
    }
/* Checks if the values entered are not numbers. If any value is not a number, 
it returns the error message "Please enter valid numbers".*/
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return 'Please enter valid numbers';
    }
// Converts the day ,month and year values to an integer and stores them in dayInt,monthInt and yearInt respectively.
    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);
    const yearInt = parseInt(year, 10);
// Checks if the day is within the valid range (1-31). If not, it returns the error message "Please enter a valid day".
    if (dayInt < 1 || dayInt > 31) {
        return 'Please enter a valid day';
    }
    // Checks if the month is within the valid range (1-12). If not, it returns the error message "Please enter a valid month".
    if (monthInt < 1 || monthInt > 12) {
        return 'Please enter a valid month';
    }
// checks if the entered year is greater than the current year,returns'please enter a valid year'
    const currentYear = new Date().getFullYear();
    if ( yearInt > currentYear) {
        return 'Please enter a valid year';
    }
// If all validations pass, it returns null, indicating no errors.
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





