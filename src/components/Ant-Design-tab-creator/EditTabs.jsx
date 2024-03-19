import React, { useState, useEffect, useRef } from 'react';

const EditableInput = ({ initialValue, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);


  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  
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
      autoFocus
    />
  ) : (
    <div onDoubleClick={() => setIsEditing(true)} style={{ cursor: 'pointer', minWidth: '20px', minHeight: '20px', display: 'inline-block' }}>
      {value || 'Edit'}
    </div>
  );
};

export default EditableInput;

