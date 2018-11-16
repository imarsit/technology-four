
includeScript('../public/javascripts/jquery.fullPage.min.js');
includeScript('../public/javascripts/jquery.SuperSlide.2.1.1.js');
includeScript('../public/javascripts/jquery.form.js');
includeScript('../public/javascripts/easing.js');
includeScript('../public/javascripts/form.js');
includeScript('../public/javascripts/fun.js');
includeScript('../public/javascripts/js.js');
includeScript('../public/javascripts/layer.js');
includeScript('../public/javascripts/slick.js');






function includeScript(url) {
	document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
	return false;
}