import { useState } from 'react';
import ReactFlow from 'react-flow-renderer';

import Box from './components/Box';
import Tree from './components/TreeContainer';
import Modal from './components/Modal';
import jr from './trees/jr';
import dev from './trees/dev';

const addCallback = (arr, cbKey, cb) => arr.map((item) => {
  if (!item.data) return item;
  item.data[cbKey] = cb(item.data);
  return item;
});

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');


  const openModal = (data) => () => {
    setModalTitle(data.label);
    setModalOpen(true);
  };

  return (
    <Tree>
      <ReactFlow
        nodesDraggable={false}
        nodesConnectable={false}
        elements={addCallback([
          ...jr,
          ...dev,
        ], 'onInfoClick', openModal)}
        nodeTypes={{
          box: Box,
        }}
        defaultPosition={[window.innerWidth * .2, 100]}
      />
      {
        modalOpen &&
        <Modal title={modalTitle} onClose={() => setModalOpen(false)} />
      }
    </Tree>
  );
}

export default App;
