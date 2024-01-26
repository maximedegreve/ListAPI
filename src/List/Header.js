import React from 'react'
import { Box, Text } from '@primer/react'

export default function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                fontSize: 1,
                borderBottomWidth: 1,
                borderBottomColor: 'border.default',
                borderBottomStyle: 'solid',
                bg: 'canvas.subtle',
                textAlign: 'left',
                p: 3,
                justifyContent: 'flex-start',
            }}
        >
            <Text sx={{ fontSize: 1, fontWeight: 'semibold' }}>Settings</Text>
        </Box>
    )
}
