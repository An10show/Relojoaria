document.addEventListener('DOMContentLoaded', () => {
    const watchContainer = document.getElementById('watch-container');

    const watches = [
        { name: "Cronógrafo Clássico de Aço", imageSrc: "watch_1.png", price: "R$ 1.250,00" },
        { name: "Relógio Esportivo Digital Prova D'água", imageSrc: "watch_2.png", price: "R$ 780,00" },
        { name: "Luxo Suíço Automático Ouro", imageSrc: "watch_3.png", price: "R$ 4.990,00" },
        { name: "Minimalista Moderno Urbano", imageSrc: "watch_4.png", price: "R$ 920,00" },
        { name: "Relógio Vintage Dourado Retrô", imageSrc: "watch_5.png", price: "R$ 1.500,00" },
        { name: "Mergulho Profissional 300M", imageSrc: "watch_6.png", price: "R$ 2.300,00" },
        { name: "Piloto Automático Aviação", imageSrc: "watch_7.png", price: "R$ 1.850,00" },
        { name: "Casual Elegante Couro Genuíno", imageSrc: "watch_8.png", price: "R$ 650,00" },
        { name: "Smartwatch Fitness Avançado GPS", imageSrc: "watch_9.png", price: "R$ 1.100,00" },
        { name: "Elegância Feminina Rosé Cristais", imageSrc: "watch_10.png", price: "R$ 1.400,00" }
    ];

    if (watchContainer) {
        watches.forEach(watch => {
            const watchItem = document.createElement('div');
            watchItem.classList.add('watch-item');

            const watchImage = document.createElement('img');
            watchImage.src = watch.imageSrc;
            watchImage.alt = watch.name;
            watchImage.onerror = () => { // Basic error handling for images
                watchImage.alt = "Imagem não disponível";
                watchImage.src = ""; // Clear broken image icon or set a placeholder
            };


            const watchName = document.createElement('h3');
            watchName.textContent = watch.name;

            const watchPrice = document.createElement('p');
            watchPrice.textContent = watch.price;

            watchItem.appendChild(watchImage);
            watchItem.appendChild(watchName);
            watchItem.appendChild(watchPrice);

            watchContainer.appendChild(watchItem);
        });
    } else {
        console.error('Watch container not found!');
    }
});

