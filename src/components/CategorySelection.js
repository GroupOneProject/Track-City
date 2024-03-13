// src/components/CategorySelection.js
import React from 'react';
import { Button, Grid } from '@mui/material';

function CategorySelection({ categories, onCategorySelect }) {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item key={category.id}>
          <Button variant="contained" onClick={() => onCategorySelect(category)}>
            {category.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategorySelection;

