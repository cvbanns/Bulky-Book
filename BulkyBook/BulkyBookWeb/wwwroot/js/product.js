var dataTable;

$(document).ready(function () {
    loadDatatable();
    $('#myTable').DataTable();
});

function loadDatatable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url":"/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "150%" },
            { "data": "isbn", "width": "150%" },
            { "data": "price", "width": "150%" },
            { "data": "author", "width": "150%" },
            { "data": "category", "width": "150%" },


            ]
        });

}