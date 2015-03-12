$(function() {
	/**
	 * Hero section functionality
	 */

	if (window.location.pathname === '/') { 
		var hero = $('section#hero');
		var features = hero.find('div.feature');
		var featureScroll = $('section#hero button.feature-scroll');
		var activeFeature = getActiveFeature();
		var img = activeFeature.attr('data-img');
		var scrollToFeature;

		features.hide();
		activeFeature.fadeIn(500);
		hero.css('background-image', 'url(/static/css/img/' + img + ')');

		featureScroll.hover(function() {
			featureScrollAnimate('active');
		}, function() {
			featureScrollAnimate('idle');
		}).on('click', function() {
			var featureText = $(this).find('span.feature-text');
			var selector = featureText.html().replace(' ', '-').toLowerCase()
			var feature = $('div.feature.'+selector);
			var new_img = feature.attr('data-img');

			hero.css(
				'background-image', 
				'url(/static/css/img/' + new_img + ')'
			);

			getActiveFeature().removeClass('active').hide();
			feature.addClass('active').delay(500).show();
			featureScrollAnimate('active');
		});
	}
	

	function getActiveFeature() {
		var active;

		$.each(features, function() {
			if ($(this).hasClass('active')) {
				active = $(this);
			}
		})

		return active;
	}


	function setScrollerText(pos) {
		var activeIndex;

		for (var i = 0; i < features.length; i++) {			
			if ($(features[i]).hasClass('active')) {
				activeIndex = i;
			}
		}

		if (pos === 'left') {
			if (activeIndex === 0) {
				var target = $(features[features.length-1]);
			} else {
				var target = $(features[activeIndex-1]);
			}
		} else if (pos === 'right') { 
			if (activeIndex === features.length-1) {
				var target = $(features[0]);
			} else {
				var target = $(features[activeIndex+1]);
			}
		}

		return target.attr('data-feature-name');
	}

	function featureScrollAnimate(action) {
		var offset = '10px';

		if (action == 'active') {
			featureScroll.addClass('active');
		} else if (action == 'idle') {
			offset = 0;
			featureScroll.removeClass('active');
		}

		['left', 'right'].forEach(function(pos) {
			var scroller = $('.feature-scroll.scroll-' + pos);
			var arrow = scroller.find('span.glyphicon')
			var move = {'left': {'right': offset}, 'right': {'left': offset}};

			if (action == 'active') {
				scroller.find('span.feature-text')
					.hide()
					.html(setScrollerText(pos))
					.fadeIn(300);
			} else if (action == 'idle') {
				scroller.find('span.feature-text')
					.fadeOut(200)
					.html('');
			}

			arrow.stop(true, true).animate(move[pos], 200);
		});
	}
});

$(function() {
	/**
	 * Bio toggle
	 */
    var teamMembers = $('div.team-member');
    var bios = teamMembers.find('div.bio');

    bios.hide()

    teamMembers.find('button').show().on('click', function() {
        $(this).next().stop(true, true).slideToggle();
    })
})