import React from 'react'
import './Styles/Footer.css'

function Footer() {
    return (
        <div className='footer-bar'>
            <h4>For location data, this website uses the Google Places Autocomplete API and can be found <a href='https://developers.google.com/places/web-service/autocomplete'>here.</a></h4>
            <h4>For Covid-19 data, this website uses data collected by The New York Times and you may access this data <a href='https://anypoint.mulesoft.com/exchange/68ef9520-24e9-4cf2-b2f5-620025690913/covid19-data-tracking-api/minor/1.0/pages/home/'>here.</a></h4>
        </div>
    )
}

export default Footer
