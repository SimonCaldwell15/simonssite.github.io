document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});
