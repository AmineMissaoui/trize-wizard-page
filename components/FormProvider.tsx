'use client';

import { ReactNode } from 'react';
import { useForm, FormProvider as RHFProvider } from 'react-hook-form';

export type WizardFormData = {
  tokenSymbol: string;
  tokenName: string;
  decimals: number;
  documents: File[];
};

export default function FormProvider({ children }: { children: ReactNode }) {
  const methods = useForm<WizardFormData>({
    mode: 'onTouched',
    defaultValues: {
      tokenSymbol: '',
      tokenName: '',
      decimals: 18,
      documents: [],
    },
  });

  return <RHFProvider {...methods}>{children}</RHFProvider>;
}
