document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive JavaScript here, like a carousel or modal for room images.
    
    // Example: Toggle checklist items
    const checklistItems = document.querySelectorAll('#preparation ul li');
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    });
});
