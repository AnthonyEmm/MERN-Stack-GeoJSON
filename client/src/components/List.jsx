import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getList(`http://localhost:4020/properties`);
  }, []);

  const getList = async (url) => {
    try {
      const response = await axios.get(url);
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Property List</h1>
      {properties.map((property) => {
        return (
          <div key={property.id}>
            <h2>Title: {property.title}</h2>
            <h3>Owner: {property.owner}</h3>
            <h3>Description: {property.description}</h3>
            <h3>Property Area: {property.area}</h3>
            <h3>Price: {property.price}</h3>
            <p>
              <img src={property.image} />
            </p>
          </div>
        );
      })}
    </>
  );
};

export default List;
