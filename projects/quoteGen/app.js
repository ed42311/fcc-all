(function (){
  function generateTweetBtn(quoteTwt) {
      var link = document.createElement('a');
      link.setAttribute('href', 'https://twitter.com/share');
      link.setAttribute('class', 'twitter-share-button ');
      link.setAttribute('style', 'margin: 0 10px 0 0;');
      link.setAttribute('data-text' , quoteTwt);
      link.setAttribute('data-via' ,'idwardis');
      link.setAttribute('data-size' ,'large');
      $('.internalQuoteBlock').before(link);
      $.getScript('http://platform.twitter.com/widgets.js');
  };

  $(document).ready(function() { 
    $('#quoteBtn').on('click', function(){ 
      $('iframe').remove(); 
      $("script[src='http://platform.twitter.com/widgets.js']").remove()
      var $author = $(".author"),
          $quote = $(".quote");
      $.ajax({
        dataType: "jsonp",
        url: "http://quotes.stormconsultancy.co.uk/random.json?callback=my_method"
      }).done(function( data ) { 
        $author.text(data.author);
        $quote.text(data.quote);
        generateTweetBtn(data.quote);
      }); 
    });
  });
})();

