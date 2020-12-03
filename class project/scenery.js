
$(document).ready(function() {
    $("ul a").each(function (){
        $(this).click(function(evt){
            $("#good").attr("src", $(this).attr("href"));
            evt.preventDefault();
        });
    });
});
