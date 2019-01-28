import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'

class ImageZoomComponent extends Component {

    render() {
        let imgSrcSet = this.props.children[0].props.children[3].props.srcSet
        let imgSrcSetArray = imgSrcSet.split(", ")
        let imgsrc = this.props.children[0].props.children[3].props.src
        let imgsrcFull = imgSrcSetArray.slice(-1)[0].split(" ")[0]

        return (
            <div>

                <figure className="pa2 mv0">
                    <ImageZoom
                        image={{
                            src: imgsrc,
                            alt: "adf",
                            style: { width: '100em' }
                        }}
                        zoomMargin={0}
                        zoomImage={{
                            src: imgsrcFull,
                            alt: "adf"
                        }}
                    />
                    {this.props.caption ?
                        <figcaption className="mb5 gatsby-resp-image-figcaption w-100 tc i db lh-copy silver">{this.props.caption}</figcaption>
                        : null}
                </figure>
            </div>


        )
    }
}


export default ImageZoomComponent 