$(function() {
    var input_1 = $('#slider_1');
	var input_2 = $('#slider_2');
	var input_3 = $('#slider_3');
	var input_4 = $('#slider_4');
	var amount_1 = $('#amount_1');
	var amount_2 = $('#amount_2');
	var amount_3 = $('#amount_3');
	var amount_4 = $('#amount_4');
	var sum = Number(input_1.val()) + Number(input_2.val()) + Number(input_3.val());
	input_4.val(100 - sum);

	amount_1.text(input_1.val() + '%');
	input_1.on('input', function (e) {
		var sum = Number(input_1.val()) + Number(input_2.val()) + Number(input_3.val());
		amount_1.text(this.value + '%');
		amount_4.text(100 - sum + '%');
		input_4.val(100 - sum);
		if( sum > 100 ){
			e.target.value = e.target.value - (sum - 100);
			amount_1.text(this.value + '%');
			amount_4.text(0 + '%');
		}
	});
	amount_2.text(input_2.val() + '%');
	input_2.on('input', function (e) {
		var sum = Number(input_1.val()) + Number(input_2.val()) + Number(input_3.val());
		amount_2.text(this.value + '%');
		amount_4.text(100 - sum + '%');
		input_4.val(100 - sum);
		if( sum > 100 ){
			e.target.value = e.target.value - (sum - 100);
			amount_2.text(this.value + '%');
			amount_4.text(0 + '%');
		}
	});
	amount_3.text(input_3.val() + '%');
	input_3.on('input', function (e) {
		var sum = Number(input_1.val()) + Number(input_2.val()) + Number(input_3.val());
		amount_3.text(this.value + '%');
		amount_4.text(100 - sum + '%');
		input_4.val(100 - sum);
		if( sum > 100 ){
			e.target.value = e.target.value - (sum - 100);
			amount_3.text(this.value + '%');
			amount_4.text(0 + '%');
		}
	});
	amount_4.text(100 - sum + '%');
	input_4.on('input', function () {
		amount_4.text(this.value + '%');
	});

});


$(function() {
    $('.details').on('mouseover', function() {
		$('.open_details').addClass("active");
	});
	$('.details').on('mouseout', function() {
		$('.open_details').removeClass("active");

		$('.open_details').on('mouseover', function() {
			$(this).addClass("active");
			$(this).unbind('mouseover');
		});

	});
	$('.open_details').on('mouseleave', function() {
		$(this).removeClass("active");
	});
	$('.fa-times').on('click', function() {
		$('.open_details').removeClass("active");
	});
});