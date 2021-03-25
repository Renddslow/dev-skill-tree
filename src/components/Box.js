import styled from 'styled-components';
import { Handle } from 'react-flow-renderer';

const Block = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 4px;
  justify-content: center;
  width: 140px;
  position: relative;
`;

const BoxContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: max-content;
  margin: 0 auto;
`;

const BoxStyled = styled.div`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  border: 2px solid #000;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InnerBox = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid #000;
  display: block;
  background: ${(props) => (props.marked ? '#000' : 'transparent')};
`;

const Flag = styled.div`
  padding: 4px 8px;
  background: ${(props) => {
    switch (props.type) {
      case 'role':
        return '#000';
      case 'skill':
        return '#ffff09';
      case 'concept':
        return '#ffe189';
      default:
        return '#ffff09';
    }
  }};
  color: ${(props) => (props.type !== 'role' ? '#000' : '#fff')};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.1px;
  display: block;
  width: fit-content;
  border-radius: 4px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #000;
  position: relative;
  max-width: 100%;
  //word-break: break-word;
`;

const Info = styled.button.attrs({
  children: '?',
})`
  appearance: none;
  background: #8500ff;
  position: absolute;
  color: #fff;
  font-weight: 800;
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  font-size: 12px;
  right: -6px;
  top: -8px;
  border: 1px solid ${(props) => (props.skill ? 'transparent' : '#fff')};
  cursor: pointer;
`;

const handleStyle = {
  background: 'transparent',
  border: 0,
  cursor: 'initial',
};

const Box = ({ data }) => {
  return (
    <Block>
      <Handle
        type="target"
        id="top"
        position="top"
        style={handleStyle}
      />
      <Handle
        type="source"
        id="top"
        position="top"
        style={handleStyle}
      />
      <Handle
        type="target"
        id="bottom"
        position="bottom"
        style={handleStyle}
      />
      <Handle
        type="source"
        id="bottom"
        position="bottom"
        style={handleStyle}
      />
      <Handle
        type="target"
        id="left"
        position="left"
        style={handleStyle}
      />
      <Handle
        type="source"
        id="left"
        position="left"
        style={handleStyle}
      />
      <Handle
        type="target"
        id="right"
        position="right"
        style={handleStyle}
      />
      <Handle
        type="source"
        id="right"
        position="right"
        style={handleStyle}
      />
      <BoxContainer>
        <BoxStyled>
          <InnerBox />
        </BoxStyled>
      </BoxContainer>
      <Flag type={data.type}>
        {data.info && <Info skill={data.type !== 'role'} onClick={data.onInfoClick} />}
        <span>{data.label}</span>
      </Flag>
    </Block>
  );
};

export default Box;
