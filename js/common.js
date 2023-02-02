
//------------------------------------------------------------------------------
// HEADER MENU
//------------------------------------------------------------------------------
$('.starter-scroll a, .starter-menu .prevent').on('click', function(e){
	e.preventDefault();
	$(document).off('scroll');
	var anchor = $(this).attr('href');
	$('html, body').stop().animate({ scrollTop: $(anchor).offset().top }, 500, function() {
		window.location.hash = anchor;
	});
});


//------------------------------------------------------------------------------
// SKILLS CHART
//------------------------------------------------------------------------------
$(function() {
    $('.chart').easyPieChart({
        barColor: '#e0e0e2',
        trackColor: 'rgba(0,0,0,0.2)',
        lineWidth: 20,
        lineCap: 'butt',
        scaleColor: false,
        size: 150
    });
});

// barColor: '#513983',
// trackColor: '#181c28',


//------------------------------------------------------------------------------
// PORTFOLIIO
//------------------------------------------------------------------------------
getPortfolio();

function getPortfolio() {
    for (var i = portfolio.length; i>0; i--) {
        var html =
			'<a href="#portfolio">'+
				'<div class="portfolio-item" style="background-image: url(img/portfolio/'+portfolio[i-1].img+'.jpg);" onclick="detailingPortfolio('+(i-1)+');"></div>'+
			'</a>';
        $('.portfolio .content-preview').append(html);
    }

}

function detailingPortfolio(id) {

	$('.portfolio .content-preview a').bind('click', function(e){
		e.preventDefault();
		$(document).off('scroll');
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({ scrollTop: $(anchor).offset().top }, 500, function() {
			window.location.hash = anchor;
		});
	});

	var img          = portfolio[id].img;
	var website      = portfolio[id].website;
	var project      = portfolio[id].project;
	var mirror       = portfolio[id].mirror;
	var github       = portfolio[id].github;
	var organization = portfolio[id].organization;
	var technologies = portfolio[id].technologies;
	var description  = portfolio[id].description;

	var html = '';

	if (website!='') {
		html += '<div class="item-detailing"><span>Сайт: </span><a href="'+website+'" target="_blank">'+website+'</a></div>';
	}
	if (project!=''){
		html += '<div class="item-detailing"><span>Проект: </span>'+project+'</div>';
	}
	if (mirror!=''){
		html += '<div class="item-detailing"><span>Зеркало: </span><a href="'+mirror+'" target="_blank">Ссылка</a></div>';
	}
	if (github!=''){
		html += '<div class="item-detailing"><span>GitHub: </span><a href="'+github+'" target="_blank">Ссылка</a></div>';
	}
	if (organization!='') {
		html += '<div class="item-detailing"><span>Организация: </span>'+organization+'</div>';
	}
	if (technologies!='') {
		html += '<div class="item-detailing"><span>Технологии: </span>'+technologies+'</div>';
	}
	if (description!='') {
		html += '<div class="item-detailing"><span>Описание: </span>'+description+'</div>';
	}

	$('.portfolio .content-detailing').css('display', 'flex');
	$('.portfolio .content-detailing .picture').css('background-image', 'url(img/portfolio/'+img+'.jpg)');
	$('.portfolio .content-detailing .wrapper-description').html(html);
}

function showPortfolio() {
	$('.portfolio .content-detailing').css('display', 'none');
}
