// SearchBar.js
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import "./SearchBar.css";
import { readExcel } from './readExcel'; // Assuming you have this utility to read the Excel file

const SearchBar = () => {
  const [placesData, setPlacesData] = useState([]); // Holds all places data from Excel
  const [searchTerm, setSearchTerm] = useState(''); // The term to search
  const [filteredPlaces, setFilteredPlaces] = useState([]); // Filtered results
  const navigate = useNavigate(); // For routing

  // Load the Excel file and extract the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = await fetch('/tourist.xlsx'); // Replace with actual path
        const data = await file.blob();
        const jsonData = await readExcel(data);

        // Store the entire row (all columns) of data for each place
        setPlacesData(jsonData);
      } catch (error) {
        console.error('Error reading the Excel file', error);
      }
    };

    fetchData();
  }, []);

  // Handle the search input and filter results
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the places based on the search term
    const filtered = placesData.filter((item) =>
      item.PLACE.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  // Handle click on dropdown item to navigate to the place details page
  const handlePlaceClick = (placeData) => {
    // Pass place data to the new page
    navigate(`/place/${placeData.PLACE}`, { state: placeData });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Places"
        value={searchTerm}
        onChange={handleSearch} // Filter as the user types
        style={{ width: '70%' }} // Set the width of the search bar to 70%
      />
      <button className="search-btn">
        <FaSearch />
      </button>

      {/* Dropdown showing filtered places */}
      {searchTerm && filteredPlaces.length > 0 && (
        <ul className="dropdown-menu show">
          {filteredPlaces.map((place, index) => (
            <li key={index} className="dropdown-item" onClick={() => handlePlaceClick(place)}>
              {place.PLACE}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
