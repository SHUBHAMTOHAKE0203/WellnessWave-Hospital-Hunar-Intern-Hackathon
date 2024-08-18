document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle details for visitor guidelines
    const guidelinesItems = document.querySelectorAll('#guidelines ul li');
    guidelinesItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Example: Show an alert if parking is full (just a simulation)
    const parkingAlert = document.querySelector('#directions p:last-of-type');
    const isParkingFull = false; // Replace with real-time data check

    if (isParkingFull) {
        parkingAlert.textContent = "Parking is currently full. Please consider alternative parking options nearby.";
        parkingAlert.style.color = 'red';
    }
});
