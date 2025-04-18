document.querySelectorAll('.nav-item button').forEach(button => {
    button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.nav-item button').forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Animate all country items
        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            // Remove any existing animation class
            item.classList.remove('animate-up');

            // Trigger reflow to restart animation
            void item.offsetWidth;

            // Add the animation class
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-up');
        });
    });
});