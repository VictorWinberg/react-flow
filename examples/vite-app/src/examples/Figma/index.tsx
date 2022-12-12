import ReactFlow, {
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Node,
  Edge,
  useKeyPress,
  SelectionMode,
} from 'reactflow';

const MULTI_SELECT_KEY = ['Meta', 'Shift'];

const initialNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 }, className: 'light' },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 }, className: 'light' },
  { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 }, className: 'light' },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 200 }, className: 'light' },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
];

const BasicFlow = () => {
  const spaceBarPressed = useKeyPress('Space');

  return (
    <ReactFlow
      defaultNodes={initialNodes}
      defaultEdges={initialEdges}
      selectionOnDrag
      selectionMode={SelectionMode.Partial}
      panOnDrag={spaceBarPressed ? true : 'RightClick'}
      panOnScroll
      zoomActivationKeyCode="Meta"
      multiSelectionKeyCode={MULTI_SELECT_KEY}
      fitView
      selectNodesOnDrag={false}
    >
      <Background variant={BackgroundVariant.Cross} />
    </ReactFlow>
  );
};

export default function App() {
  return (
    <ReactFlowProvider>
      <BasicFlow />
    </ReactFlowProvider>
  );
}
