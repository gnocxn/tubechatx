Template.videoJsPlayer.onCreated(function(){
    this.player = undefined;
});

Template.videoJsPlayer.onDestroyed(function(){
    if(this.player){
        this.player.dispose();
    }
})

Template.videoJsPlayer.rendered = function(){
    var self = this;
    $(document).ready(function(){
        try{
            self.player = videojs('_player');
            self.player.src(self.data.source);
            self.player.ready(function(){
                self.player.disableProgress({
                    autoDisable: true
                });
                self.player.play();
            });

            self.player.one('loadedmetadata', function() {
                var duration = self.player.duration();
                console.info(duration);
            });

            self.player.on('timeupdate',function(){
                var isPaused = self.player.paused;
                if(isPaused) self.player.play();
            })
        }catch(ex){
            console.error(ex);
        }
    })
}