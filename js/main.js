var $window = $(window);
$window.trigger('scroll');
$window.on('scroll resize', switchMenuStyle);

function switchMenuStyle() {
	var $welcome_element = $("#we-are-elsewhere");
	//in_view_port = isInViewport(logo_element);
	if (isInViewport($welcome_element)) {
		$("#logo-menu-container").removeClass('menu-main-sections');
		$("#logo-menu-container").addClass('menu-front-page');
	}
	else {
		$("#logo-menu-container").removeClass('menu-front-page');
		$("#logo-menu-container").addClass('menu-main-sections');		
	}
} 

function isInViewport ($element) {
	current_main_view = mainViewPosition();
	element_position = currentElementPosition($element)
	console.log('MV position');
	console.log(current_main_view)
	//check to see if this current container is within viewport
	if ((element_position.bottom >= current_main_view.top) &&
	    (element_position.top <= current_main_view.bottom)) {
		return true
	} else {  
	  	return false;
	}	
}

function mainViewPosition() {
	current_menu = menuPosition()
	current_window = currentWindowPosition()

	console.log('menu position');
	console.log(current_menu)
	console.log('window position');
	console.log(current_window)

	mv_height = current_window.height + current_menu.height;
	mv_top = current_window.top + current_menu.height
	return {
		height : mv_height,
		top : mv_top,
		bottom : (mv_top + mv_height)
	};	
}


function menuPosition() {
	e_height = $("#logo-menu-container").outerHeight();
	e_top = $("#logo-menu-container").offset().top
	return {
		height : e_height,
		top : e_top,
		bottom : (e_top + e_height)
	};	
}

function currentElementPosition($element) {
	e_height = $element.outerHeight();
	e_top = $element.offset().top
	return {
		height : e_height,
		top : e_top,
		bottom : (e_top + e_height)
	};
}

function currentWindowPosition () {
	w_height = $window.height()
	w_top = $window.scrollTop()
	return {
			height : w_height, 
			top : w_top, 
			bottom : (w_top + w_height)
		};
}


