document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Application form is not yet available. Please contact HR for more information.');
        });
    });
});
