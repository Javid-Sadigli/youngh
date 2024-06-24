import React, { useEffect } from 'react';
import axios from 'axios';

const FilteredMentors = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/mentor/get/filtered/');
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section className='ana'>FilteredMentors</section>
  );
};

export default FilteredMentors;
