import styled, { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';

import Tree from './TreeContainer';

const Blur = createGlobalStyle`
  ${Tree} {
    filter: blur(15px);
  }
`;

const ModalStyled = styled.div`
  width: 320px;
  border: 2px solid #000;
  border-radius: 4px;
  display: block;
  padding: 24px;
  position: relative;
  background: #fff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 12px;
  max-width: 60%;
`;

const Close = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  display: block;
  background: transparent;
  border: 0;
  appearance: none;
  right: 2px;
  top: 2px;
  padding: 0;
  cursor: pointer;
  
  &::before, &::after {
    width: 75%;
    height: 2px;
    content: "";
    display: block;
    background: #000;
    border-radius: 4px;
    position: absolute;
  }
  
  &::before {
    transform: rotate(45deg);
    top: 12px;
    left: 3px;
  }
  
  &::after {
    transform: rotate(-45deg);
    top: 12px;
    left: 3px;
  }
`;

const Modal = ({ children, title, onClose }) => {
  const ModalPortal = () => (
    <ModalOverlay>
      <ModalStyled>
        <Close onClick={onClose} />
        <Title>{title}</Title>
        <div>{children}</div>
      </ModalStyled>
    </ModalOverlay>
  );

  return (
    <>
      <Blur />
      {ReactDOM.createPortal(<ModalPortal />, document.body)}
    </>
  );
};

export default Modal;
