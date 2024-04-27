import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
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

const PaginationGeneral = ({ totalPages, setCurrentPage, currentPage }) => {
  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);
  const mobilesSmall = useMediaQuery({ maxWidth: 374.98 });

  useEffect(() => {
    setLocalCurrentPage(currentPage);
  }, [currentPage]);

  const onPageChanged = (_, page) => {
    setCurrentPage(page);
    setLocalCurrentPage(page);
  };

  return (
    <>
      {totalPages > 1 && (
        <PaginationContainer>
          <Stack spacing={0}>
            <Pagination
              count={totalPages}
              page={localCurrentPage}
              onChange={onPageChanged}
              variant="outlined"
              boundaryCount={0}
              siblingCount={0}
              color="primary"
              size={mobilesSmall ? "medium" : "large"}
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
      )}
    </>
  );
};

export default PaginationGeneral;
