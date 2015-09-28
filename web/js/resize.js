$(document).ready(function()
{
    resizeDivs();
});

window.onresize = function(event)
{
    resizeDivs();
}

function resizeDivs()
{
    /*vpw = $(window).width();
    vph = $(window).height();

    if(vph > 600)
    {
        /*$('#event-wrapper').css({'height': vph - 450 + 'px'});
        $('#vision-wrapper').css({'height': vph - 420 + 'px'});
        $('#contact-wrapper').css({'height': vph - 320 + 'px'});
        $('#content').css({'height': vph + 'px'});*/
    }
}