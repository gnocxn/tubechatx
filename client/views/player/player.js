var playerId = null;
Template.widget_Player.viewmodel({
    videoUrl: '',
    isValidUrl: function () {
        return (is.not.empty(this.videoUrl()) && isUrl(this.videoUrl()))
    },
    getVideo: function () {
        var _videoUrl = this.videoUrl();

        var self = this;
        if ((is.not.empty(_videoUrl) && isUrl(_videoUrl))) {
            //console.log(_videoUrl);
            Meteor.call('_9xbuddy_getMp4', _videoUrl, function (e, r) {
                console.info(r.reverse(),e);
                if(is.array(r) && r.length >= 1) {
                    var s = _.find(r.reverse(), function(r1){ return r1.source.indexOf('.mp4')> -1});
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

Template.widget_Player.rendered = function(){
    $(document).ready(function(){
        $('.tabular.menu.playerContainerTab .item').tab();
    })
}