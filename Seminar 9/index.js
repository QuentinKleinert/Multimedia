let startTime = Date.now();
        const formElements = document.querySelectorAll('#registrationForm input, #registrationForm select');

        formElements.forEach(element => {
            element.addEventListener('focus', (e) => {
                console.log(`Focus auf: ${e.target.id} um ${new Date().toLocaleTimeString()}`);
            });
        });


document.getElementById('registrationForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let formIsValid = true;

            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            const birthdate = document.getElementById('birthdate');
            const country = document.getElementById('country');
            const terms = document.getElementById('terms');

            if (!fullName.value.trim()) {
                fullName.classList.add('is-invalid');
                formIsValid = false;
            } else {
                fullName.classList.remove('is-invalid');
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                email.classList.add('is-invalid');
                formIsValid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            if (password.value.length < 8) {
                password.classList.add('is-invalid');
                formIsValid = false;
            } else {
                password.classList.remove('is-invalid');
            }

            if (password.value !== confirmPassword.value || confirmPassword.value.length < 8) {
                confirmPassword.classList.add('is-invalid');
                formIsValid = false;
            } else {
                confirmPassword.classList.remove('is-invalid');
            }

            if (!birthdate.value) {
                birthdate.classList.add('is-invalid');
                formIsValid = false;
            } else {
                birthdate.classList.remove('is-invalid');
            }

            if (!country.value) {
                country.classList.add('is-invalid');
                formIsValid = false;
            } else {
                country.classList.remove('is-invalid');
            }

            if (!terms.checked) {
                terms.classList.add('is-invalid');
                formIsValid = false;
            } else {
                terms.classList.remove('is-invalid');
            }

            if (formIsValid) {
                const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
                console.log(`Formular wurde erfolgreich in ${timeTaken} Sekunden ausgefüllt.`);

                document.getElementById('summaryName').textContent = fullName.value;
                document.getElementById('summaryEmail').textContent = email.value;
                document.getElementById('summaryPassword').textContent = password.value;
                document.getElementById('summaryBirthdate').textContent = birthdate.value;
                document.getElementById('summaryCountry').textContent = country.value;

                document.getElementById('summary').classList.remove('d-none');
                console.log('Formular erfolgreich abgesendet.');
            } else {
                console.log('Formular enthält Fehler und wurde nicht abgesendet.');
            }
});

document.getElementById('registrationForm').addEventListener('reset', function() {
            document.getElementById('summary').classList.add('d-none');
            const inputs = document.querySelectorAll('.form-control, .form-select, .form-check-input');
            inputs.forEach(input => input.classList.remove('is-invalid'));
            startTime = Date.now();
            console.log('Formular wurde zurückgesetzt.');
});