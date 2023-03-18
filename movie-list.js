console.log('hello');
const movieList = [];

let tblSetup = {'table-layout': 'fixed', 'width': '75%'};

$('table').css(tblSetup);


$('button').on('click', function(event) {

    event.preventDefault();

    $('.list-item').remove();
    const [name, rating] = $('form input');
    movieList.push({name: name.value, rating: rating.value});

    for( const movie of movieList ) 
	$('#ratings-list')
	.append (`<tr class="list-item"><td>${movie.name}</td><td>${movie.rating}</td><td class="remove">x</td></tr>`);

    $('.remove').on('click' , function(event) {
	$(this).parent().remove();
    });

    
});


