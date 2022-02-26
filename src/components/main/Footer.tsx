import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import "../../locales/config";
import LanguageSelector from "../../locales/ChangeLanguage";
import { M92 } from "../Materials";

interface FLinkProp {
  href: string;
  name: string;
}

const Background = styled.footer`
  ${M92}
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: var(--color-base);
`;

const Section = styled.div`
  position: relative;
  @media (min-width: 850px) {
    padding-left: 8.33%;
  }
  @media (max-width: 850px) {
    padding-left: 3%;
  }
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
`;

const Text = styled.div`
  @media (min-width: 920px) {
    margin-right: 8rem;
    max-width: 55%;
  }
  margin-bottom: 1.5rem;
`;

const TextGrayP = styled.p`
  ${M92}
  color: var(--color-alt-text);
`;

const AlignT = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Links = styled.div``;

const TextLink = styled.a`
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-weight: bold;
`;

function FLink(props: FLinkProp) {
  return (
    <p>
      <TextLink href={props.href}>{props.name}</TextLink>
    </p>
  );
}

function Footer(): React.ReactElement {
  const { t, i18n } = useTranslation();
  const urls = [
    "https://github.com/bfreport",
    "https://api.bfreport.com/docs",
    "https://api.gametools.network/",
    "https://discord.bfreport.com/",
    "/privacy/",
  ];

  let i = 0;
  const description = [];
  while (i18n.exists(`footer.descriptions.${i}`)) {
    description.push(t(`footer.descriptions.${i}`));
    i += 1;
  }

  return (
    <Background>
      <Section>
        <Text>
          <h2 style={{ margin: 0 }}>{t("siteName")}</h2>
          {description.map((key, index) => {
            return <TextGrayP key={index}>{key}</TextGrayP>;
          })}
          <AlignT>
            <LanguageSelector />
            <iframe
              src="https://github.com/sponsors/community-network/button"
              title="Sponsor community-network"
              height="35"
              width="116"
              style={{ border: 0, marginTop: "1px", marginLeft: ".5rem" }}
            />
          </AlignT>
        </Text>
        <Links>
          <h2 style={{ margin: 0 }}>Links</h2>
          {urls.map((key, index) => {
            return (
              <FLink key={index} href={key} name={t(`footer.links.${index}`)} />
            );
          })}
        </Links>
      </Section>
    </Background>
  );
}

export default Footer;
