/* =========================
   CONTACT FORM
========================= */
const form = document.getElementById("contact-form");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwvrMewCswNUWIWRkZnAJGpsuFb_lLxnfVwLYlAMMY5zWuTrJSV_OAmIUfHwbDaxy4a/exec";

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
      .then(() => {
        alert("✅ Thank you! We will contact you soon.");
        form.reset();
      })
      .catch(() => {
        alert("❌ Something went wrong. Please try again!");
      });
  });
}

/* =========================
   SIDEBAR MENU
========================= */
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

function openSidebar() {
  sidebar.classList.add("open");
  overlay.style.display = "block";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.style.display = "none";
}

if (menuBtn) menuBtn.onclick = openSidebar;
if (closeBtn) closeBtn.onclick = closeSidebar;
if (overlay) overlay.onclick = closeSidebar;

/* Close sidebar on link click */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

/* Sub-menu toggle */
document.querySelectorAll(".has-sub > span").forEach(span => {
  span.addEventListener("click", () => {
    span.parentElement.classList.toggle("open");
  });
});

/* ESC key close */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeSidebar();
});

/* =========================
   SLIDERS
========================= */
function nudgeSlider(selector, dir = 1) {
  const el = document.querySelector(selector);
  if (!el) return;
  const card = el.querySelector(".card");
  const step = card
    ? card.getBoundingClientRect().width + 16
    : el.clientWidth * 0.9;
  el.scrollBy({ left: step * dir, behavior: "smooth" });
}

document.querySelectorAll(".slider-btn").forEach(btn => {
  const target = btn.dataset.target;
  btn.onclick = () =>
    nudgeSlider(target, btn.classList.contains("next") ? 1 : -1);
});

/* Keyboard support */
document.querySelectorAll(".slider").forEach(slider => {
  slider.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nudgeSlider("#" + slider.id, 1);
    if (e.key === "ArrowLeft") nudgeSlider("#" + slider.id, -1);
  });
});

/* Drag / Swipe */
document.querySelectorAll(".slider").forEach(slider => {
  let isDown = false, startX, scrollLeft;

  slider.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
    e.preventDefault();
  });

  window.addEventListener("mouseup", () => (isDown = false));

  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    slider.scrollLeft = scrollLeft - (e.pageX - startX) * 1.2;
  });

  let touchStartX = 0, touchScrollLeft = 0;
  slider.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
    touchScrollLeft = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener("touchmove", e => {
    slider.scrollLeft =
      touchScrollLeft - (e.touches[0].clientX - touchStartX) * 1.1;
  }, { passive: true });
});

/* =========================
   BACK TO TOP
========================= */
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (!toTop) return;
  toTop.classList.toggle("show", window.scrollY > 300);
});

/* =========================
   FOOTER YEAR
========================= */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* =========================
   HERO SHINE LOOP
========================= */
setInterval(() => {
  const shine = document.querySelector(".shine");
  if (!shine) return;
  shine.style.animation = "none";
  shine.offsetHeight;
  shine.style.animation = "";
}, 5000);
