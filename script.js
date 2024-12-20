// Поиск нейросетей по ключевым словам
function searchNetworks() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
