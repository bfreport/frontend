import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BfReportApi } from "../../api/BfReportApi";
import { MODE } from "../../api/Json";
import { Circle, M88, M92 } from "../Materials";
import "../../locales/config";
import styled, { css } from "styled-components";

const Nav = styled.header`
  ${M92}
  background-color: var(--color-base);
  height: 80px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 0 8.33%;
  @media (max-width: 600px) {
    padding: 0 5%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const SLink = styled(NavLink)`
  font-weight: 700;
  font-size: 22px;
  margin-right: 55px;
`;

const LinkWrapper = styled.div`
  display: flex;
  position: relative;
  display: -webkit-flex;
  display: flex;
  align-items: center;

  .opened-link {
    border-radius: 5px;
    height: 35px;
    background-color: var(--color-base);
    color: var(--color-text);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  }
`;

const sharedLink = css`
  font-style: normal;
  font-size: 16px;
  line-height: 19.36px;

  display: flex;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0 20px;

  color: rgba(255, 255, 255, 0.72);
`;

const ProfileBlock = css`
  ${M88}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10px;
  padding: 5px;
  padding-right: 10px;
  border-radius: 8px;

  :hover {
    background: var(--color-base);
  }
`;

const HProfileBlock = styled(NavLink)`
  ${ProfileBlock}
`;

const AProfileBlock = styled.a`
  ${ProfileBlock}
`;

const DisplayName = styled.div`
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
`;

const HLink = styled(NavLink)`
  ${sharedLink}
`;

const ALink = styled.a`
  ${sharedLink}
`;

const Avatar = styled.img`
  width: 45px;
  margin-right: 0.7rem;
  border-radius: 50%;
`;

function UserAcc(): React.ReactElement {
  const { t } = useTranslation();
  const {
    error,
    data: currentUser,
    isLoading,
  } = useQuery("currentUser", () => BfReportApi.getUserInfo());

  if (error) {
    return (
      <HProfileBlock to="#">
        <Circle />
        <DisplayName>{t("error.profile")}</DisplayName>
      </HProfileBlock>
    );
  }

  if (isLoading || currentUser == undefined) {
    return (
      <HProfileBlock to="#">
        <Circle />
        <DisplayName>{t("loading")}</DisplayName>
      </HProfileBlock>
    );
  }

  if (currentUser.id == "") {
    return (
      <AProfileBlock
        href={BfReportApi.constructApiUrl(
          MODE === "prod" ? "/login" : "/locallogin",
          {},
        )}
      >
        <Circle />
        <DisplayName>{t("account.login")}</DisplayName>
      </AProfileBlock>
    );
  }

  return (
    <HProfileBlock to="/profile">
      <Avatar src={currentUser.avatar} alt="Avatar" />
      <DisplayName>{currentUser.displayName}</DisplayName>
    </HProfileBlock>
  );
}

const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--color-text)" : "var(--color-alt-text)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--color-base);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100%;
  width: 220px;
  padding-left: 0.5rem;
  padding-right: 1.5rem;
  padding-top: 4.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  margin-top: 0;

  li {
    color: #fff;
    padding: 15px 10px;
  }
`;

const RightNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();
  return (
    <Ul open={open}>
      <li onClick={() => setOpen(false)}>
        <HLink to="/reports" title={t("reports.main")}>
          {t("reports.main")}
        </HLink>
      </li>
      <li onClick={() => setOpen(false)}>
        <HLink to="/communitites" title={t("communitites.main")}>
          {t("communitites.main")}
        </HLink>
      </li>
      <li>
        <UserAcc />
        {/* <ButtonLink
          target="_blank"
          href="https://top.gg/bot/714524944783900794"
        >
          {t("navBar.bot")}
        </ButtonLink> */}
      </li>
    </Ul>
  );
};

const Burger = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

function Navbar(): React.ReactElement {
  const { t } = useTranslation();
  const homePage = useLocation().pathname === "/";
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const maxWidth = homePage ? 750 : 1250;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Nav>
      <Header onClick={() => setOpen(false)}>
        {homePage ? (
          <SLink to="#">{t("siteName")}</SLink>
        ) : (
          <SLink to="/">{t("siteName")}</SLink>
        )}
      </Header>
      {width < maxWidth ? (
        <Burger open={open} setOpen={setOpen} />
      ) : (
        <>
          <LinkWrapper>
            <HLink
              to="/report"
              title={t("report.main")}
              activeClassName="opened-link"
            >
              {t("report.main")}
            </HLink>
            <HLink
              to="/reports"
              title={t("reports.main")}
              activeClassName="opened-link"
            >
              {t("reports.main")}
            </HLink>
            <HLink
              to="/communities"
              title={t("communitites.main")}
              activeClassName="opened-link"
            >
              {t("communitites.main")}
            </HLink>
          </LinkWrapper>
          <UserAcc />
        </>
      )}
    </Nav>
  );
}

export default Navbar;
