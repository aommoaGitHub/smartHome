$(document).ready(function () {
    var lightLink = "http://158.108.165.223/data/chat/ceedlerlight/";
    var airLink = "http://158.108.165.223/data/chat/ceedlerair/";
    var doorLink = "http://158.108.165.223/data/chat/ceedlerdoor/";
    var peopleLink = "http://158.108.165.223/data/chat/ceedlerpeople/";
    var tempLink = "http://158.108.165.223/data/chat/ceedlertemp/";
    var light = "light close";
    var air = "air close";
    var door = "door close";
    var people = "0";
    var temp = "26";

    setInterval(function () {
        //light
        $.ajax({
            url: lightLink
        }).done(function (data) {
            light = data;
            console.log(data);
        }).fail(function () {
            console.error("fail to get light data");
        })

        //air
        $.ajax({
            url: airLink
        }).done(function (data) {
            air = data;
            console.log(data);
        }).fail(function () {
            console.error("fail to get air data");
        })

        //door
        $.ajax({
            url: doorLink
        }).done(function (data) {
            door = data;
            console.log(data);
        }).fail(function () {
            console.error("fail to get door data");
        })

        //people
        $.ajax({
            url: peopleLink
        }).done(function (data) {
            people = data;
            console.log(data);
        }).fail(function () {
            console.error("fail to get people data");
        })

        //temperature
        $.ajax({
            url: tempLink
        }).done(function (data) {
            temp = data;
            console.log(data + " degree");
        }).fail(function () {
            console.error("fail to get temperature data");
        })
    }, 1000);

    //light
    $('#light').click(function () {
        if (light === "light open")
            light = "light close";
        else
            light = "light open";
        $.ajax({
            url: lightLink + "set/" + light
        }).done(function () {
            console.log(light + "Successful");
            //change pic and background
        }).fail(function () {
            console.error(light + "Fail");
        });
    });

    //air
    $('#air').click(function () {
        if (air === "air open")
            air = "air close";
        else
            air = "air open";
        $.ajax({
            url: airLink + "set/" + air
        }).done(function () {
            console.log(air + "Successful");
            //change pic
        }).fail(function () {
            console.error(air + "Fail");
        });
    });

    //door
    $('#door').click(function () {
        if (door === "door open")
            door = "door close";
        else
            door = "door open";
        $.ajax({
            url: doorLink + "set/" + door
        }).done(function () {
            console.log(door + "Successful");
            //open the door, may be change the picture
        }).fail(function () {
            console.error(door + "Fail");
        });
    });

    //people
    $('#people').click(function () {
        $.ajax({
            url: peopleLink + "set/" + people
        }).done(function () {
            console.log(people + "people Successful");
            //change number
        }).fail(function () {
            console.error(people + "people Fail");
        });
    });

    //temp
    $('#temp').click(function () {
        $.ajax({
            url: tempLink + "set/" + temp
        }).done(function () {
            console.log(temp + "degree Successful");
            //update the progress bar
        }).fail(function () {
            console.error(temp + "degree Fail");
        });
    });
});