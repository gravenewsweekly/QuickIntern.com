document.addEventListener("DOMContentLoaded", function () {
    fetch("https://docs.google.com/spreadsheets/d/1lJ-_NR-pIwa3Z9Qmizn5qeISl4SxtjjC2fnsDhZVPaU/edit?usp=drivesdk")
        .then(response => response.text())
        .then(data => {
            let json = JSON.parse(data.substr(47).slice(0, -2)); // Clean JSON response
            let rows = json.table.rows;
            let tableBody = document.querySelector("#internship-list tbody");

            tableBody.innerHTML = ""; // Clear old data

            rows.forEach(row => {
                let company = row.c[0].v;
                let role = row.c[1].v;
                let location = row.c[2].v;
                let apply = row.c[3].v;

                let rowHTML = `<tr>
                    <td>${company}</td>
                    <td>${role}</td>
                    <td>${location}</td>
                    <td><a href="${apply}" target="_blank">Apply</a></td>
                </tr>`;
                
                tableBody.innerHTML += rowHTML;
            });
        })
        .catch(error => console.log("Error:", error));
});
