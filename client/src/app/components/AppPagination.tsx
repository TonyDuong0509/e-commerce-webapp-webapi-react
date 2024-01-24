import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";
import { useState } from "react";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

function AppPagination({ metaData, onPageChange }: Props) {
  const { pageSize, currentPage, totalCount, totalPages } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography color="black" variant="h6">
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        count={totalPages}
        color="secondary"
        size="large"
        page={pageNumber}
        onChange={(_e, page) => handlePageChange(page)}
      />
    </Box>
  );
}

export default AppPagination;
