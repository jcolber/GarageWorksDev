$(document).ready(function(){
    $('.linked-phone-number').click(
        function(){
            var page = $(this).data('page')
            _gaq.push(['_trackEvent', 'CallClicks', page])
        }
    )
})