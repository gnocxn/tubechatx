var Player;
Template.home.viewmodel({
    videoUrl: '',
    isValidUrl: function () {
        return (is.not.empty(this.videoUrl()) && isUrl(this.videoUrl()))
    },
    getVideo: function () {
        var _videoUrl = this.videoUrl();
        var self = this;
        if ((is.not.empty(_videoUrl) && isUrl(_videoUrl))) {
            Meteor.call('_9xbuddy_getMp4', _videoUrl, function (e, r) {
                if(is.array(r) && r.length >= 1) {
                    var s = _.last(r);
                    if(s && _.has(s,'source')){
                        Player = videojs('_player');
                        Player.src(s.source);
                    }
                }
            })
        }
    }
})