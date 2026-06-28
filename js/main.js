// Remove no-js class immediately when external script executes
document.documentElement.classList.remove("no-js");

document.addEventListener("DOMContentLoaded", function () {
  // Restore obfuscated email links
  const emailLinks = document.querySelectorAll(".email-link");
  emailLinks.forEach(function (link) {
    let user = link.getAttribute("data-user");
    const domain = link.getAttribute("data-domain");
    if (user && domain) {
      if (user === "void") {
        user = "mail";
      }
      link.href = "mailto:" + user + "@" + domain;
    }
  });
});
