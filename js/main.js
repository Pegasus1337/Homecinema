$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



  $(document).ready(function() {               
    $("#button").click(function(event){ 
        $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=35990b9560c0e30882ad19e77f0fe8bc&language=en-US&page=1&include_adult=false&query='+ $('#search-input').val() , function(data) { 
            

            for(var i=0 ; i< data.results.length ;i++){
                $('.search-list').append('<a href="movies.html?movieId='+data.results[i].id+'" class="list-group-item list-group-item-action">' +data.results[i].original_title +'</a>');
            }
        }); 
    }); 
}); 