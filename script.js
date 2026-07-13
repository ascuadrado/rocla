/* ROCLA Collection */

/* Canal de pedidos.
   Cuando las fundadoras confirmen un número de WhatsApp, ponerlo aquí
   con prefijo de país y sin espacios (ej. "34600111222") y todos los
   enlaces "Pedir" pasarán a abrir WhatsApp con el modelo pre-escrito.
   Si se deja vacío, los enlaces llevan al DM de Instagram. */
const WHATSAPP_NUMBER = "";

if (WHATSAPP_NUMBER) {
  document.querySelectorAll(".pedir").forEach((link) => {
    const modelo = link.dataset.modelo || "";
    const text = encodeURIComponent(`Hola! Me interesa el Choker ${modelo}`);
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  });
  document.querySelectorAll(".whatsapp-cta").forEach((cta) => {
    cta.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    cta.textContent = "Escríbenos por WhatsApp";
  });
}

/* Menú móvil */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* cerrar el menú al tocar fuera */
document.addEventListener("click", (e) => {
  if (nav.classList.contains("open") && !nav.contains(e.target) && !navToggle.contains(e.target)) {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* Carrusel (portada) */
const track = document.getElementById("carouselTrack");
if (track) {
  const step = () => track.querySelector(".slide").offsetWidth + 20;
  document.getElementById("carouselPrev").addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
  document.getElementById("carouselNext").addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });
}

/* Lightbox (colección) */
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxClose.focus();
    });
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

/* Año del footer */
document.getElementById("year").textContent = new Date().getFullYear();
