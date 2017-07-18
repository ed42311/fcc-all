(function(){
	$(document).ready(function() {
		var searchInput = $('#search-input');
		var searchBox = $('#search-box');

		searchInput.keypress(function(event) {
			var searchVal = searchInput.val();
			var htmlReq = "https://en.wikipedia.org/w/api.php?action=query&format=json" + 
										"&generator=allpages&inprop=url&gaplimit=3&gapfrom=" + searchVal;

			if(event.which == 13) {
				event.preventDefault();
				$.ajax({
          type: "GET",
          url: htmlReq,
          dataType: "jsonp",
          success: function(data) {
          	$.each(data.query.pages, function(v, i) {
          		var listHtml = '<li id="page-' + this.pageid + '"><a href>' + this.title + '</a></li>';
          		searchBox.append(listHtml);
          	})
          	} 
        });
			};
		});

		$("#btn-random").on("click", function(){
			location.href = "https://en.wikipedia.org/wiki/Special:Random";
		});

	});
})();

