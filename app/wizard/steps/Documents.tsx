import { Box, TextField } from '@mui/material';

export default function Documents() {
    return (
        <Box key="docs">
            <h2>Step 2: Upload Documents</h2>
            <TextField fullWidth type="file" />
        </Box>
    );
}