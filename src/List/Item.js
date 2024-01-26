import React from 'react'
import { Box } from '@primer/react'

export default function Item({ children }) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                bg: 'canvas.default',
                gridTemplateRows: 'auto auto',
                rowGap: 2,
                p: 3,
            }}
        >
            {children}
        </Box>
    )
}
