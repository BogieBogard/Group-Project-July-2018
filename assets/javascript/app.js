//what user is searching for in Rovi
var roviQ;
var roviAPIKey = "cckmmwwn55kv5qkfy948z5fe";
var roviSecret = "35e7cff231d0239b8addea47094ba505";
var sgQ;
var sgID = "MTIzMDQxNjh8MTUzMTg3OTg5My43Ng";
var sgSecret = "97e028cca25f9000d81111771fd84a89bef791d0675c8be06d6d50b4547e3096";
var ip;
var gnQ;
var gnAPIKey = "mhptv3trpfapay59nwzajpmu";
// Other available gnAPIKeys
// 1. pka4bvff8kt2ru6nsny8p3md
// 2. mhptv3trpfapay59nwzajpmu
// 3. vbwkapt65qwb44jjw5vdc98h

// Gracenote site to request API keys: http://developer.tmsapi.com/apps/mykeys
// var zip;

// $("#roviSubmit").on("click", function () {
//     event.preventDefault();
//     roviQ = $("#roviInput").val().trim();
//     console.log("this is the rovi query: " + roviQ);
//     var roviQueryURL = `https://api.rovicorp.com/search/v2.1/video/search?entitytype=onetimeonly&query=${roviQ}&rep=1&size=20&offset=0&language=en&country=US&format=json&apikey=${roviAPIKey}&sig=${roviSecret}`;
//     $.get(roviQueryURL).then(function (roviResponse) {
//         console.log(roviResponse);
//     });
// });

// $("#sgSubmit").on("click", function () {
//     event.preventDefault();
//     sgQ = $("#sgInput").val().trim();
//     console.log("this is the seat geek query: " + sgQ);
//     var sgQueryURL = `https://api.seatgeek.com/2/events?client_id=${sgID}&client_secret=${sgSecret}&geoip=${ip}`;
//     $.get(sgQueryURL).then(function (sgResponse) {
//         console.log(sgResponse);
//     });

// });


// // the rest of this document's code is separated between 1. the testing region and 2. the bootstrap template region
// // 1. Testing region
// // get user's IP address
// $.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
//     console.log(JSON.stringify(data, null, 2));
//     ip = data.ip
//     console.log(ip);
//     zip = parseInt(data.postal_code);
//     console.log("this is the zip: " + zip);
// });
// //code to format the data and time to ISO 8601 - This is for ISSUE #15
// var dateISO = new Date(moment().utcOffset(-8).format("YYYY-MM-DDTHH:mm"));
// var gnDate = encodeURIComponent(dateISO.toISOString().slice(0, 16) + "Z");
// console.log("this is the encoded grace note date", gnDate);

// $("#gnMovies").on("click", function () {
//     event.preventDefault();
//     var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note Movie Showtime query: " + gnMovieQueryURL);
//     $.get(gnMovieQueryURL).then(function (gnMovieResponse) {
//         console.log(gnMovieResponse);
//         var results = gnMovieResponse;
//         for (var i = 0; i < 4; i++) {
//             $("#apiFeedback").append(`<div>Title: ${results[i].title}<br>Description: ${results[i].shortDescription}<br>Next Showtime: ${results[i].showtimes[i].dateTime}<br>Showing at: ${results[i].showtimes[i].theatre.name}<div>`);
//         }

//         //notes on movies
//         //need to figure out how to send a radius or even change locale if you don't want it to look up a movie from where you are at that time
//         //need to figure out what the output should look like
//     });
// });

// $("#gnTV").on("click", function () {
//     event.preventDefault();
//     var gnTVQueryURL = `https://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note Movie Showtime query: " + gnTVQueryURL);
//     $.get(gnTVQueryURL).then(function (gnTVResponse) {
//         console.log(gnTVResponse);
//         //notes on tv
//         //need to figure out how to get line ups customized to the user. There should also be a way to send in a search term to narrow the search. Right now all lineups are against line up id USA-TX42500-X
//         //need to figure out what the output should look like
//     });
// });

// $("#gnSports").on("click", function () {
//     event.preventDefault();
//     var gnSportsQueryURL = `https://data.tmsapi.com/v1.1/sports/all/events/airings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what sports are on TV query: " + gnSportsQueryURL);
//     $.get(gnSportsQueryURL).then(function (gnSportsResponse) {
//         console.log(gnSportsResponse);
//         //notes on Sports
//         //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
//         //need to figure out what the output should look like
//     });
// });

// $("#gnTVMovies").on("click", function () {
//     event.preventDefault();
//     var gnTVMoviesQueryURL = `https://data.tmsapi.com/v1.1/movies/airings?lineupId=USA-TX42500-X&startDateTime=${gnDate}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what movies are on TV query: " + gnTVMoviesQueryURL);
//     $.get(gnTVMoviesQueryURL).then(function (gnTVMoviesResponse) {
//         console.log(gnTVMoviesResponse);
//         //notes on Movies are on TV
//         //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
//         //need to figure out what the output should look like
//     });
// });
// //this is to get the Line up ID passed dynamically
// $("#gnLineup").on("click", function () {
//     event.preventDefault();
//     var gnLineupQueryURL = `http://data.tmsapi.com/v1.1/lineups?country=USA&postalCode=${zip}&api_key=${gnAPIKey}`;
//     console.log("This is the grace note what movies are on TV query: " + gnLineupQueryURL);
//     $.get(gnLineupQueryURL).then(function (gnLineupResponse) {
//         console.log(gnLineupResponse);

//     });
// });

//2. Bootstrap Template Region
//get user's IP address
$.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
    ip = data.ip
    zip = parseInt(data.postal_code);
    console.log("this is the zip: " + zip);
});
//code to format the data and time to ISO 8601 - This is for ISSUE #15
var dateISO = new Date(moment().utcOffset(-8).format("YYYY-MM-DDTHH:mm"));
var gnDate = encodeURIComponent(dateISO.toISOString().slice(0, 16) + "Z");
console.log("this is the encoded grace note date", gnDate);

$(document).ready(function () {

    $("#inTheatersNow").on("click", function (event) {
        console.log("Successfully clicked");
        event.preventDefault();
        var gnMovieQueryURL = `https://data.tmsapi.com/v1.1/movies/showings?startDate=${gnDate}&zip=${zip}&api_key=${gnAPIKey}`;
        $.get(gnMovieQueryURL).then(function (gnMovieResponse) {
            console.log(gnMovieResponse);
            var results = gnMovieResponse;
            for (var i = 0; i < 1; i++) {
                $("#displayTitleOne").append(`<div>${results[0].title}<div>`);
                $("#displayDescriptionOne").append(`<div>${results[0].shortDescription}<div>`);
                $("#displayNextShowtimeOne").append(`<div>${results[0].showtimes[0].dateTime}<div>`);
                $("#displayTheaterOne").append(`<div>${results[0].showtimes[0].theatre.name}<div>`);

                // $("#displayTitleTwo").append(`<div>${results[1].title}`);
                // <br>Description: ${results[i].shortDescription}<br>Next Showtime: ${results[i].showtimes[i].dateTime}<br>Showing at: ${results[i].showtimes[i].theatre.name}<div>`);
            }
        });
    });
});
