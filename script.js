var OsadzenieTresci = function (REPLY) { $('body > .strona').html(REPLY); }

$(document).ready(function() {
	$.ajax({
		dataType: "html",
		url: `strony/glowna.html`,
		success: OsadzenieTresci
	});
});

var ajaxPrzejdzDo = function (nazwaPliku) {
	$.ajax({
		dataType: "html",
		url: `strony/${nazwaPliku}`,
		success: OsadzenieTresci
	});

	return true;
}
