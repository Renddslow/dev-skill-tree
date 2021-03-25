const jr = [
  {
    id: 'jr-1',
    type: 'box',
    data: { label: 'JS', type: 'skill', info: true },
    position: { x: 250, y: 500 },
  },
  {
    id: 'jr-2',
    type: 'box',
    data: { label: 'TypeScript', type: 'skill', info: true },
    position: { x: 250, y: 350 },
  },
  {
    id: 'jr-3',
    type: 'box',
    data: { label: 'React', type: 'skill', info: true },
    position: { x: 350, y: 350 },
  },
  {
    id: 'jr-4',
    type: 'box',
    data: { label: 'styled-components', type: 'skill' },
    position: { x: 450, y: 200 },
  },
  { id: 'jr-5', type: 'box', data: { label: 'HTML', type: 'skill' }, position: { x: 350, y: 500 } },
  {
    id: 'jr-6',
    type: 'box',
    data: { label: 'CSS', type: 'skill', info: true },
    position: { x: 450, y: 500 },
  },
  { id: 'jr-8', type: 'box', data: { label: 'WedgeKit', type: 'skill' }, position: { x: 450, y: 75 } },
  {
    id: 'jr-9',
    type: 'box',
    data: { label: 'Markdown', type: 'skill' },
    position: { x: 550, y: 500 },
  },
  {
    id: 'jr-10',
    type: 'box',
    data: { label: 'Unit-Testing', type: 'skill', info: true },
    position: { x: 250, y: 200 },
  },
  {
    id: 'jr-11',
    type: 'box',
    data: { label: 'Continuous Integration', type: 'skill', info: true },
    position: { x: 650, y: 75 },
  },
  {
    id: 'jr-12',
    type: 'box',
    data: { label: 'Yarn/NPM', type: 'skill', info: true },
    position: { x: 570, y: 350 },
  },
  {
    id: 'jr-13',
    type: 'box',
    data: { label: 'git', type: 'skill', info: true },
    position: { x: 650, y: 500 },
  },
  {
    id: 'jr-14',
    type: 'box',
    data: { label: 'Jr Dev', type: 'role' },
    position: { x: 400, y: 650 }
  },
  {
    id: 'jr-15',
    type: 'box',
    data: { label: 'Dev Intern', type: 'role' },
    position: { x: 500, y: 650 }
  },
  { id: 'e1-2', source: 'jr-1', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-2' },
  { id: 'e1-3', source: 'jr-1', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-3' },
  { id: 'e3-4', source: 'jr-3', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-4' },
  { id: 'e5-3', source: 'jr-5', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-3' },
  { id: 'e6-4', source: 'jr-6', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-4' },
  { id: 'e4-8', source: 'jr-4', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-8' },
  { id: 'e12-11', source: 'jr-12', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-11' },
  { id: 'e13-11', source: 'jr-13', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-11' },
];

export default jr;
