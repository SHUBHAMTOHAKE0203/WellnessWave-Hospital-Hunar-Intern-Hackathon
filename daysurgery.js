document.addEventListener('DOMContentLoaded', function() {
    // Example: Add an interactive checklist for pre-surgery preparation
    const checklistItems = document.querySelectorAll('#preparation ul li');
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });

    // Example: Add fade-in animations for procedure steps
    const procedureSteps = document.querySelectorAll('.procedure-step');
    procedureSteps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('fade-in');
        }, index * 300);
    });
});
