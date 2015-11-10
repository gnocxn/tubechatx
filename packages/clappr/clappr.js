// Write your package code here!
if(Meteor.isClient){
    var script = document.createElement('script');
    script.src = 'http://cdn.clappr.io/latest/clappr.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}
