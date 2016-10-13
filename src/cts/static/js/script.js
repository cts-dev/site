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

$(function() {
	/**
	 * Contact Form
	 */
	var requestInfo = $('form#cta-form');
	var required = [
		'#business-name',
		'#contact-name'
	]

	requestInfo.find('input').on('click', function() {
		$(this).css('border', 'none');
	})

	requestInfo.find('button').on('click', function(e) {
		e.preventDefault();
		var errors = false;

		for (var i = 0; i < required.length; i++) {
			var field = requestInfo.find(required[i]);

			if (!field[0].value) {
				errors = true;
				field.css('border', '1px solid red');
			}
		}

		if (errors === false) {
			var thankYou = $('<div>');
			var thankYouMsg = $('<p>');
			var thankYouOverlay = $('<div>');
			thankYou.addClass('cta-form-thank-you');
			thankYouOverlay.addClass('cta-form-thank-you-overlay');
			thankYouMsg.html('<span class="title">Thank you</span> With so many vendors that you can choose from, we appreciate your time and consideration. Someone will be in contact with you shortly. <span class="continue">click anywhere to continue</span>');
			$(thankYou).append(thankYouMsg);
			$('body').append(thankYou);
			$('body').append(thankYouOverlay);

			setTimeout(function() {
				$('body').on('click', function() {
					thankYou.remove();
					thankYouOverlay.remove();
					requestInfo.submit();
				});
			}, 1000)
		}
	})
})

$(function() {
	$('.maps').click(function () {
	    $('.maps iframe').css("pointer-events", "auto");
	});
})