import React from 'react'
import { Stack } from '@mui/material'

const ColumnStack = React.forwardRef(({children, sx}, ref) => {
  return (
    <Stack direction="column" sx={{alignItems: 'center', ...sx}} ref={ref}>
        {children}
    </Stack>
  )
})

export default ColumnStack