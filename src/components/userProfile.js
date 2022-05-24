import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserProfileForm from "./userForm";
import {useNavigate}  from "react-router-dom";
import { reviewUser } from "../store/userActions";

const apiKey = "AIzaSyDeA7RO5pRyNLx0nCYzeKs6PHF1i1tuA04";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";



function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const UserProfile = (props) => {
  const searchInput = useRef(null);

  const profile = useSelector((state) => state.usersProfileReducer);

  const [values, setValues] = useState(profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const address = autocomplete?.gm_accessors_?.place.Kj?.formattedPrediction;
    setValues((prevState) => {
      return { ...prevState, address: address };
    });
    const place = autocomplete.getPlace();

    if (!Array.isArray(place?.address_components)) {
      // return address;
      return values;
    }

    place.address_components.forEach((component) => {
      const types = component.types;
      const value = component.long_name;

      if (types.includes("locality", "sublocality_level_1", "sublocality")) {
        setValues((prevState) => {
          return { ...prevState, city: value };
        });
      }

      if (types.includes("administrative_area_level_1")) {
        setValues((prevState) => {
          return { ...prevState, state: value };
        });
      }

      if (types.includes("postal_code")) {
        setValues((prevState) => {
          return { ...prevState, postCode: value };
        });
      }

      if (types.includes("country")) {
        setValues((prevState) => {
          return { ...prevState, country: value };
        });
      }
    });
    return values;
  };

  // console.log(values);

  // init autocomplete
  const initAutocomplete = () => {
    console.log(searchInput.current);

    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    console.log(autocomplete);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (newValue) => {
    setValues({ ...values, dob: newValue });
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.files[0])
    setValues({...values, photo:e.target.files[0]})
  }

  console.log(values)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    dispatch(reviewUser(values))
    navigate('/review')
  };

  return (
    <div>
      <h2>Clent Details</h2>
      <UserProfileForm
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        handleChangePhoto={handleChangePhoto}
        values={values}
        ref={searchInput}
      ></UserProfileForm>
    </div>
  );
};

export default UserProfile;
