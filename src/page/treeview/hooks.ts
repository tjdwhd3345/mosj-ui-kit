import { cloneDeep } from "lodash";
import { useState } from "react";
import { Item } from "../../components/treeView/TreeView";

function createNode(): Item {
  return { title: "", value: "", depth: 1, children: [] };
}
export function useTreeView(
  data: Item[]
): [
  data: Item[],
  addNodeHandler: () => void,
  selectNodeHandler: (node: Item) => void,
  updateNodeHandler: (node: Item, value: string) => void
] {
  const [treeData, setTreeData] = useState(data);
  const [selectedNode, setSelectedNode] = useState<Item | null>(null);

  const addNodeHandler = () => {
    // 선택된 노드가 없으면 최상위 depth에 노드 하나 추가
    // 선택된 노드가 있으면 재귀호출로 해당 노드를 찾아서 children으로 노드 추가
    const node = createNode();
    const copiedTreeData = cloneDeep(treeData);
    const dfs = (items: Item[]) => {
      if (selectedNode) {
        for (const item of items) {
          if (item.value === selectedNode.value) {
            item.children.push({ ...node, depth: selectedNode.depth + 1 });
            return true;
          }
          if (item.children.length) {
            const isAdded = dfs(item.children);
            if (isAdded) return;
          }
        }
      } else {
        items.push(node);
        return;
      }
    };
    dfs(copiedTreeData);
    setTreeData(copiedTreeData);
  };

  const updateNodeHandler = (node: Item, value: string) => {
    // 클릭한 노드의 정보를 전달받아서, 해당 노드의 depth 까지 재귀 탐색?
    // 클릭한 노드 정보(selectedNode) 도 업데이트 해줘야 함
    const copiedTreeData = cloneDeep(treeData);
    const copiedNode = cloneDeep(node);
    const dfs = (items: Item[]) => {
      for (const item of items) {
        if (item.value === copiedNode.value) {
          item.value = value;
          item.title = value;
          setSelectedNode(item);
          return true;
        }
        if (item.children.length) {
          if (item.children[0].depth > copiedNode.depth) return; // 선택한 노드보다 깊은 depth는 탐색할 필요없음.
          const isUpdated = dfs(item.children);
          if (isUpdated) return;
        }
      }
    };
    dfs(copiedTreeData);
    setTreeData(copiedTreeData);
  };

  const selectNodeHandler = (node: Item) => {
    // 선택한 노드를 selectedNode state에 담아놓음
    setSelectedNode(node);
  };

  console.log("## useTreeView", { treeData, selectedNode });
  return [treeData, addNodeHandler, selectNodeHandler, updateNodeHandler];
}
