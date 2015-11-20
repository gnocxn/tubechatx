var playerId = null;
Template.playerContainer.viewmodel({
    videoUrl: '',
    isValidUrl: function () {
        return (is.not.empty(this.videoUrl()) && isUrl(this.videoUrl()))
    },
    getVideo: function () {
        var _videoUrl = this.videoUrl();
        //console.log(_videoUrl);
        var self = this;
        if ((is.not.empty(_videoUrl) && isUrl(_videoUrl))) {
            Meteor.call('_9xbuddy_getMp4', _videoUrl, function (e, r) {
                //console.info(r);
                if(is.array(r) && r.length >= 1) {
                    var s = _.last(r);
                    if(s && _.has(s,'source')){
                        if(playerId){
                            Blaze.remove(playerId);
                        }
                        playerId = Blaze.renderWithData(Template.videoJsPlayer, {source : s.source}, document.getElementById('_playerContainer'));
                        self.videoUrl('');
                    }
                }
            })
        }
    }
});