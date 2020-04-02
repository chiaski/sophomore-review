$(document).ready(function() {
        var titles=['Chia Amisola','is a CS and Art','student always exploring', 'the creative potential', 'of the web'];

        setInterval(function()
        {     
              $(document).attr('title', titles[0]);
              titles.push(titles.shift());
        },
        2000);

    });


$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});
