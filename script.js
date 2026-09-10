/* =====================================================
   CYBER WATCH - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. LOGIN
===================================================== */

const loginForm = document.querySelector(".login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = loginForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const password = loginForm.querySelector(
            'input[type="password"]'
        ).value.trim();

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        /*
         * Temporary frontend login.
         * Real authentication will be handled
         * by Flask + SQLite later.
         */

        localStorage.setItem("cyberWatchUser", username);

        window.location.href = "dashboard.html";
    });
}


/* =====================================================
   2. DISPLAY LOGGED-IN USER
===================================================== */

const adminName = document.querySelector(".admin span");

if (adminName) {

    const savedUser = localStorage.getItem("cyberWatchUser");

    if (savedUser) {
        adminName.textContent = savedUser.toUpperCase();
    }
}


/* =====================================================
   3. INCIDENT STORAGE
===================================================== */

let incidents = JSON.parse(
    localStorage.getItem("cyberWatchIncidents")
) || [];


/* =====================================================
   4. REPORT INCIDENT
===================================================== */

const incidentForm = document.querySelector(".incident-form");

if (incidentForm) {

    incidentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const type = document.querySelector(
            "#incident-type"
        ).value;

        const severity = document.querySelector(
            'input[name="severity"]:checked'
        );

        const date = document.querySelector("#date").value;

        const time = document.querySelector("#time").value;

        const description = document.querySelector(
            "#description"
        ).value.trim();


        if (!type || !severity || !date || !time || !description) {

            alert("Please complete all fields.");

            return;
        }


        const newIncident = {

            id: Date.now(),

            type: type,

            severity: severity.value,

            date: date,

            time: time,

            description: description,

            status: "Open",

            assignedTo: "Unassigned"

        };


        incidents.push(newIncident);


        localStorage.setItem(
            "cyberWatchIncidents",
            JSON.stringify(incidents)
        );


        alert("Incident reported successfully!");

        window.location.href = "dashboard.html";
    });
}


/* =====================================================
   5. DASHBOARD STATISTICS
===================================================== */

function updateDashboardStats() {

    const total = incidents.length;

    const open = incidents.filter(
        incident => incident.status === "Open"
    ).length;

    const investigating = incidents.filter(
        incident => incident.status === "Investigating"
    ).length;

    const resolved = incidents.filter(
        incident => incident.status === "Resolved"
    ).length;


    const statCards = document.querySelectorAll(
        ".stat-card"
    );


    if (statCards.length >= 4) {

        statCards[0].querySelector(
            ".stat-number"
        ).textContent = total;

        statCards[1].querySelector(
            ".stat-number"
        ).textContent = open;

        statCards[2].querySelector(
            ".stat-number"
        ).textContent = investigating;

        statCards[3].querySelector(
            ".stat-number"
        ).textContent = resolved;
    }
}


/* =====================================================
   6. RUN DASHBOARD UPDATE
===================================================== */

if (document.querySelector(".dashboard")) {

    updateDashboardStats();
}


/* =====================================================
   7. LOGOUT
===================================================== */

const logoutButton = document.querySelector(
    ".admin"
);

if (logoutButton) {

    logoutButton.style.cursor = "pointer";

    logoutButton.addEventListener("click", function () {

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (confirmLogout) {

            localStorage.removeItem(
                "cyberWatchUser"
            );

            window.location.href = "index.html";
        }
    });
}