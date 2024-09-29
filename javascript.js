let people = [];

document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita l'invio del modulo

    aggiungiPersona();
});

function aggiungiPersona() {
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const dataNascita = document.getElementById('dataNascita').value;
    const telefono = document.getElementById('telefono').value;
    const paese = document.getElementById('paese').value;
    const provincia = document.getElementById('provincia').value;

    const persona = {
        nome,
        cognome,
        email,
        dataNascita,
        telefono,
        paese,
        provincia
    };

    people.push(persona);
    aggiornaTabella();

    // Resetta i campi del modulo
    document.getElementById('personForm').reset();
}

function aggiornaTabella() {
    const tableBody = document.querySelector('#peopleTable tbody');
    tableBody.innerHTML = ''; // Svuota la tabella

    people.forEach((persona, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.email}</td>
            <td>${persona.dataNascita}</td>
            <td>${persona.telefono}</td>
            <td>${persona.paese}</td>
            <td>${persona.provincia}</td>
            <td><button onclick="rimuoviPersona(${index})">Rimuovi</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function rimuoviPersona(index) {
    people.splice(index, 1); // Rimuove la persona dall'array
    aggiornaTabella(); // Aggiorna la tabella dopo la rimozione
}
