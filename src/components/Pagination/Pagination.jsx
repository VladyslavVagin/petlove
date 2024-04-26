import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from '@mui/material/PaginationItem';
import { DoubleArrow } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

const PaginationGeneral = ({ totalPages }) => {
  return (
    <Stack spacing={1}>
      <Pagination
        count={totalPages}
        defaultPage={1}
        variant="outlined"
        color="primary"
        size="small"
        renderItem={(item) => (
            <PaginationItem
              slots={{ previous: DoubleArrow, next: DoubleArrow }}
              {...item}
            />
          )}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationGeneral;
