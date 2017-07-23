$(document).ready(function () {
    var lightLink = "http://158.108.165.223/data/chat/ceedlerlight/";
    var airLink = "http://158.108.165.223/data/chat/ceedlerair/";
    
    setInterval(function () {
        //light
        $.ajax({
            url: lightLink
        }).done(function (data) {
            console.log(data);
        }).fail(function () {
            console.error("fail to get light data");
        })

        //air
        $.ajax({
            url: airLink
        }).done(function (data) {
            console.log(data);
        }).fail(function () {
            console.error("fail to get air data");
        })

        //door
        $.ajax({
            url: airLink
        }).done(function (data) {
            console.log(data);
        }).fail(function () {
            console.error("fail to get air data");
        })
    }, 1000);



    // $('#send').click(function (data) {
    //     send();
    // });
});