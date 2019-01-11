import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'

class ImageZoomComponent extends Component {

    render() {
        let imgSrcSet = this.props.children[0].props.children[3].props.srcSet
        let imgSrcSetArray = imgSrcSet.split(", ")
        let imgsrc = this.props.children[0].props.children[3].props.src
        let imgsrcFull = imgSrcSetArray.slice(-1)[0].split(" ")[0]

        return (
            <figure className="pa2 mv5">
                <ImageZoom
                    image={{
                        src: imgsrc,
                        alt: "adf",
                        className: 'w-100',
                    }}
                    zoomMargin={10}
                    zoomImage={{
                        src: imgsrcFull,
                        alt: "adf"
                    }}
                />
                <figcaption className="gatsby-resp-image-figcaption w-100 tc i db lh-copy silver">{this.props.caption ? this.props.caption : null}</figcaption>
                {/* <MarkerLink lat='-40.473126' lng='175.285641' label='G' zoom='12'>Foxton</MarkerLink> */}
            </figure>


        )
    }
}


export default ImageZoomComponent 