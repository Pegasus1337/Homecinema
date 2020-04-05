$(document).ready(function() {               
    $(document).ready(function(event){ 
        $.getJSON('https://api.themoviedb.org/3/trending/movie/day?api_key=35990b9560c0e30882ad19e77f0fe8bc' , function(data) { 
            
            $('#box1 h4').html(data.results[0].title+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') ;
            $('#box1 img').attr("src","http://image.tmdb.org/t/p/w200"+data.results[0].poster_path) ;
            $('#box1 a').attr("href",'movies.html?='+data.results[0].id) ;

            $('#box2 h4').html(data.results[1].title+' - 2020 Version') ;
            $('#box2 img').attr("src","http://image.tmdb.org/t/p/w200"+data.results[1].poster_path) ;
            $('#box2 a').attr("href",'movies.html?='+data.results[1].id) ;

            $('#box3 h4').text(data.results[2].title) ;
            $('#box3 img').attr("src","http://image.tmdb.org/t/p/w200"+data.results[2].poster_path) ;
            $('#box3 a').attr("href",'movies.html?='+data.results[2].id) ;

            $('#box4 h4').text(data.results[3].title) ;
            $('#box4 img').attr("src","http://image.tmdb.org/t/p/w200"+data.results[3].poster_path) ;
            $('#box4 a').attr("href",'movies.html?='+data.results[3].id) ;
        }); 
    }); 
}); 