/*=================== slick slider js ==================*/
$(document).ready(function () {
  $(".slick_slide").slick({
    draggable: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          draggable: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});


/*=================== menu bar sticky and back to top ==================*/

$(document).ready(() => {
  $('.back_to_top').click(() => {
      $('html, body').animate({scrollTop: 0}, 500);
  })

  $(window).on('scroll', () => {
      let scrollTop = $(this).scrollTop(); 

      if(scrollTop > 200){
          $('.navbar').addClass('main_menu_bg');
      }else{
          $('.navbar').removeClass('main_menu_bg');
      }

      if(scrollTop > 200){
          $('.back_to_top').fadeIn()
      }else{
          $('.back_to_top').fadeOut()
      }
  })

  $(window).on('load', () => {
      $('.preloader_overlay').fadeOut(1000);
  })
})

// ======================== contact form validation ==========================

const form = document.querySelector("#form");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `First Name: ${fName.value} <br> Last Address: ${lName.value} <br> Email Address: ${emailAddress.value} <br> Message: ${message.value}`;

  Email.send({
    SecureToken: "34d4356b-dabd-4918-9a9c-adbd654e0611",
    To: "hmdfahim420@gmail.com",
    From: "hmdfahim420@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  let items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value !== "") {
      checkMail();
    }

    items[1].addEventListener("keyup", () => {
      checkMail();
    });

    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkMail() {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorTextEmail = document.querySelector(".error_txt.email");

  if (emailAddress.value !== "") {
    errorTextEmail.innerHTML = "Enter a valid email address";
  } else {
    errorTextEmail.innerHTML = "Email Address can't be blank";
  }

  if (!emailAddress.value.match(re)) {
    emailAddress.classList.add("error");
    emailAddress.parentElement.classList.add("error");
  } else {
    emailAddress.classList.remove("error");
    emailAddress.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fName.classList.contains("error") &&
    !lName.classList.contains("error") &&
    !emailAddress.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});

// ========================AOS Animation ==========================
AOS.init();
