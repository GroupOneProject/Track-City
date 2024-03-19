import React, { useState, useEffect, useRef } from 'react';

const EditableInput = ({ initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    onSave(value);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSave(value);
      setIsEditing(false);
    }
  };

  return isEditing ? (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyPress}
    />
  ) : (
    <div onDoubleClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
      {value}
    </div>
  );
};

export default EditableInput;