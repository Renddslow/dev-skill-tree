import getPosition from './positions';

const jr = [
  {
    id: 'jr-1',
    type: 'box',
    data: { label: 'JS', type: 'skill', info: true },
    position: getPosition(-2, 5),
  },
  {
    id: 'jr-2',
    type: 'box',
    data: { label: 'TypeScript', type: 'skill', info: true },
    position: getPosition(-2, 4),
  },
  {
    id: 'jr-3',
    type: 'box',
    data: { label: 'React', type: 'skill', info: true },
    position: getPosition(-1, 4),
  },
  {
    id: 'jr-4',
    type: 'box',
    data: { label: 'styled-components', type: 'skill' },
    position: getPosition(0, 2.5),
  },
  { id: 'jr-5', type: 'box', data: { label: 'HTML', type: 'skill' }, position: getPosition(-1, 5) },
  {
    id: 'jr-6',
    type: 'box',
    data: { label: 'CSS', type: 'skill', info: true },
    position: getPosition(0, 5),
  },
  { id: 'jr-8', type: 'box', data: { label: 'WedgeKit', type: 'skill' }, position: getPosition(0, 1) },
  {
    id: 'jr-9',
    type: 'box',
    data: { label: 'Markdown', type: 'skill' },
    position: getPosition(1, 5),
  },
  {
    id: 'jr-10',
    type: 'box',
    data: { label: 'Unit-Testing', type: 'skill', info: true },
    position: getPosition(-2, 2.5),
  },
  {
    id: 'jr-11',
    type: 'box',
    data: { label: 'Continuous Integration', type: 'skill', info: true },
    position: getPosition(2, 1),
  },
  {
    id: 'jr-12',
    type: 'box',
    data: { label: 'Yarn/NPM', type: 'skill', info: true },
    position: getPosition(1, 2.5),
  },
  {
    id: 'jr-13',
    type: 'box',
    data: { label: 'git', type: 'skill', info: true },
    position: getPosition(2, 5),
  },
  {
    id: 'jr-14',
    type: 'box',
    data: { label: 'Jr Dev', type: 'role' },
    position: getPosition(-0.5, 6)
  },
  {
    id: 'jr-15',
    type: 'box',
    data: { label: 'Dev Intern', type: 'role' },
    position: getPosition(0.5, 6)
  },
  { id: 'jr-e1-2', source: 'jr-1', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-2' },
  { id: 'jr-e1-3', source: 'jr-1', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-3' },
  { id: 'jr-e3-4', source: 'jr-3', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-4' },
  { id: 'jr-e5-3', source: 'jr-5', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-3' },
  { id: 'jr-e6-4', source: 'jr-6', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-4' },
  { id: 'jr-e4-8', source: 'jr-4', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-8' },
  { id: 'jr-e12-11', source: 'jr-12', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-11' },
  { id: 'jr-e13-11', source: 'jr-13', targetHandle: 'bottom', sourceHandle: 'top', target: 'jr-11' },
];

export default jr;
