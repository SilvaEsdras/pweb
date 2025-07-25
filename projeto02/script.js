function pesquisar() {
    var descricao = document.getElementById('descricao').value;
    alert('Pesquisa por: ' + descricao);
}

document.getElementById('tableSearch').addEventListener('keyup', function () {
    var searchValue = this.value.toLowerCase();
    var rows = document.querySelectorAll('#productTable tr');

    rows.forEach(function (row) {
        var descricao = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (descricao.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.getElementById('recordsPerPage').addEventListener('change', function () {
    var recordsPerPage = this.value;
    alert('Mostrar ' + recordsPerPage + ' registros por página.');
});

function pesquisar() {
    var descricao = document.getElementById('descricao').value;
    alert('Pesquisa por: ' + descricao);
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})