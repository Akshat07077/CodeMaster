import React, { useState } from 'react';
import Categories from './Categories';
import ProblemsList from './ProblemsList';

const ParentComponent = () => {
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  // This function will be passed to the Categories component
  const handleFilterChange = (category: string) => {
    setFilteredCategory(category); // Update the state with the selected category
  };

  return (
    <div>
      {/* Pass handleFilterChange to Categories as onFilterChange */}
      <Categories onFilterChange={handleFilterChange} />
      
      {/* Pass the filteredCategory as a prop to ProblemsList */}
      <ProblemsList categoryFilter={filteredCategory} />
    </div>
  );
};

export default ParentComponent;
