// ===== Hospital Search =====

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");

searchBtn.addEventListener("click", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const hospitals =
        document.querySelectorAll(".hospital-card");

    let found = false;

    hospitals.forEach(function (hospital) {

        const hospitalName =
            hospital.querySelector("h3")
            .textContent
            .toLowerCase();

        if (hospitalName.includes(searchText)) {

            hospital.style.display = "block";
            found = true;

        } else {

            hospital.style.display = "none";

        }

    });

    if (found) {
        message.textContent = "Hospital found ✅";
    } else {
        message.textContent = "No hospitals found ❌";
    }

});


// ===== Appointment Booking =====

const bookBtn =
    document.getElementById("bookBtn");

const patientName =
    document.getElementById("patientName");

const appointmentMessage =
    document.getElementById("appointmentMessage");

bookBtn.addEventListener("click", function(){

    const name =
        patientName.value.trim();

    if(name === ""){

        appointmentMessage.textContent =
            "Please enter your name.";

    }else{

        appointmentMessage.textContent =
            `Appointment booked for ${name} ✅`;

    }

});