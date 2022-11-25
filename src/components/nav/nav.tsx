// 3rd party imports
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiPaint } from "react-icons/bi";
import styled, { useTheme } from "styled-components";
import logo from "../../../public/images/logo.svg";
import { ThemeSelector } from "./theme-selector";

const variants = {
  open: { y: 150 },
  closed: { y: 0 },
};

export const Nav: React.FC = () => {
  const router = useRouter();
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const theme: any = useTheme();
  return (
    <>
      <ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} />
      <Wrapper
        variants={variants}
        animate={showThemeSelector ? "open" : "closed"}
        transition={{ bounce: 0.3, duration: 0.3 }}
      >
        <Link href="/">
          <Image src={logo} alt="steven mchenry personal logo" width={70} />
        </Link>
        <ul>
          <Link href="/" className={router.pathname === "/" ? "selected" : ""}>
            <li>home</li>
          </Link>
          <Link
            href="about"
            className={router.pathname.includes("/about") ? "selected" : ""}
          >
            <li>about</li>
          </Link>
          <Link
            href="/writing"
            className={router.pathname.includes("/writing") ? "selected" : ""}
          >
            <li>writing</li>
          </Link>
          <button
            className="theme-selector-button"
            onClick={() => {
              setShowThemeSelector((prev) => !prev);
            }}
          >
            <BiPaint color={theme?.colors?.color || "white"} size={20} />
          </button>
        </ul>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.nav)`
  padding: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: margin 0.4s ease;
  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style-type: none;
    height: 28px;
    a {
      transition: border 0.15s ease-out;
    }
    .selected {
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      border-width: 4px;
    }
    .theme-selector-button {
      display: flex;
      align-items: flex-start;
      border: none;
      background: transparent;
      padding-bottom: 4px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
