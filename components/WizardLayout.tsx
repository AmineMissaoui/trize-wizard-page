"use client";

import { ReactNode, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function WizardLayout({ steps }: { steps: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const { trigger, formState } = useFormContext();
  const { isValid, isSubmitting } = formState;

  const stepFields: Record<number, string[]> = {
    0: ["tokenSymbol", "tokenName", "decimals"],
    1: ["documents"],
  };

  const next = async () => {
    const fields = stepFields[active] || [];
    const valid = await trigger(fields, { shouldFocus: true });
    if (valid) {
      setActive((s) => s + 1);
    }
  };

  const back = () => setActive((s) => s - 1);

  return (
    <>
      <Stepper activeStep={active} sx={{ marginBottom: 4 }}>
        {["Asset", "Docs", "Review"].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>{steps[active]}</Box>

      <Box mt={4} display="flex" gap={2}>
        {active > 0 && <Button onClick={back}>Back</Button>}

        {active < steps.length - 1 && (
          <Button
            onClick={next}
            variant="contained"
            disabled={isSubmitting || !isValid}
            className={isSubmitting || !isValid ? "button-disabled" : ""}
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
}
