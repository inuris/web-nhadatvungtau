import $ from 'jquery';
window.jQuery = $;

$(document).ready(function() {
    $('.date-input').fdatepicker({
        format: 'dd-mm-yyyy',
        disableDblClickSelection: true
    });
})