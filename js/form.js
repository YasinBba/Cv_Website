document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS (Replace with your direct API key usually, but best practice is secure. For client side strictly, use public key)
    // NOTE: User needs to put their own PUBLIC KEY here
    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = contactForm ? contactForm.querySelector('button') : null;
    const btnText = document.getElementById('btn-text');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
                if (btnText) btnText.textContent = 'Gönderiliyor...';
            }

            // Generate a random number for ID to view request
            const contactNumber = Math.random() * 100000 | 0;

            // These IDs from EmailJS dashboard
            // service_id, template_id, template_params
            // Since we don't have real keys, we simulate success for the UI demo

            /* 
            // Real implementation:
            emailjs.sendForm('service_id', 'template_id', this)
                .then(function() {
                     showSuccess();
                }, function(error) {
                     showError();
                });
            */

            // SIMULATED SUCCESS (for demo purposes)
            setTimeout(() => {
                showSuccess();
            }, 1500);
        });
    }

    function showSuccess() {
        if (formStatus) {
            formStatus.textContent = 'Mesajınız başarıyla gönderildi!';
            formStatus.className = 'mt-4 text-center text-sm text-green-600 font-bold block';
        }
        if (contactForm) contactForm.reset();
        resetBtn();
    }

    function showError() {
        if (formStatus) {
            formStatus.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            formStatus.className = 'mt-4 text-center text-sm text-red-600 font-bold block';
        }
        resetBtn();
    }

    function resetBtn() {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            if (btnText) btnText.textContent = 'Gönder';
        }
    }
});
