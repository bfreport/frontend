import * as React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../Materials";

function PageNotFound(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("pageNotFound.main")}</h1>
      <p>{t("pageNotFound.description")}</p>
      {/* <PrimaryButtonLink style={{ width: "125px" }} href="/">
        Back to the main page
      </PrimaryButtonLink> */}
      <br></br>
      <br></br>
    </Container>
  );
}

export default PageNotFound;
