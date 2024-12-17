(function($) {
    $(document).ready(function () {
        var playbutton = $('.control-play'),
        album = $('.album');

        playbutton.on('click', () => {
            $('.music-player-container')
                .toggleClass('is-playing')
        });
    });
})(jQuery)