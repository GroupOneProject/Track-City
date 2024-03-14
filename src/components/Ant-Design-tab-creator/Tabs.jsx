import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import { Input } from 'antd';

const EditableInput = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = () => {
    onChange(inputValue);
    setIsEditing(false);
  };

  return isEditing ? (
    <Input
      autoFocus
      defaultValue={inputValue}
      onBlur={handleBlur}
      onChange={(e) => setInputValue(e.target.value)}
      onPressEnter={handleBlur}
    />
  ) : (
    <div onDoubleClick={() => setIsEditing(true)}>{value}</div>
  );
};

const initialItems = [
  {
    label: 'Tab 1',
    children: 'Content of Tab 1',
    key: '1',
  }
];

const TabApp = () => {
  const [items, setItems] = useState(initialItems.map(item => ({
    ...item,
    label: (
      <EditableInput
        value={item.label}
        onChange={(newLabel) => {
          const newItems = items.map(i =>
            i.key === item.key ? { ...i, label: newLabel } : i
          );
          setItems(newItems);
        }}
      />
    ),
    children: item.children,
  })));

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default TabApp;
