const envelope = document.getElementById("envelope");
const openingScreen = document.getElementById("openingScreen");
const birthdaySite = document.getElementById("birthdaySite");

if (envelope && openingScreen && birthdaySite) {
    let opened = false;

    envelope.addEventListener("click", () => {
        if (opened) return;

        opened = true;

        envelope.classList.add("open");

        setTimeout(() => {
            birthdaySite.classList.add("visible");
        }, 900);

        setTimeout(() => {
            openingScreen.classList.add("hidden");

            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        }, 1900);
    });
}

