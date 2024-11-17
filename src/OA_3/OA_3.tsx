import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IField {
  id: string;
  label: string;
  type: string;
  value: string | number;
}
const OA_3 = () => {
  const [formFields, setFormFields] = useState<IField[]>([]);
  const [formFieldLabel, setFormFieldLabel] = useState("");
  const [selectedFieldType, setSelectedFieldType] = useState("");
  const handleAddField = () => {
    if (formFieldLabel.trim() === "") return;
    const newField = {
      id: uuidv4(),
      label: formFieldLabel,
      type: selectedFieldType,
      value: "",
    };
    setFormFields([...formFields, newField]);
    setFormFieldLabel("");
  };

  const handleRemoveField = (id: string) => {
    const updatedFormFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFormFields);
  };

  const handleInputChange = (value: string | number, id: string) => {
    const updatedFormFields = formFields.map((field) => {
      return field.id === id ? { ...field, value } : field;
    });

    setFormFields(updatedFormFields);
  };

  const displayResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const initialAcc: Record<string, string | number> = {};
    const formData = formFields.reduce((acc, field) => {
      acc[field.label] = field.value;
      return acc;
    }, initialAcc);

    console.log(formData);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="value for the label"
          value={formFieldLabel}
          onChange={(e) => setFormFieldLabel(e.target.value)}
        />
        <select
          value={selectedFieldType}
          onChange={(e) => {
            setSelectedFieldType(e.target.value);
          }}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
        </select>
        <button onClick={handleAddField}>Add</button>
      </div>
      <form onSubmit={displayResult}>
        {formFields.map((field) => {
          return (
            <div key={field.id}>
              <span>{field.label}: </span>
              <input
                type={field.type}
                onChange={(e) => handleInputChange(e.target.value, field.id)}
              />
              <button onClick={() => handleRemoveField(field.id)}>
                Delete
              </button>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OA_3;
