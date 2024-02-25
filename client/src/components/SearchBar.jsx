import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    // Check if the Enter key (key code 13) is pressed
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Trim the search query to remove leading and trailing spaces
    const trimmedQuery = searchQuery.trim();
    // Call the onSearch callback with the trimmed search query
    onSearch(trimmedQuery);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="w-1/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      {/* <button
        type="button"
        onClick={handleSubmit}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;
