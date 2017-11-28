/*global $*/
$(document).ready(function() {
    $.ajax({
            // method: "GET ",
            url: "https://newsapi.org/v2/sources",
            data: { category: "business", country: "us", language: "en"},
            sucesss: function(data) {
                if(data.status == "ok") {
                
                }else {
                    alert(data.status)
                }
            }
        
    })
        // .done(function(data) {
        //     console.log(data);
        //     console.log(data.status)
        // });
})