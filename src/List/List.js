import React from 'react'
import { Box } from '@primer/react'
import { useResponsiveValue } from './useResponsiveValue'

export default function List({ columns, children }) {
    const responsiveColumns = useResponsiveValue(columns, [])

    const getColumnStyles = () => {
        const uniqueNames = responsiveColumns.map((col) => col.name)

        const styles = {}
        uniqueNames.forEach((name) => {
            const column = responsiveColumns.find((col) => col.name === name)

            styles[`li .${name}`] = {
                display: column ? 'flex' : 'none',
                alignItems: getVerticalAlign(column),
                gridColumn: getGridColumn(column),
                justifyContent: getHorizontalAlign(column),
                gridRow: column.stacked ? '2' : '1',
            }
        })

        return styles
    }

    const getTemplateAreas = () => {
        const areas = responsiveColumns.map((col) => col.name).join(' ')
        return `"title ${areas}"`
    }

    return (
        <Box
            as="ul"
            sx={{
                bg: 'canvas.default',
                display: 'grid',
                columnGap: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateAreas: getTemplateAreas(),
                gridTemplateColumns: `1fr ${responsiveColumns
                    .map((col) => col.width ?? 'auto')
                    ?.join(' ')}`,
                li: {
                    borderBottomWidth: 1,
                    borderBottomColor: 'border.default',
                    borderBottomStyle: 'solid',
                    gridTemplateColumns: 'subgrid',
                    gridColumn: `1/-1`,
                },
                'li:last-child': {
                    borderBottomWidth: 0,
                },
                'li .meta-data': {
                    display: 'none',
                },
                ...getColumnStyles(),
            }}
        >
            {children}
        </Box>
    )
}

// 🛟 Helpers

function getVerticalAlign(column) {
    switch (column?.verticalAlign) {
        case 'bottom':
            return 'flex-end'
        case 'middle':
            return 'center'
        default:
            return 'flex-start'
    }
}

function getGridColumn(column) {
    return column?.stacked ? '1/-1' : 'auto'
}

function getHorizontalAlign(column) {
    switch (column?.horizontalAlign) {
        case 'right':
            return 'flex-end'
        case 'center':
            return 'center'
        default:
            return 'flex-start'
    }
}
