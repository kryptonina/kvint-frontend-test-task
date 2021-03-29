import styled from 'styled-components';
import { ISwitch } from './ISwitch';

// eslint-disable-next-line import/prefer-default-export
export const SwitchWpapper = styled.div`
  margin: 0 2px;
`;

export const SwitchText = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: rgba(4, 15, 32, 0.13);
  width: 52px;
  text-align: center;
  position: relative;
  margin-bottom: 21px;
`;

export const SwitchComponent = styled.div`
  width: 48px;
  height: 17px;
  background-color: ${(props: ISwitch) =>
    props.checked ? '#0f213c' : '#b5b5b5'};
  border-radius: 9px;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${(props: ISwitch) =>
      props.checked ? '#01c8f8' : '#919191'};
    position: absolute;
    left: ${(props: ISwitch) => (props.checked ? '26px' : '-2px')};
    top: -3px;
    transition: all ease-in 0.2s;
  }
`;
