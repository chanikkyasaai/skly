
document.addEventListener('DOMContentLoaded', function() {
    const myBookingsLink = document.getElementById('my-bookings-link');
    const myBookingsSection = document.getElementById('my-bookings');

    myBookingsLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Toggle visibility of My Bookings section
        myBookingsSection.style.display = myBookingsSection.style.display === 'none' ? 'block' : 'none';

        // Scroll to My Bookings section
        if (myBookingsSection.style.display === 'block') {
            const offset = myBookingsSection.offsetTop - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
  const viewDetailsLinks = document.querySelectorAll(".view-details");

  viewDetailsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const booking = e.target.closest(".booking");
      const closeButton = booking.querySelector(".close-button"); // Target close button within this booking

      // Show booking details
      booking.classList.add("booking-details-visible");

      // Add click event listener to close button
      closeButton.addEventListener("click", () => {
        booking.classList.remove("booking-details-visible");
      });
    });
  });
});



     // Initialize Swiper
     var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    
   
    document.addEventListener('DOMContentLoaded', function () {
        const profileLink = document.getElementById('profile-link');
        const profileSection = document.getElementById('profile-section');
        const cancelBtn = document.getElementById('cancel-btn');
        const closeProfileBtn = document.getElementById('close-profile-btn');
        const editBtn = document.getElementById('edit-btn');
        const saveBtn = document.getElementById('save-btn');
        const uploadPhotoBtn = document.getElementById('upload-photo-btn');
        const photoInput = document.getElementById('photo-input');
        const savePhotoBtn = document.getElementById('save-photo-btn');
        const addPhoneBtn = document.getElementById('add-phone-btn');
        const addEmailBtn = document.getElementById('add-email-btn');
        const addLocationBtn = document.getElementById('add-location-btn');
        const accountDetailsForm = document.getElementById('account-details-form');
        const formInputs = accountDetailsForm.querySelectorAll('input, textarea');

        profileLink.addEventListener('click', function (event) {
            event.preventDefault();
            profileSection.style.display = 'block';
        });

        closeProfileBtn.addEventListener('click', function () {
            profileSection.style.display = 'none';
        });



        let originalValues = {};

        function storeOriginalValues() {
            formInputs.forEach(input => {
                originalValues[input.name] = input.value;
            });
        }

        function restoreOriginalValues() {
            formInputs.forEach(input => {
                input.value = originalValues[input.name];
            });
        }

        editBtn.addEventListener('click', function () {
            storeOriginalValues();
            formInputs.forEach(input => input.disabled = false);
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
            addPhoneBtn.style.display = 'inline-block';
            addEmailBtn.style.display = 'inline-block';
            addLocationBtn.style.display = 'inline-block';
        });

        cancelBtn.addEventListener('click', function () {
            restoreOriginalValues();
            formInputs.forEach(input => input.disabled = true);
            editBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
            addPhoneBtn.style.display = 'none';
            addEmailBtn.style.display = 'none';
            addLocationBtn.style.display = 'none';
        });

        saveBtn.addEventListener('click', function () {
            formInputs.forEach(input => input.disabled = true);
            editBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
            addPhoneBtn.style.display = 'none';
            addEmailBtn.style.display = 'none';
            addLocationBtn.style.display = 'none';
        });



        uploadPhotoBtn.addEventListener('click', function () {
            photoInput.click();
        });

        photoInput.addEventListener('change', function () {
            if (photoInput.files.length > 0) {
                savePhotoBtn.style.display = 'inline-block';
                uploadPhotoBtn.style.display = 'none';
            }
        });

        savePhotoBtn.addEventListener('click', function () {
            const file = photoInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('profile-photo').src = e.target.result;
                    savePhotoBtn.style.display = 'none';
                    uploadPhotoBtn.style.display = 'inline-block';
                };
                reader.readAsDataURL(file);
            }
        });

        addPhoneBtn.addEventListener('click', function () {
            const newPhoneInput = document.createElement('input');
            newPhoneInput.type = 'tel';
            newPhoneInput.name = 'phone-number';
            newPhoneInput.placeholder = 'New Phone Number';
            newPhoneInput.classList.add('phone-number');
            newPhoneInput.disabled = false;
            addPhoneBtn.before(newPhoneInput);
        });

        addEmailBtn.addEventListener('click', function () {
            const newEmailInput = document.createElement('input');
            newEmailInput.type = 'email';
            newEmailInput.name = 'email';
            newEmailInput.placeholder = 'New Email';
            newEmailInput.classList.add('email');
            newEmailInput.disabled = false;
            addEmailBtn.before(newEmailInput);
        });

        addLocationBtn.addEventListener('click', function () {
            const newLocationInput = document.createElement('input');
            newLocationInput.type = 'text';
            newLocationInput.name = 'location';
            newLocationInput.placeholder = 'New Location';
            newLocationInput.classList.add('location');
            newLocationInput.disabled = false;
            addLocationBtn.before(newLocationInput);
        });


        cancelBtn.addEventListener('click', function () {
        restoreOriginalValues();
        formInputs.forEach(input => input.disabled = true);
        editBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        addPhoneBtn.style.display = 'none';
        addEmailBtn.style.display = 'none';
        addLocationBtn.style.display = 'none';
        addAvailabilityBtn.style.display = 'none';
    });
    });


    document.addEventListener('DOMContentLoaded', function() {
    const notificationsLink = document.getElementById('notifications-link');
    const notificationsPopup = document.getElementById('notifications-popup');
    const closeBtn = document.getElementById('close-btn');

    notificationsLink.addEventListener('click', function(event) {
        event.preventDefault();
        notificationsPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function(event) {
        notificationsPopup.style.display = 'none';
    });

    // Close notifications popup if clicked outside
    notificationsPopup.addEventListener('click', function(event) {
        if (event.target === notificationsPopup) {
            notificationsPopup.style.display = 'none';
        }
    });
});


