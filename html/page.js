$(document).ready(function() {
        var titles=['Chia Amisola','is a CS and Art','student always exploring', 'the creative potential', 'of the web'];

        setInterval(function()
        {     
              $(document).attr('title', titles[0]);
              titles.push(titles.shift());
        },
        2000);

    });