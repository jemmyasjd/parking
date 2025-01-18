import  { useState } from 'react';
import visitorService from '../services/visitorService';

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    block: 'A',
    type: 'four',
    houseno: '',
    phone: '',
    vehno: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await visitorService.createVisitor(formData);
      alert('Visitor added successfully!');
      // onVisitorAdded(response.data);
      setFormData({
        name: '',
        block: 'A',
        type: 'four',
        houseno: '',
        phone: '',
        vehno: '',
      });
      // refresh the page 
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed to add visitor.');
    }
  };

  return (
    <form className="visitor-form" onSubmit={handleSubmit}>
      <h2>Add Visitor</h2>
      <input
        type="text"
        name="name"
        placeholder="Visitor Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <select name="block" value={formData.block} onChange={handleChange}>
        <option value="A">Block A</option>
        <option value="B">Block B</option>
        <option value="C">Block C</option>
        <option value="D">Block D</option>
      </select>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="two">Two Wheeler</option>
        <option value="four">Four Wheeler</option>
      </select>
      <input
        type="number"
        name="houseno"
        placeholder="House Number"
        value={formData.houseno}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="vehno"
        placeholder="Vehicle Number"
        value={formData.vehno}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Visitor</button>
    </form>
  );
};

export default VisitorForm;
