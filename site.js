(function () {
    var dropdown = document.querySelector('.nav-dropdown');
    if (!dropdown) return;

    document.addEventListener('click', function (e) {
        if (!dropdown.open) return;
        if (dropdown.contains(e.target)) return;
        dropdown.removeAttribute('open');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && dropdown.open) {
            dropdown.removeAttribute('open');
        }
    });
})();
