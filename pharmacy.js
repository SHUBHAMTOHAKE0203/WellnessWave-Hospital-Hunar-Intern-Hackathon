const medications = [
    { name: "Acetaminophen", description: "Used to relieve pain and reduce fever.", imageSrc: "Acetaminophen.webp" },
    { name: "Buprenorphine", description: "Used to relieve pain and reduce fever.", imageSrc: "bt-500x500.webp" },
    { name: "Clindamycin", description: "Used to relieve pain and reduce fever.", imageSrc: "Clindamycin.jpeg" },
    { name: "Doxycycline", description: "Used to relieve pain and reduce fever.", imageSrc: "Doxycycline.jpeg" },
    { name: "Entresto", description: "Used to relieve pain and reduce fever.", imageSrc: "Entresto.jpg" },
    { name: "Farxiga",  description: "Used to relieve pain and reduce fever.",imageSrc: "Farxiga.webp" },
    { name: "Gabapentin", description: "Used to relieve pain and reduce fever.", imageSrc: "Gabapentin.jpg" },
    { name: "Hydrochlorothiazide", description: "Used to relieve pain and reduce fever.", imageSrc: "Hydrochlorothiazide.jpeg" },
    { name: "Imbruvica",  description: "Used to relieve pain and reduce fever.",imageSrc: "Imbruvica.jpg" },
    { name: "Jardiance", description: "Used to relieve pain and reduce fever.",imageSrc: "Jardiance.jpg" },
    { name: "Omeprazole", description: "Used to relieve pain and reduce fever.", imageSrc: "Omeprazole.webp" },
    { name: "Pantoprazole",description: "Used to relieve pain and reduce fever.", imageSrc: "Pantoprazole.png" },
    { name: "Rybelsus",description: "Used to relieve pain and reduce fever.", imageSrc: "Rybelsus.webp" },
    { name: "Tramadol",description: "Used to relieve pain and reduce fever.", imageSrc: "Tramadol.jpg" },
    { name: "Wellbutrin", description: "Used to relieve pain and reduce fever.", imageSrc: "Wellbutrin.jpg" }

];

function loadMedications() {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
    const medicationList = document.getElementById('medication-list');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMedications = medications.filter(med => med.name.toLowerCase().includes(searchTerm));

        medicationList.innerHTML = '';
        if (filteredMedications.length > 0) {
            filteredMedications.forEach(med => {
                const medCard = document.createElement('div');
                medCard.className = 'medication-card';
                medCard.innerHTML = `
                    <img src="${med.imageSrc}" alt="${med.name}" style="width: 100px; height: 100px; object-fit: cover;">
                    <h3>${med.name}</h3>
                    <p>${med.description}</p>
                `;
                medicationList.appendChild(medCard);
            });
        } else {
            medicationList.innerHTML = '<p>No medications found.</p>';
        }
    });
}

window.onload = loadMedications;
