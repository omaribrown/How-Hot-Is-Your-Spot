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
        setAddress(value);
        const zipComp = await result[0].address_components[6].short_name;
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
                <h3>Start typing your favorite restaurant...</h3>

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
