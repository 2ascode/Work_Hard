/* const banner_left_description = document.getElementsByClassName(
  "banner_left_description"
);
console.log(banner_left_description);
banner_left_description[0].innerHTML +=
  "<p>ceci est un text de JavaScript</p><div><p>mon second text dans une balise div<p/></div>";
*/
/* const btn = document.querySelector(".form_send_link_button");
let initial_color = true;

btn.addEventListener("click", function () {
  if (initial_color) {
    btn.style.backgroundColor = "rgb(226, 155, 23)";
    initial_color = false;
  } else {
    btn.style.backgroundColor = " #7A96FF";
    initial_color = true;
  }
});
const service = document.querySelector(".services"); //Récupération de de la classe serviceq
// Création de la nouvelle section à injecter
const new_section = document.createElement("section");
new_section.className = "injected_section";
// Création d'une div avec la classe container et l'injecter dans new_section
const container = document.createElement("div");
container.className = "container";
new_section.appendChild(container);
// Création d'une div avec la classe new_section_content et l'injecter dans container
const new_section_content = document.createElement("div");
new_section_content.className = "new_section_content";
container.appendChild(new_section_content);
new_section_content.innerHTML +=
  "<h2> Bravo! je suis la section injectée.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.<p><button>Cliquez-ici</button>";
// injection de de la section avant la section services
service.insertAdjacentElement("beforebegin", new_section);

const menu_hidden = document.querySelector(".menu_hidden");
const header_icon_menu = document.querySelector(".header_icon_menu");
header_icon_menu.addEventListener("click", function () {
  menu_hidden.classList.toggle("menu_hidden");
}); */

// Zoom après click sur les services
const full_name = document.getElementById("name");
const email = document.getElementById("email");
/* full_name.addEventListener("keydown", function (event) {
  console.log(event.target.value);
}); */
const zoom = document.querySelectorAll(".services_card_item");
zoom.forEach((element, index) => {
  element.addEventListener("click", function () {
    zoom.forEach((item, i) => {
      if (index != i) {
        item.classList.toggle("active", false);
      }
    });
    element.classList.toggle("active");
  });
});

// rendre les champs obligatoire noms et pénoms, E-mail et objet obligatoir

const form = document.querySelector(".form");
const username = document.getElementById("name");
const e_mail = document.getElementById("email");
const tel = document.getElementById("tel");
const error_message = document.querySelectorAll(".error_message");

form_sent = document.querySelector(".form_sent");
// liste des erreurs dans le champ nom et prénom

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form_validate = true;
  // gestion des erreurs dans le champ nom et prénoms
  if (username.value == "") {
    error_message[0].textContent =
      "Champ obligatoire, Veuillez saisir votre nom et prenoms";
    form_validate = false;
  } else {
    const letters_only = /^[a-zA-Zà-ÿ\s]+$/;
    if (letters_only.test(username.value)) {
      error_message[0].textContent = "";
    } else {
      error_message[0].textContent =
        "ce champ ne peut contenir autres caractères que des lettres";
      form_validate = false;
    }
  }
  // gestion des erreurs dans le champ e_mail

  if (e_mail.value == "") {
    error_message[1].textContent =
      "Champ obligatoire, Veuillez saisir votre E-mail";
    form_validate = false;
  } else {
    const type_e_mail = /^[a-zA-Z0-9]+@[a-z]+\.+[a-z]+$/;
    if (type_e_mail.test(e_mail.value)) {
      error_message[1].textContent = "";
    } else {
      error_message[1].textContent =
        "Veuillez entrer un E-mail valide(nom_utilisateur@domaine.extension).";
      form_validate = false;
    }
  }
  // gestion des erreurs dans le champ Téléphone
  if (tel.value == "") {
    error_message[2].textContent =
      "Champ obligatoire, Veuillez saisir votre numéro de téléphone";
    form_validate = false;
  } else {
    const number_only = /^[0-9]+$/;
    if (
      !number_only.test(tel.value) ||
      tel.value.length < 10 ||
      tel.value.length > 10
    ) {
      error_message[2].textContent =
        "ce champ ne peut contenir obligatoirement 10 chiffres";
      form_validate = false;
    } else {
      error_message[2].textContent = "";
    }
  }
  if (form_validate) {
    form_sent.style.display = "block";
    setTimeout(function () {
      form_sent.style.display = "none";
    }, 2000);
    form.reset();
  }
});
