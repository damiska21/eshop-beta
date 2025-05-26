import { useLocalization } from "../../contexts/LocalizationContext";
import "./HomeC.css";
import { Link } from "react-router-dom";

function HomeC() {
  const { strings } = useLocalization();
  return (
    <>
      <h1>{strings.home.h1}</h1>
      <h2>{strings.home.h2}</h2>
      <p>{strings.home.text1}</p>
      <p>{strings.home.text2}</p>
    </>
  );
}

export default HomeC;
