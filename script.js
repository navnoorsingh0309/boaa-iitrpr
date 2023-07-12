//scroll function
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var messages = $(".Messages_Section");
    for(var i=0; i<messages.length;i++) {
        var message = messages[i];
        if($(message).position().top <pageBottom)
        {
            $(message).addClass("visible");
        }
        else
        {
            $(message).removeClass("visible");
        }
    }
});
