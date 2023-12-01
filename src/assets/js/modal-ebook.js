const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const btnDisabled = document.querySelector(".btn-disabled");
const btnDownload = document.querySelector("#disabled-download");
const file = "Va-te-faire-digitaliser-ebook.pdf";
// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const downloadFile = function () {
    /*window.location.href = 'assets/Va-te-faire-digitaliser-ebook.pdf','_blank';*/
    window.open('assets/Va-te-faire-digitaliser-ebook.pdf', '_blank');
};
btnDownload.addEventListener("click", downloadFile);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// open modal function
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const email = $('#email').val();
    if (validateEmail(email)) {
        $('#disabled-download').prop('disabled', false);
        btnDisabled.classList.add("btn");
        btnDisabled.classList.remove("btn-disabled");

    }
    return false;
}

$('#email').on('input', validate);

const downloadDoc = () => {

    if (validateEmail(email)) {
        $('#disabled-download').prop('disabled', false);
        btnDisabled.classList.add("btn");
        btnDisabled.classList.remove("btn-disabled");

    }
    return false;
}

