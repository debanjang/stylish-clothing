import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/shopping-logo-svgrepo-com.svg";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const LogoElement = styled(Logo)`
  height: 50px;
`;

export const OptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const SignOutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
