document.addEventListener("DOMContentLoaded", () => {
    const fortuneContainer = document.getElementById("fortune-container");
    const generateBtn = document.getElementById("generate-btn");
  
    generateBtn.addEventListener("click", () => {
        fetch('/api/fortunes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd sieci!');
                }
                return response.json();
            })
            .then(data => {
                console.log('Otrzymane dane:', data);
                const fortune = data.fortune;
                fortuneContainer.innerText = fortune;
            })
            .catch(error => {
                console.error('Wystąpił błąd:', error.message);
                fortuneContainer.innerText = 'Wystąpił błąd. Spróbuj ponownie później.';
            });
    });
  });
  