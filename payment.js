document.getElementById('view-bill-btn').addEventListener('click', function() {
    alert('This will redirect to the billing portal.');
});

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const paymentDetails = document.getElementById('payment-details').value;
    
    if (amount && paymentMethod && paymentDetails) {
        alert('Payment of ' + amount + ' via ' + paymentMethod + ' is being processed.');
    } else {
        alert('Please fill in all the required fields.');
    }
});
