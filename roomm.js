function showBookingForm(roomType) {
    document.getElementById('room-type').value = roomType;
    document.getElementById('booking').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
}

function submitBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;

    if (name && email && checkin && checkout && guests && roomType) {
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('bookingForm').reset();
        document.getElementById('booking').style.display = 'none';
    } else {
        alert('Please fill out all fields.');
    }
}