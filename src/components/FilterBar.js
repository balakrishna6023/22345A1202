import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilterBar({ filters, handleFilterChange }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select name="category" value={filters.category} onChange={handleFilterChange}>
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Company</InputLabel>
        <Select name="company" value={filters.company} onChange={handleFilterChange}>
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="company1">Company 1</MenuItem>
          <MenuItem value="company2">Company 2</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Rating</InputLabel>
        <Select name="rating" value={filters.rating} onChange={handleFilterChange}>
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="4">4 Stars & Up</MenuItem>
          <MenuItem value="3">3 Stars & Up</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterBar;
