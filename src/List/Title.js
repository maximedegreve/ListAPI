import React from 'react'
import { Box } from '@primer/react'

export default function Title({ children }) {
    return (
        <Box
            sx={{
                gridArea: 'title',
                display: 'flex',
                flexDirection: 'column',
                gridRow: 1,
            }}
        >
            <Box sx={{ fontSize: 1, fontWeight: 'bold' }}>{children}</Box>
        </Box>
    )
}
