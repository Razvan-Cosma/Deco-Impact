document.querySelector('.modal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
        name: event.target.user_name.value,
        phone: event.target.user_phone.value,
        email: event.target.user_email.value,
        message: event.target.user_message.value,
        policy: event.target.policy.checked
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    const storedData = JSON.parse(localStorage.getItem('userData'));
    console.log('Stored data:', storedData);
    alert('Mulțumim pentru solicitare! Vă vom contacta în cel mai scurt timp posibil.');
});
