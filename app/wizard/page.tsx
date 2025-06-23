/* TODO:
   – build 3‑step form using WizardLayout
   – validation with zod / react‑hook‑form
   – step 1: token symbol, name, decimals
   – step 2: drag‑and‑drop files (store in state)
   – step 3: review + “Submit” that POSTs to /api/submit
*/
// pages/index.tsx or pages/wizard.tsx


import '../../app/bootstrap-lite.css';
import FormProvider from '../../components/FormProvider';
import WizardLayout from '../../components/WizardLayout';
import AssetInfo from './steps/AssetInfo';
import Documents from './steps/Documents';
import Review from './steps/Review';


export default function WizardPage() {
  const steps = [<AssetInfo key="1" />, <Documents key="2" />, <Review key="3" />];
  return (
    <FormProvider>
      <WizardLayout steps={steps} />
    </FormProvider>
  );
}
