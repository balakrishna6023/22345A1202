import React from 'react';
import { Button } from '@mui/material';

function Pagination({ page, setPage, totalPages }) {
  return (
    <div>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <span>Page {page} of {totalPages}</span>
      <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
