<script>
    const backToTopButton = document.querySelector('a[href="#inicio"]');
    
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
</script>
