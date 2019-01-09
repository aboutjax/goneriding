import React from 'react';
import rehypeReact from 'rehype-react';

// TODO: figure out if I can create the compiler function on the fly and include variable components, so I don't have to pass these in for posts that don't need them. this might get optimized out by Webpack on build, anyway, but not sure
import ZoomImage from './zoomImage';
import Hidden from './hidden';
import MarkerLink from './markerLink';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'zoom-image': ZoomImage,
    'hidden': Hidden,
    'marker-link': MarkerLink
  }
}).Compiler;


class TextPostBody extends React.Component {
  render() {
    return <div>{renderAst(this.props.htmlAst)}</div>;
  }
}

export default TextPostBody