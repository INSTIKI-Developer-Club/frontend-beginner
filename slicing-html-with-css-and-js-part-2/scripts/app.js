/**
 * Gunakan titik ( . ) jika ingin menargetkan class dari element nya
 * Gunakan hastag ( # ) jika ingin menargetkan id dari element nya
 */

const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenus = document.querySelector(".navigation__menus");

const elementProjectComplete = document.querySelector(
  "#value-project-complete"
);

const elementYearExperience = document.querySelector("#value-year-experience");

/**
 * Value project complete dan year of experience
 */

const containerValue = {
  projectComplete: 430,
  yearExperience: "30+",
};

/**
 * Value menus
 * Kita buat array of object untuk menampung value dari menus
 */

const navigationMenus = [
  {
    title: "Work",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Service",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
];

/**
 *
 * Cara baca:
 *
 * Array of object navigationMenus kita looping menggunakan forEach
 * Lalu kita buat element anchor (Tag A nya)
 * berikan class "navigation__link" dengan menggunakan classList.add
 * berikan href dengan value dari menu.link
 * berikan text dengan value dari menu.title
 * lalu append ke elementNavigationMenus (Element DIV nya) `<div class="navigation__menus"></div>`
 *  */

navigationMenus.forEach((menu) => {
  const elementAchor = document.createElement("a");
  elementAchor.classList.add("navigation__link");
  elementAchor.href = menu.link;
  elementAchor.textContent = menu.title;

  elementNavigationMenus.append(elementAchor);
});

/**
 * Untuk menampilkan sidebar ketika diklik
 *
 * Cara baca:
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 *
 * Cara baca:
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

/**
 * Inject value baru dari javascript ke element dengan id
 * `value-project-complete`
 *
 * Dan inject value baru dari javascript ke element dengan id
 * `value-year-experience`
 */

elementProjectComplete.append(containerValue.projectComplete /** 420 */);
elementYearExperience.append(containerValue.yearExperience /** 30+ */);
