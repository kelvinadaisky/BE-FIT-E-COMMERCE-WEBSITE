let learnMoreBtn = document.querySelector('.about .btn');
let paragraph = document.querySelector('.about p');

learnMoreBtn.addEventListener('click', () => {
    let kaynakcaLinks = [
        "https://www.pngwing.com/en/free-png-nvpew",
        "https://www.pngwing.com/en/free-png-sfhwe",
        "https://www.pngwing.com/en/free-png-nzlfn",
        "https://www.pngwing.com/en/free-png-pfzyd",
        "https://www.pngwing.com/en/free-png-tseqt",
        "https://www.pngwing.com/en/free-png-yxpds",
        "https://www.pngwing.com/en/free-png-nvzwv",
        "https://www.pngwing.com/en/free-png-ptgjm"
    ];

    let additionalText = "\n\nKaynakça:\n";
    kaynakcaLinks.forEach((link, index) => {
        additionalText += `<span style="color: blue;">${index + 1}. ${link}</span>\n`;
    });

    paragraph.innerHTML += additionalText;

    learnMoreBtn.remove();
});
