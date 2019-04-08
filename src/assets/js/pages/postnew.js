import $ from 'jquery';
window.jQuery = $;

$(document).ready(function() {
    for (let i=1;i<=5;i++){
        $(document).on('change','#pic-'+i , function() {
            var input = this;
            var url = $(this).val();
            var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
            if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg"))  {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#thumbnail-'+i).attr('style', 'background-image: url('+e.target.result+')');
                }
                reader.readAsDataURL(input.files[0]);
            }
            else{
                $('#thumbnail-'+i).attr('style', '');
            }
        });
        $(document).on('click','#pic-'+i+'-remove', function() {
            $('#pic-'+i).val('');
            $('#thumbnail-'+i).attr('style', '');
        })
    }
})