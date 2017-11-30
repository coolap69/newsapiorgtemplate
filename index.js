/*global $ APIKEY p*/
$(document).ready(function() {
    $.ajax({
            // method: "GET ",
            url: "https://newsapi.org/v2/sources",
            data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
            success: function(data) {
                if(data.status === "ok") {
                    console.log(data)
                    for (var i = 0; i < data.sources.length; i++) {
                        var source = document.createElement("OPTION");
                        source.setAttribute("value", data.sources[i].id)
                        source.innerHTML = data.sources[i].name;
                        document.getElementById("selection").appendChild(source)
                    
                    }
            
                }
            }
     
        })
   
        // .done(function(data) {
        //     console.log(data);
        //     console.log(data.status)
        // });
        
        $('#source').submit( function(event) {
            event.preventDefault();
            // alert(document.getElementById("selection").value)
            
            $.ajax({
                
                method: "GET",
                url: "https://newsapi.org/v2/top-headlines",
                data: {sources: "bbc-news", apiKey: APIKEY },
                success: function(data) {
                if(data.status === "ok") {
                    console.log(data)
                    
                    for (var i = 0; i < data.articles.length; i++) {
                        var headline = document.createElement(p);
                        
                        headline.innerHTML = data.articles[i].title;
                        document.getElementById("buss").appendChild(headline)
                    }
                }
                 }
            })
        });
})