// Función para actualizar la hora y fecha cada segundo
function updateTimeAndDate() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Formatear la hora en HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = `Time: ${timeString}`;

    // Formatear la fecha en DD/MM/YYYY
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateString = `${day}/${month}/${year}`;
    dateElement.textContent = `Date: ${dateString}`;
}

// Función para obtener la ubicación
function updateLocation() {
    const locationElement = document.getElementById('location');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            locationElement.textContent = `Location: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
        }, () => {
            locationElement.textContent = 'Location: Unable to retrieve location';
        });
    } else {
        locationElement.textContent = 'Location: Geolocation is not supported';
    }
}

// Llamar a las funciones de actualización inicial y configurar el intervalo
updateTimeAndDate();
updateLocation();
setInterval(updateTimeAndDate, 1000);
