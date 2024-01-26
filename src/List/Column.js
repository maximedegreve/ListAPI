import React from 'react'
import { Box } from '@primer/react'

export default function Column({ children, name }) {
    return (
        <Box
            className={`meta-data ${name}`}
            sx={{
                gridArea: name,
                fontSize: 0,
                color: 'fg.muted',
            }}
        >
            {children}
        </Box>
    )
}
