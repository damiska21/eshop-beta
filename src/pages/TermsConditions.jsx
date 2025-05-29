import PageWrapper from "../components/common/ui-effects/PageWrapper.jsx";
import { useLocalization } from "../contexts/LocalizationContext.jsx";
import "./TermsConditions.css"
export default function TermsConditions() {
  const { strings } = useLocalization();
  return (
    <PageWrapper>
      <div className="justify">
      <h1>{strings.termsconditions.title}</h1>
      <h2>{strings.termsconditions.h1}</h2>
      <p>{strings.termsconditions.t1}</p>
      <h2>{strings.termsconditions.h2}</h2>
      <p>{strings.termsconditions.t2}</p>
      <h2>{strings.termsconditions.h3}</h2>
      <p>{strings.termsconditions.t3}</p>
      <h2>{strings.termsconditions.h4}</h2>
      <p>{strings.termsconditions.t4}</p>
      <h2>{strings.termsconditions.h5}</h2>
      <p>{strings.termsconditions.t5}</p>
      <h2>{strings.termsconditions.h6}</h2>
      <p>{strings.termsconditions.t6}</p>
      <h2>{strings.termsconditions.h7}</h2>
      <p>{strings.termsconditions.t7}</p>
      </div>
    </PageWrapper>
  );
}
