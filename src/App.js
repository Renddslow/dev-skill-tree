import styled from 'styled-components';

import Box from './components/Box';

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  justify-content: start;
  width: max-content;
  margin: 24px auto 64px;
  align-items: start;
`;

function App() {
  return (
    <div>
      <Row>
        <Box>Architect</Box>
        <Box>Lead Dev</Box>
        <Box>Dev Manager</Box>
      </Row>
      <Row>
        <Box>Sr Dev</Box>
      </Row>
      <Row>
        <Box>Developer (Mid-level)</Box>
      </Row>
      <Row>
        <Box skill>React</Box>
        <Box skill>JS (ES6+)</Box>
      </Row>
      <Row>
        <Box skill>Basic CSS</Box>
        <Box skill>HTML</Box>
        <Box skill>Markdown</Box>
      </Row>
      <Row>
        <Box>Jr Dev</Box>
        <Box>Dev Intern</Box>
      </Row>
    </div>
  );
}

export default App;
