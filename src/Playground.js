import { Box, FormControl, IconButton, TextInput, Select } from '@primer/react'
import List from './List'
import { KebabHorizontalIcon } from '@primer/octicons-react'

const COLUMN_FORM = 'form'
const COLUMN_BLURB = 'blurb'
const COLUMN_BLURB2 = 'blurb2'
const COLUMN_ACTION = 'action'

const columns = {
    narrow: [
        {
            name: COLUMN_FORM,
            horizontalAlign: 'left',
            stacked: true,
        },
        {
            name: COLUMN_ACTION,
            horizontalAlign: 'right',
        },
    ],
    regular: [
        {
            name: COLUMN_BLURB,
            width: '20%',
        },
        {
            name: COLUMN_BLURB2,
            width: '20%',
        },
        {
            name: COLUMN_FORM,
            horizontalAlign: 'right',
        },
        {
            name: COLUMN_ACTION,
            horizontalAlign: 'right',
        },
    ],
    wide: [
        {
            name: COLUMN_BLURB,
            width: '20%',
        },
        {
            name: COLUMN_BLURB2,
            width: '20%',
        },
        {
            name: COLUMN_FORM,
            horizontalAlign: 'right',
        },
        {
            name: COLUMN_ACTION,
            horizontalAlign: 'right',
        },
    ],
}

function Playground() {
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    borderRadius: 2,
                    borderWidth: 1,
                    overflow: 'hidden',
                    borderColor: 'border.default',
                    borderStyle: 'solid',
                }}
            >
                <List.Header />
                <form>
                    <List columns={columns}>
                        <List.Item>
                            <List.Title>contains_phi</List.Title>
                            <List.Column name={COLUMN_BLURB}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_BLURB2}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_FORM}>
                                <FormControl>
                                    <FormControl.Label visuallyHidden>
                                        Value
                                    </FormControl.Label>
                                    <TextInput size="small" />
                                </FormControl>
                            </List.Column>
                            <List.Column name={COLUMN_ACTION}>
                                <IconButton
                                    icon={KebabHorizontalIcon}
                                    aria-label="Default"
                                />
                            </List.Column>
                        </List.Item>
                        <List.Item>
                            <List.Title>data_sensitivity</List.Title>
                            <List.Column name={COLUMN_BLURB}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_BLURB2}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_FORM}>
                                <FormControl>
                                    <FormControl.Label visuallyHidden>
                                        Value
                                    </FormControl.Label>
                                    <Select size="small">
                                        <Select.Option value="one">
                                            low
                                        </Select.Option>
                                        <Select.Option value="one">
                                            medium
                                        </Select.Option>
                                        <Select.Option value="one">
                                            high
                                        </Select.Option>
                                    </Select>
                                </FormControl>
                            </List.Column>
                            <List.Column name={COLUMN_ACTION}>
                                <IconButton
                                    icon={KebabHorizontalIcon}
                                    aria-label="Default"
                                />
                            </List.Column>
                        </List.Item>
                        <List.Item>
                            <List.Title>production</List.Title>
                            <List.Column name={COLUMN_BLURB}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_BLURB2}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </List.Column>
                            <List.Column name={COLUMN_FORM}>
                                <FormControl>
                                    <FormControl.Label visuallyHidden>
                                        Value
                                    </FormControl.Label>
                                    <Select size="small">
                                        <Select.Option value="one">
                                            true (default)
                                        </Select.Option>
                                        <Select.Option value="one">
                                            false
                                        </Select.Option>
                                    </Select>
                                </FormControl>
                            </List.Column>
                            <List.Column name={COLUMN_ACTION}>
                                <IconButton
                                    icon={KebabHorizontalIcon}
                                    aria-label="Default"
                                />
                            </List.Column>
                        </List.Item>
                    </List>
                </form>
                <List.Footer />
            </Box>
        </Box>
    )
}

export default Playground
