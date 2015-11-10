Template.home.viewmodel({
    videoUrl: '',
    isValidUrl: function () {
        return (is.not.empty(this.videoUrl()) && is.url(this.videoUrl()))
    },
    getVideo: function () {
        var _videoUrl = this.videoUrl();
        var self = this;
        if ((is.not.empty(_videoUrl) && is.url(_videoUrl))) {
            Meteor.call('_9xbuddy_getMp4', _videoUrl, function (e, r) {
                console.log(e,r);
                if(is.array(r) && r.length >= 1) {
                    var s = _.last(r);
                    if(s && _.has(s,'source')){
                        var player = new Clappr.Player({source: s.source, parentId: "#player"});
                        self.videoUrl('');
                    }
                }
            })
        }
    }
})