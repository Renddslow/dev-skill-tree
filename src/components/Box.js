import styled from 'styled-components';

const Block = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 4px;
  justify-content: center;
  width: 115px;
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
  background: ${(props) => props.marked ? '#000' : 'transparent'};
`;

const Flag = styled.div`
  padding: 4px 8px;
  background: ${(props) => props.skill ? '#ffff09' : '#000'};
  color: ${(props) => props.skill ? '#000' : '#fff'};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.1px;
  display: block;
  width: fit-content;
  border-radius: 4px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #000;
`;

const Box = ({ children, skill = false }) => {
  return (
    <Block>
      <BoxContainer>
        <BoxStyled>
          <InnerBox />
        </BoxStyled>
      </BoxContainer>
      <Flag skill={skill}>{children}</Flag>
    </Block>
  );
};

export default Box;
