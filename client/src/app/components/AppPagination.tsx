import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;

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
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
      />
    </Box>
  );
}

export default AppPagination;
