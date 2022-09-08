import React from 'react'
import { Stack } from '@mui/material'

const ColumnStack = React.forwardRef(({children, sx, className}, ref) => {
  return (
    <Stack direction="column" sx={{alignItems: 'center', ...sx}} className={className} ref={ref}>
        {children}
    </Stack>
  )
})

export default ColumnStack