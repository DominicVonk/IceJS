ice.addTaste("model", "input", function() {
	var model = ice.coneWithTaste('model', $(this).attr([ice.cone, '-model'].join('')));
	$(model).html($(this).val());
	$(model).val($(this).val());
});