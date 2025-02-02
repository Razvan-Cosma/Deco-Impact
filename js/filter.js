document.getElementById('all').addEventListener('click', function() {
    filterList('');
});

document.getElementById('amenajari-interioare').addEventListener('click', function() {
    filterList('amenajari-interioare');
});

document.getElementById('finisaje').addEventListener('click', function() {
    filterList('finisaje');
});

document.getElementById('pereti-decorativi').addEventListener('click', function() {
    filterList('pereti-decorativi');
});

document.getElementById('tapet').addEventListener('click', function() {
    filterList('tapet');
});

document.getElementById('parchet').addEventListener('click', function() {
    filterList('parchet');
});

function filterList(filter) {
    const items = document.querySelectorAll('#myList li');
    items.forEach(item => {
        if (filter === '' || item.getAttribute('data-filter') === filter) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}