// Write your package code here!
if(Meteor.isClient){
    var script = document.createElement('script');
    script.src = 'http://vjs.zencdn.net/5.0.2/video.js';
    var style = document.createElement('link');
    style.href = 'http://vjs.zencdn.net/5.0.2/video-js.css';
    style.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementsByTagName('head')[0].appendChild(script);
}