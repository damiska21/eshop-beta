import PageWrapper from "../components/common/ui-effects/PageWrapper.jsx";
import { useLocalization } from "../contexts/LocalizationContext.jsx";
export default function PrivacyPolicy() {
  const { strings } = useLocalization();
  return (
    <PageWrapper>
      <h1>{strings.privacypolicy.title}</h1>
      <h2>{strings.privacypolicy.h1}</h2>
      <p>{strings.privacypolicy.t1}</p>
      <h2>{strings.privacypolicy.h2}</h2>
      <p>{strings.privacypolicy.t2}</p>
      <h2>{strings.privacypolicy.h3}</h2>
      <p>{strings.privacypolicy.t3}</p>
      <h2>{strings.privacypolicy.h4}</h2>
      <p>{strings.privacypolicy.t4}</p>
      <h2>{strings.privacypolicy.h5}</h2>
      <p>{strings.privacypolicy.t5}</p>
      <h2>{strings.privacypolicy.h6}</h2>
      <p>{strings.privacypolicy.t6}</p>
      <h2>{strings.privacypolicy.h7}</h2>
      <p>{strings.privacypolicy.t7}</p>
    </PageWrapper>
  );
}
