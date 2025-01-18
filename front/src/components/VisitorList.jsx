import { useEffect, useState } from "react";
import visitorService from "../services/visitorService";

const VisitorList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const data = await visitorService.getVisitors();
        setVisitors(data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch visitors.");
      }
    };
    fetchVisitors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await visitorService.deleteVisitor(id);
      setVisitors(visitors.filter((visitor) => visitor.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete visitor.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="visitor-list">
      <h2>Visitor List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Block</th>
            <th>Type</th>
            <th>House No</th>
            <th>Phone</th>
            <th>Vehicle No</th>
            <th>Entry Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.block}</td>
              <td>{visitor.type}</td>
              <td>{visitor.houseno}</td>
              <td>{visitor.phone}</td>
              <td>{visitor.vehno}</td>
              <td>{formatDate(visitor.date)}</td>
              <td>
                <button onClick={() => handleDelete(visitor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorList;
