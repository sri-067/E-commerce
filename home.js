// JavaScript to handle dropdown menu interaction
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const content = dropdown.querySelector('.dropdown-content');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            content.classList.toggle('show');
        });

        // Close dropdowns if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });
    });
});
