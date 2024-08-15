import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SortBar({ sort, handleSortChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Sort By</InputLabel>
      <Select value={sort} onChange={handleSortChange}>
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortBar;
