// @ts-nocheck
import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import {
  NextIcon,
  PreviousIcon,
  LastIcon,
  FirstIcon,
} from "./CustomIcons/CustomIcons";
import { PaginationContainer } from "./Pagination.styled";

const PaginationGeneral = ({ totalPages }) => {
  return (
    <PaginationContainer>
      <Stack spacing={0}>
        <Pagination
          count={totalPages || 1}
          defaultPage={1}
          variant="outlined"
          boundaryCount={0}
          siblingCount={0}
          color="primary"
          size="large"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: PreviousIcon,
                next: NextIcon,
                last: LastIcon,
                first: FirstIcon,
              }}
              {...item}
            />
          )}
          showFirstButton
          showLastButton
        />
      </Stack>
    </PaginationContainer>
  );
};

export default PaginationGeneral;
