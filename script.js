let themeBtn = document.querySelector("#themeToggle")


function setTheme(theme) {
    if (theme == 'light') {
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
        document.body.classList.remove("light-theme");
        themeBtn.innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
}

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Меняем иконку при переключении темы
    const icon = document.querySelector('.bi1');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
    } else {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');
    }
});
