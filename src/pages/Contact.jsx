import Form from "../components/common/Form";
import ProfileStrip from "../components/uncommon/ProfileStrip";
import { useLocalization } from "../contexts/LocalizationContext";

export default function Contact() {
  const { strings } = useLocalization();
  return (
    <>
      <h1>{strings.contact.title}</h1>
      <h2>{strings.contact.coworkers}</h2>
      <ProfileStrip />
      <h3>{strings.contact.formtitle}</h3>
      <Form />
    </>
  );
}
