import Form from "../components/forms/Form";
import ProfileStrip from "../components/common/contact/ProfileStrip";
import { useLocalization } from "../contexts/LocalizationContext";
import PageWrapper from "../components/common/ui-effects/PageWrapper";

export default function Contact() {
  const { strings } = useLocalization();
  return (
    <>
    <PageWrapper>
      <h1>{strings.contact.title}</h1>
      <h2>{strings.contact.coworkers}</h2>
      <ProfileStrip />
      <h3>{strings.contact.formtitle}</h3>
      <Form />
      </PageWrapper>
    </>
  );
}
