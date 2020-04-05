var movieId = location.href.split("=")[1].toString() ;
console.log(movieId) ;
var id = $(window.location)[0].href.split("=")[1]  ;
console.log(id) ;



$(document).ready(function() {               
    $(document).ready(function(event){ 
        $.getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key=35990b9560c0e30882ad19e77f0fe8bc&language=en-US' , function(data) { 
            
            $('.movie-title p').text(data.title) ;
            $('.movie-release p').text(data.release_date) ;
            $('.movie-synopsis p').text(data.overview) ;
            $('.movie-title a').attr("href","https://www.imdb.com/title/"+data.imdb_id+"/") ;
            $('.side-image img').attr("src","http://image.tmdb.org/t/p/w200"+data.poster_path) ;
        }); 
    }); 
}); 