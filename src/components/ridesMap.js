import React, { Component } from 'react'

const mapStyle = [
    {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [
            {
                color: '#f7f1df',
            },
        ],
    },
    {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
            {
                color: '#d0e3b4',
            },
        ],
    },
    {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'poi.medical',
        elementType: 'geometry',
        stylers: [
            {
                color: '#fbd3da',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#bde6ab',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffe15f',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#efd151',
            },
        ],
    },
    {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'road.local',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: 'black',
            },
        ],
    },
    {
        featureType: 'transit.station.airport',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#cfb2db',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#a2daf2',
            },
        ],
    },
]

class RidesMap extends Component {
    componentDidMount() { this.initMap() }

    initMap = () => {

        window.map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -36.900719, lng: 174.703263 },
            zoom: 15,
            styles: mapStyle,
            zoomControl: true,
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_CENTER
            },
            fullscreenControl: false,
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false
        })

    }

    render() {

        return <div id="map" className="bg-near-white c-post-map" />

    }
}

export default RidesMap
