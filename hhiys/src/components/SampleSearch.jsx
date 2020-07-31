import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";

// https://www.youtube.com/watch?v=uJYqQdnw8LE

export default function SampleSearch() {
    const [address, setAddress] = React.useState("");

    const [zipcode, setZipcode] = React.useState("");

    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);
        setAddress(value);
        const zipComp = await result[0].address_components[6].short_name;
        setZipcode(zipComp);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <p>Zipcode: {zipcode}</p>

            {/* <ZipcodeParam.Provider value={zipcode}>
                
            </ZipcodeParam.Provider> */}
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
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

export const ZipcodeParam = React.createContext(null);


