document.getElementById('fetch-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;

    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`) //fetch da allorigins
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore'); //da migliorare
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = `Errore: ${error.message}`;
        });
});
