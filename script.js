$("button").on("click", function() {

    var queryString = "string";

    var articleCount = "0";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryString + "&api-key=TgSshzlZduKC829MhCwz8bTzefRkAGGl"

    if(startDate) {
        queryURL = queryURL + "&begin_date="
    }

    if(endDate) {
        queryURL = queryURL + "&end_date="
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

});

function test() {
    var queryString = "string";

    var articleCount = "3"

    var startDate = "2012";

    var endDate = "2016";

    if(startDate != "") {
        queryURL = queryURL + "&begin_date=" + startDate + "0101"
    }

    if(endDate != "") {
        queryURL = queryURL + "&end_date=" + endDate + "1231"
    }

    // for (i = 0; i < articleCount; i++) {
    //     articleCount = 
    // }

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryString + "&api-key=TgSshzlZduKC829MhCwz8bTzefRkAGGl"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    console.log(queryURL);
}

test();