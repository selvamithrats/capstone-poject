document.getElementById('reliefForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const need = document.getElementById('need').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;

    // For now, we'll just log the data to the console
    console.log({ need, name, contact, address, description });

    // Display notification (in a real application, this is where you'd send the data to your server)
    document.getElementById('notificationArea').style.display = 'block';
});
