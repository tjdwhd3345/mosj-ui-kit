import React from "react";
import Button from "../../components/button/Button";
import TreeView, { Item } from "../../components/treeView/TreeView";
import { useTreeView } from "./hooks";

// const item: Item[] = [
//   {
//     title: "item1",
//     value: "item1",
//     children: [
//       { title: "item1-1", value: "item1-1", children: [] },
//       {
//         title: "item1-2",
//         value: "item1-2",
//         children: [{ title: "item1-2-1", value: "item1-2-1", children: [] }],
//       },
//     ],
//   },
//   {
//     title: "item2",
//     value: "item2",
//     children: [
//       { title: "item2-1", value: "item2-1", children: [] },
//       {
//         title: "item2-2",
//         value: "item2-2",
//         children: [{ title: "item2-2-1", value: "item2-2-1", children: [] }],
//       },
//     ],
//   },
//   { title: "item3", value: "item3", children: [] },
//   {
//     title: "item4",
//     value: "item4",
//     children: [{ title: "item4-1", value: "item4-1", children: [] }],
//   },
//   { title: "item5", value: "item5", children: [] },
// ];

function TreeViewPage() {
  const [treeData, addNodeHandler, selectNodeHandler, updateNodeHandler] = useTreeView([]);
  const onAddNodeHandler = () => {
    addNodeHandler();
  };
  const onRemoveNodehandler = () => {
    //
  };

  const onChange = (node: Item, value: string) => {
    updateNodeHandler(node, value);
  };
  const onClick = (node: Item) => {
    selectNodeHandler(node);
  };

  console.log({ treeData });
  return (
    <section>
      <header>
        <Button text="+" onClick={onAddNodeHandler} />
        <Button text="-" onClick={onRemoveNodehandler} />
      </header>
      <main>
        <TreeView>
          <TreeView.Group treeData={treeData}>
            {({ node }) => {
              return (
                <TreeView.Node node={node} onClick={onClick} onChange={onChange}>
                  {/* <label onClick={onClick}>
                    {node.title}
                    <input type="text" value={value} onChange={onChange} />
                  </label> */}
                </TreeView.Node>
              );
            }}
          </TreeView.Group>
        </TreeView>
      </main>
    </section>
  );
}

export default TreeViewPage;
