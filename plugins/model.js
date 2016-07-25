ice.addTaste("model", {
	"input" : function() {
		var model = '[' + ice.prefix + '-model=' + $(this).attr('[' + ice.prefix + '-model]') + '"]';
		$(model).html($(this).val());
		$(model).val($(this).val());
	}
});
