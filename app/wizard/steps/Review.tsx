"use client";

import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function Review() {
  const { getValues, handleSubmit, formState } = useFormContext();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async () => {
    setSubmitStatus("loading");

    try {
      const values = getValues();
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const values = getValues();

  return (
    <Box key="review">
      <h2>Step 3: Review Information</h2>
      <p>Please review your information before submitting.</p>

      <Box mb={2}>
        <Typography>
          <strong>Asset Symbol:</strong> {values.assetSymbol}
        </Typography>
        <Typography>
          <strong>Asset Name:</strong> {values.assetName}
        </Typography>
        <Typography>
          <strong>Decimals:</strong> {values.decimals}
        </Typography>
        <Typography>
          <strong>Documents:</strong> {values.documents?.length || 0} file(s)
          uploaded
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
        disabled={formState.isSubmitting || submitStatus === "loading"}
      >
        {submitStatus === "loading" ? "Submitting..." : "Submit"}
      </Button>

      {submitStatus === "success" && (
        <Typography color="success.main" mt={2}>
          Submission successful!
        </Typography>
      )}
      {submitStatus === "error" && (
        <Typography color="error.main" mt={2}>
          Submission failed. Please try again.
        </Typography>
      )}
    </Box>
  );
}
