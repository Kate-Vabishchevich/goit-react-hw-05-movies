import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: rgb(19, 49, 97);
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 8px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    border-color: rgb(226, 120, 81);
    border-radius: 2px;
    font-size: 28px;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #fff;
    font-size: 28px;
  }
`;
