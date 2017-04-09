if (self.CavalryLogger) { CavalryLogger.start_js(["okiCZ"]); }

/** js/stream/fbfeed/ui/FbFeedPager.react.js */





__d('FbFeedPager.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){var j,k,






l=c('React').PropTypes;j=babelHelpers.inherits

(m,c('React').Component);k=j&&j.prototype;m.prototype.










render=function(){'use strict';var n=




this.props,o=n.position,p=n.total,q=babelHelpers.objectWithoutProperties(n,['position','total']),
r=
c('React').createElement('span',babelHelpers['extends']
({className:"fcg"},
q),i._(["{position} of {total}","36eb8701b80288e9aecddc16afea6366"],

[i.param('position',o),

i.param('total',p)]));








return (c('React').createElement('div',null,
r));};


function m(){'use strict';j.apply(this,arguments);}m.propTypes={position:l.number.isRequired,total:l.number.isRequired};


f.exports=m;}),null);
