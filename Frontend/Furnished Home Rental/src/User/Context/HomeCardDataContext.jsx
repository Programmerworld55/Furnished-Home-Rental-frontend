import {useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { fetchProperties } from "../Components/API/HomeCardData";
import { PropertyContext } from './HomeContext';


// export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data); 
    };

    getProperties();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties }}>
      {children}
    </PropertyContext.Provider>
  );
};

PropertyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};




