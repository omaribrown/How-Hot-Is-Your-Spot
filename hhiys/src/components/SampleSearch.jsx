import React, { useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";
import ZipContext from './Context'
import './Styles/SampleSearch.css'


// https://www.youtube.com/watch?v=uJYqQdnw8LE

export default function SampleSearch() {
    const [address, setAddress] = React.useState("");

    const [zipcode, setZipcode] = React.useState("");

    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);
        console.log(result)
        setAddress(value);
        let zipComp = await result[0].address_components[6].short_name;
        // FIXME this is the check for if we're taking the zipcode from the right index
        if (isNaN(zipComp)) {
          let zipComp = await result[0].address_components[7].short_name;
          console.log('new zipcomp is ', zipComp)
        }
        console.log(zipComp)
        setZipcode(zipComp);
  };

    const context = useContext(ZipContext);
    context.setZipcode(zipcode)


  return (
    
    <div className='sample-search'>
        <div className='search-header'>
          <h1>How Hot Is Your Spot</h1>
        </div>
      <div className='bio-container'>
        <div className='search-bio'>
          <p>This is an application that lets you enter your favorite restaurant and see the number of Covid-19 cases for that zip code in comparison to neighboring zip codes, the state, and the national averages. This app allows the user to see how effected their favorite areas to go are.</p> 
          <h4>Known Bugs: If the Zipcode box populates with a state code or country code instead of a zipcode, you'll need to refresh and try another restaurant. </h4>
          <h5>This issue comes from when the application is trying to grab the zipcode from the Google Places API and occasionally grabs the wrong index of data.</h5>
          <h5>For whatever reason, my API from The New York Times doesnt have Covid-19 case data from New York. So a few suggestions from Atlanta (where I live) are "Bad Daddy's Burger Bar", "The Varsity", and </h5>
        </div>
      </div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <p>Zipcode: {zipcode}</p>
                <h3>Start typing and select your favorite restaurant...</h3>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div className='suggestion-div'>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#457B9D" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
