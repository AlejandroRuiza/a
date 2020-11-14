$(document).ready(function() {
    $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
                text: "Pregunta",
                key: "Pregunta"
            },
            {
                text: "Tipo De Respuesta",
                key: "Type"
            },
            {
                text: "Respuesta",
                key: "Respuesta"
            }
        ],

        //carga de datos
        data: [],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Agregar" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-light" />',
            deleteButton: '<input type="button" value="Eliminar" class="btn btn-light" />',
            editButton: '<input type="button" value="Editar" class="btn btn-light" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-light" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function(columnKey) {
            if (columnKey == "Type") {
                return '<select class="form-control select"><option value="numOp">Numerica</option><option value="textoOp">Texto</option></select>'
            }
            if (columnKey == "Pregunta") {
                return '<input type="text" class="form-control" />';
            }
            return '<input type="number" class="form-control tex"/>'

        }

    });

    $(".select").change(function(evt) {
        //console.log($(evt.target).val())
        console.log($(".tex").attr('type'));

        if ($(".select").attr('value') == "numOp") {
            $(".tex").prop('type', 'number');
        } else {
            $(".tex").prop('type', 'text');
        }
    });
});