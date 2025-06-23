"use client";

import { ReactNode } from "react";
import { useForm, FormProvider as RHFProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const wizardSchema = yup.object({
  assetSymbol: yup
    .string()
    .required("Token symbol is required")
    .matches(/^[A-Z]+$/, "Must be uppercase letters only")
    .min(2, "Min 2 characters")
    .max(10, "Max 10 characters"),
  assetName: yup
    .string()
    .required("Token name is required")
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters"),
  decimals: yup
    .number()
    .typeError("Must be a number")
    .required("Decimals are required")
    .min(0, "Min 0")
    .max(18, "Max 18"),
  documents: yup
    .array()
    .of(yup.mixed())
    .min(1, "At least one document is required")
    .optional(),
});

export type WizardFormData = yup.InferType<typeof wizardSchema>;

export default function FormProvider({ children }: { children: ReactNode }) {
  const methods = useForm<WizardFormData>({
    resolver: yupResolver(wizardSchema),
    mode: "onTouched",
    defaultValues: {
      assetSymbol: "",
      assetName: "",
      decimals: 0,
    },
  });

  return <RHFProvider {...methods}>{children}</RHFProvider>;
}
