export function listenHeaderHandler() {
    const dropDownUserMenuElement = document.getElementById("dropDownUserMenu");
    const buttonDropDownElement = document.getElementById("buttonDropDown");
    
    buttonDropDownElement.addEventListener('click', toggleUserMenu);
    buttonDropDownElement.addEventListener('blur', closeUserMenu);
    
    function toggleUserMenu() {
        if (dropDownUserMenuElement.classList.contains('visible')) {
            closeUserMenu();
        } else {
            openUserMenu();
        }
    }
    
    function openUserMenu() {
        dropDownUserMenuElement.classList.add("visible");
        dropDownUserMenuElement.classList.remove("hidden");
    
        buttonDropDownElement.classList.add("arrowUp");
    }
    
    function closeUserMenu() {
        dropDownUserMenuElement.classList.add("hidden");
        dropDownUserMenuElement.classList.remove("visible");
    
        buttonDropDownElement.classList.remove("arrowUp");
    }
}