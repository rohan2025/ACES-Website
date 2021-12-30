var x = setInterval(function() {
    var tgt = "Jan 30, 2022 21:00:00";
    var count = new Date(tgt).getTime();
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(d % (1000 * 60) / (1000));

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (d <= 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "Event Over";
    }
}, 1000);

var y = setInterval(function() {
    var tgt = "Jan 29, 2022 10:00:00";
    var count = new Date(tgt).getTime();
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(d % (1000 * 60) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (d <= 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "Event Over";
    }
}, 1000);

var z = setInterval(function() {
    var tgt = "Feb 2, 2022 10:00:00";
    var count = new Date(tgt).getTime();
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(d % (1000 * 60) / (1000));

    document.getElementById("day3").innerHTML = days;
    document.getElementById("hour3").innerHTML = hours;
    document.getElementById("minute3").innerHTML = minutes;
    document.getElementById("second3").innerHTML = seconds;

    if (d <= 0) {
        clearInterval(x);
        document.getElementById("message").innerHTML = "Event Over";
    }
}, 1000);
