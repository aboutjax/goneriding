import ImageZoom from 'react-medium-image-zoom'
import React from 'react'

class ZoomImage extends React.Component {
    render() {
      return (
        <figure>
          <ImageZoom
            image={{
              src: this.props.src,
              alt: this.props.alt || this.props.caption
            }}
            zoomImage={{
              src: this.props.zoomsrc || this.props.src,
              alt: this.props.alt || this.props.caption
            }}
          />
        </figure>
      );
    }
  }
export default ZoomImage