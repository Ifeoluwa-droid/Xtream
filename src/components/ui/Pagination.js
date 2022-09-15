import React from 'react'
import { Pagination as MUIPagination } from '@mui/material'

const Pagination = ({pageCount, handlePageChange, currentPage}) => {
  return (
    <MUIPagination sx={{marginTop: 5}} count={pageCount > 500 ? 500 : pageCount} color='primary' onChange={handlePageChange} page={currentPage} shape='rounded' />
  )
}

export default Pagination