import { Box, TextField, Typography } from '@mui/material';

export default function AssetInfo() {
    return (
        <Box key="asset">
            <h2>Step 1: Asset Info</h2>
            <TextField fullWidth label="Asset Name" variant="outlined" />
        </Box>
    );
}
