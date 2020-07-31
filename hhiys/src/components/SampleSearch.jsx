import React, { useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";
import ZipContext from './Context'


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
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                <p>Zipcode: {zipcode}</p>

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

// export const ZipcodeProvider = ZipcodeContext.Provider
// export const ZipcodeConsumer = ZipcodeContext.Consumer

