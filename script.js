document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-call-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        // 1. Prevent the default form submission (which reloads the page)
        event.preventDefault();

        // 2. Perform basic validation (HTML 'required' attributes handle most of it)
        if (!form.checkValidity()) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill out all required fields and check the consent box.';
            return;
        }

        // 3. Simulate an AJAX submission
        // In a real application, you would use 'fetch()' or 'XMLHttpRequest' 
        // to send the form data and file to a backend server.

        // Disable the button to prevent double clicks
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        formMessage.style.color = '#ff8800'; // Orange for pending
        formMessage.textContent = 'Processing your submission...';

        // Simulate a network delay (5 seconds)
        setTimeout(() => {
            // Success message logic
            formMessage.style.color = 'green';
            formMessage.innerHTML = '✅ **Success!** Your data has been successfully submitted for review. Thank you for your contribution!';
            
            // Reset the form after success
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Data';
            
            // For a real submission, you'd check the server response before showing success.
        }, 5000); 
    });
});
