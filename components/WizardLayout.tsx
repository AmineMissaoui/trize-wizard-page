"use client";

import { ReactNode, useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { WizardFormData } from "./FormProvider";

export default function WizardLayout({ steps }: { steps: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const [isStepValid, setIsStepValid] = useState(false);

  const { trigger, watch, formState } = useFormContext<WizardFormData>();
  const { isSubmitting } = formState;

  const stepFields: Record<number, (keyof WizardFormData)[]> = {
    0: ["assetSymbol", "assetName", "decimals"],
    1: ["documents"],
  };

  const currentFields = stepFields[active] || [];
  const watched = watch(currentFields);

  useEffect(() => {
    const runValidation = async () => {
      const isValid = await trigger(currentFields);
      setIsStepValid(isValid);
    };

    runValidation();
  }, [JSON.stringify(watched), active]);

  const next = async () => {
    const isValid = await trigger(currentFields, { shouldFocus: true });
    if (isValid) {
      setActive((prev) => prev + 1);
    }
  };

  const back = () => setActive((prev) => prev - 1);

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
            disabled={!isStepValid || isSubmitting}
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
}
