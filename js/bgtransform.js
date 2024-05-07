  function transformBg() {
    const newDaySun = toDaySun.toString().slice(16,18);
    const imgBack = document.querySelectorAll("div.main");
    for (let element of imgBack) {
        if ( 0 <= toDaySun < 6) {
            element.classList.toggle("transformedDawn");
        }
        else if (6 <= toDaySun < 11) {
            element.classList.toggle("transformedNoon");
        }
        else if (11 <= toDaySun < 18) {
            element.classList.toggle("transformedDusk");
        }
        else if (18 <= toDaySun <= 23) {
            element.classList.toggle("transformedDusk");
        }
    }
}
transformBg();