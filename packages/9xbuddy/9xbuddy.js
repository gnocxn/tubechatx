if(Meteor.isServer){
    Meteor.methods({
        _9xbuddy_getMp4 : function(url){
            try{
                var uri = 'http://9xbuddy.com/ajax/app-data.php';
                var options = {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    form: {
                        url: decodeURIComponent(url)
                    }
                }
                var r = request.postSync(uri,options);
                var rs = Async.runSync(function(done){
                    var Xray = Meteor.npmRequire('x-ray'),
                        x = Xray();
                    x(r.body,{list : x('li.download-link-list:not(".listFirstLink")',[{
                        quality : '.download-link-quality',
                        source : '.download-link-download a@href'
                    }])})
                    (function(err, data){
                        if(err) done(err, null);
                        if(data) done(null, data);
                    })
                });
                if(rs.error){
                    console.log(rs.error);
                }
                if(rs.result && rs.result.list){
                    return _.filter(rs.result.list, function(s){ return (s.source.indexOf('mp4') > -1)})
                };
                return false;
            }catch(ex){
                console.log(ex);
            }
        }
    })
}