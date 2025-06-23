import { Box, TextField, Typography } from '@mui/material';

export default function AssetInfo() {
    return (
        <Box key="asset">
            <h2>Step 1: Asset Info</h2>
            <div className='row'>
                <div className='col'>
                    <TextField fullWidth label="Asset Symbol" variant="outlined" />
                </div>
                <div className='col'>
                    <TextField fullWidth label="Asset Name" variant="outlined" />
                </div>
                <div className='col'>
                    <TextField fullWidth label="Asset Decimals" variant="outlined" />
                </div>
            </div>
        </Box>
    );
}
