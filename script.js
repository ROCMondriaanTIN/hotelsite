        // Language toggle function
        function toggleLanguage() {
            const dutchTexts = document.querySelectorAll('.dutch');
            const englishTexts = document.querySelectorAll('.english');
            const button = document.querySelector('.lang-toggle');

            // Toggle display for Dutch and English
            dutchTexts.forEach(element => element.style.display = element.style.display === 'none' ? 'block' : 'none');
            englishTexts.forEach(element => element.style.display = element.style.display === 'none' ? 'block' : 'none');
             
            // Update button text
            button.innerText = button.innerText.includes("English") ? "Switch to Dutch" : "Switch to English";
        }

        // Initialize Dutch as visible, English as hidden
        document.querySelectorAll('.dutch').forEach(element => element.style.display = 'block');
        document.querySelectorAll('.english').forEach(element => element.style.display = 'none');