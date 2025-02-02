import { useContext } from "react";
// import { PropertyContext } from "../Context/HomeCardDataContext";
import { PropertyContext } from "../Context/HomeContext";

import "../../Styles/ItemsGrid.css";
import  placeholder from "../../assets/placeholder.jpg";

const FeaturedProperties = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">FEATURED PROPERTIES</h2>
      <div className="row">
        {properties.map((property) => (
          <div key={property.id} className="col-md-4">
            <div className="property-card card shadow-sm p-3 mb-4 bg-white rounded">
              <img src={placeholder} className="card-img-top" alt={property.title} />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">Amazing property for your next stay!</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;