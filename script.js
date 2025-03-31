// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const toggleSwitch = document.getElementById('checkbox');
    const bodyElement = document.body; // Get the body element
    const currentTheme = localStorage.getItem('theme'); // Check local storage

    // Apply the saved theme on initial load
    if (currentTheme) {
        // Directly add the class to the body element
        bodyElement.classList.add(currentTheme);

        // Set the toggle state ONLY if the saved theme is dark-mode
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            bodyElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Save theme preference
        } else {
            bodyElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode'); // Save theme preference
        }
    }

    // Listen for change event on the toggle
    // Add a check to ensure toggleSwitch exists before adding listener
    if (toggleSwitch) {
       toggleSwitch.addEventListener('change', switchTheme);
    } else {
        console.error("Theme toggle switch element not found!");
    }

}); // End of DOMContentLoaded listener
