"use client";

import { Box, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function AssetInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box key="asset">
      <h2>Step 1: Asset Info</h2>
      <div className="row">
        <div className="col">
          <TextField
            fullWidth
            label="Asset Symbol"
            variant="outlined"
            {...register("assetSymbol")}
            error={!!errors.assetSymbol}
            helperText={errors.assetSymbol?.message?.toString()}
          />
        </div>
        <div className="col">
          <TextField
            fullWidth
            label="Asset Name"
            variant="outlined"
            {...register("assetName")}
            error={!!errors.assetName}
            helperText={errors.assetName?.message?.toString()}
          />
        </div>
        <div className="col">
          <TextField
            fullWidth
            label="Asset Decimals"
            variant="outlined"
            {...register("decimals")}
            error={!!errors.decimals}
            helperText={errors.decimals?.message?.toString()}
          />
        </div>
      </div>
    </Box>
  );
}
