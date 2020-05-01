function toggleUserMenu() {
    const userMenu = document.getElementById("dropDownUserMenu");

    if (userMenu.classList.contains('visible')) {
        document.getElementById("dropDownUserMenu").classList.add("hidden");
        document.getElementById("dropDownUserMenu").classList.remove("visible");
    } else {
        document.getElementById("dropDownUserMenu").classList.add("visible");
        document.getElementById("dropDownUserMenu").classList.remove("hidden");
    }

    document.getElementById("buttonDropDown").classList.toggle("arrowUp");
}

