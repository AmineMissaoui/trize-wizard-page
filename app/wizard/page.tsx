/* TODO:
   – build 3‑step form using WizardLayout
   – validation with zod / react‑hook‑form
   – step 1: token symbol, name, decimals
   – step 2: drag‑and‑drop files (store in state)
   – step 3: review + “Submit” that POSTs to /api/submit
*/
// pages/index.tsx or pages/wizard.tsx


import { TextField, Box } from '@mui/material';
import WizardLayout from '../../components/WizardLayout';
import AssetInfo from './steps/AssetInfo';
import Documents from './steps/Documents';
import Review from './steps/Review';

export default function WizardPage() {
  const steps = [<AssetInfo key="step-1" />, <Documents key="step-2" />, <Review key="step-3" />];
  return <WizardLayout steps={steps} />;
}
