
(function(appNamespace,publicPath){"use strict";
(function(publicPath){Context.activeRouter=function(){var n={},t={},o={},e=[];return{set:function(t){n=Object.assign({},n,t),o={},function(){for(var n=e,t=0;t<n.length;t++){(0,n[t])()}}()},get:function(t){return 0===Object.keys(n).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:t?n[t]:n},subscribe:function(n){if("function"!=typeof n)throw new Error("Expected listener to be a function.");var t=!0;return e.push(n),function(){if(t){t=!1;var o=e.indexOf(n);e.splice(o,1)}}},addToGroup:function(n,o){o in t||(t[o]=[]),t[o].push(n)},removeFromGroups:function(n){for(var o in t){var e=t[o];t[o]=e.filter(function(t){return t!==n})}},didGroupAlreadyMatch:function(n){return!!n&&!0===o[n]},setGroupMatched:function(n){o[n]=!0}}}();
})(publicPath);
})("App","/build/app/");
