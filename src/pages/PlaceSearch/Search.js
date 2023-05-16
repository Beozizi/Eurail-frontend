import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
import "@reach/combobox/styles.css";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";

import classNames from 'classnames/bind';

import styles from './PlaceSearch.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 14.0583, lng: () => 108.2772 },
        radius: 100 * 1000,
      },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
    
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      };
    return (
    <div className={cx('search')}>
      <Combobox onSelect={handleSelect}>
        <FontAwesomeIcon className={cx('icon')} icon={faSearch}/>
        <ComboboxInput
          className={cx('input')}
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover >
              <ComboboxList className={cx('popper')}>
                {status === "OK" &&
                  data.map(({ id, description }) => (
                    <ComboboxOption key={id} value={description} />
                  ))}
              </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}      
export default Search