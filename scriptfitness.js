document.getElementById('trackerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
 
    // Get the input values
    const steps = parseInt(document.getElementById('steps').value, 10);
    const calories = parseInt(document.getElementById('calories').value, 10);
    const exercise = parseFloat(document.getElementById('exercise').value);
 
    // Update the summary section
    document.getElementById('summarySteps').textContent = `Steps: ${steps}`;
    document.getElementById('summaryCalories').textContent = `Calories Burned: ${calories}`;
    document.getElementById('summaryExercise').textContent = `Hours of Exercise: ${exercise}`;
 
    // Clear the form inputs
    document.getElementById('trackerForm').reset();
 });