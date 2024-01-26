import React from 'react'
import { Box, Button } from '@primer/react'

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                fontSize: 1,
                borderTopWidth: 1,
                borderTopColor: 'border.default',
                borderTopStyle: 'solid',
                bg: 'canvas.subtle',
                textAlign: 'left',
                gap: 2,
                p: 3,
                justifyContent: 'flex-end',
            }}
        >
            <Button size="small">Cancel</Button>
            <Button size="small" variant="primary">
                Save
            </Button>
        </Box>
    )
}
