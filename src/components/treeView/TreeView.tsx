import React from "react";

export type Item = {
  title: string;
  value: string;
  depth: number;
  children: Item[];
};

type TreeNode = {
  node: Item;
  children?: React.ReactNode;
  onChange?: (node: Item, value: string) => void;
  onClick?: (node: Item) => void;
};
function TreeNode(props: TreeNode) {
  const { node } = props;
  // const [value, setValue] = useState(node.value);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // setValue(() => value);
    if (props.onChange) props.onChange(node, value);
  };
  const onClick = (/* e: React.MouseEvent<HTMLLabelElement> */) => {
    if (props.onClick) props.onClick(node);
  };
  return (
    <li className="treeview__listitem">
      <div className="treeview__label">
        <label onClick={onClick}>
          {node.title}
          <input type="text" value={node.value} onChange={onChange} />
        </label>
      </div>
    </li>
  );
}

type TreeGroup = {
  treeData: Item[];
  children: ({ node, index }: { node: Item; index: number }) => React.ReactNode;
};
function TreeGroup({ treeData, children }: TreeGroup) {
  return (
    <ul className="treeview__group">
      {treeData.map((node, index) => {
        return (
          <React.Fragment key={index}>
            {/* <TreeNode key={`${i}_${node.title}`} node={node} /> */}
            {children({ node, index })}
            {node.children.length ? (
              <TreeGroup key={`${index}_${node.title}_children`} treeData={node.children}>
                {children}
              </TreeGroup>
            ) : null}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

type TreeViewProps = {
  // data: Item[];
  children: React.ReactNode;
};
function TreeView(props: TreeViewProps) {
  console.log("TreeView", { props });
  return (
    <div className="treeview__wrapper">
      <div className="treeview__header">TreeView Component</div>
      <div className="treeview__content">
        {/* <TreeGroup treeData={props.data} /> */}
        {props.children}
      </div>
    </div>
  );
}

TreeView.Group = TreeGroup;
TreeView.Node = TreeNode;

export default TreeView;
