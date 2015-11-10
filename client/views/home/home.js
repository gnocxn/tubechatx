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
                var s = _.last(r);
                var player = new Clappr.Player({source: s.source, parentId: "#player"});
                self.videoUrl('');
            })
        }
    }
})