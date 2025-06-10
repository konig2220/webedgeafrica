// Tabs pour services
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tab = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tc => {
            tc.classList.remove('active');
            if(tc.id === tab) tc.classList.add('active');
        });
    });
});

// Confirmation formulaire
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    this.reset();
});