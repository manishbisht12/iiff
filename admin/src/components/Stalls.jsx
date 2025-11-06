import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Stalls = ({ darkMode }) => {
  const [stalls, setStalls] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [editingStall, setEditingStall] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editData, setEditData] = useState({ number: "", size: "", status: "available" });

  useEffect(() => {
    fetchStalls();
  }, []);

  const fetchStalls = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/stalls");
      setStalls(data);
    } catch (error) {
      toast.error("Error loading stalls: " + (error.response?.data?.message || error.message));
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectedAll(checked);
    const newSel = {};
    stalls.forEach((stall) => {
      newSel[stall.number] = checked;
    });
    setSelectedRows(newSel);
  };

  const handleSelectRow = (stallNumber) => (e) => {
    const checked = e.target.checked;
    setSelectedRows((prev) => {
      const updated = { ...prev, [stallNumber]: checked };
      const allChecked = stalls.every((s) => updated[s.number]);
      setSelectedAll(allChecked);
      return updated;
    });
  };

  const handleEdit = (stall) => {
    setEditingStall(stall.number);
    setEditData({ ...stall });
    setIsAdding(false);
  };

  // Confirmation toast content component
  const DeleteConfirmToast = ({ stallNumber, onConfirm, onCancel }) => (
    <div style={{ color: darkMode ? "white" : "black" }}>
      <div>Are you sure you want to delete stall {stallNumber}?</div>
      <div style={{ marginTop: 10, textAlign: "right" }}>
        <button
          onClick={() => {
            onConfirm();
            toast.dismiss();
          }}
          style={{
            marginRight: 8,
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => {
            onCancel();
            toast.dismiss();
          }}
          style={{
            backgroundColor: "#9ca3af",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const handleDelete = (stallNumber) => {
    toast.info(
      <DeleteConfirmToast
        stallNumber={stallNumber}
        onConfirm={() => performDelete(stallNumber)}
        onCancel={() => {}}
      />,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const performDelete = async (stallNumber) => {
    try {
      const stallToDelete = stalls.find((s) => s.number === stallNumber);
      if (!stallToDelete) throw new Error("Stall not found");

      await axios.delete(`http://localhost:5000/api/stalls/${stallToDelete._id}`);
      setStalls((prev) => prev.filter((s) => s.number !== stallNumber));
      setSelectedRows((prev) => {
        const newSel = { ...prev };
        delete newSel[stallNumber];
        return newSel;
      });
      if (editingStall === stallNumber) {
        setEditingStall(null);
      }
      toast.success(`Stall ${stallNumber} deleted successfully`);
    } catch (error) {
      toast.error("Delete stall error: " + (error.response?.data?.message || error.message));
    }
  };

  const handleUpdate = async () => {
    try {
      const stallToUpdate = stalls.find((s) => s.number === editingStall);
      if (!stallToUpdate) throw new Error("Stall not found");

      const { data } = await axios.put(`http://localhost:5000/api/stalls/${stallToUpdate._id}`, editData);
      setStalls((prev) =>
        prev.map((stall) =>
          stall.number === editingStall ? data : stall
        )
      );
      setEditingStall(null);
      toast.success(`Stall ${data.number} updated successfully`);
    } catch (error) {
      toast.error("Update stall error: " + (error.response?.data?.message || error.message));
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingStall(null);
    setEditData({ number: "", size: "", status: "available" });
  };

  const handleAddSubmit = async () => {
    if (!editData.number.trim()) {
      toast.error("Stall number is required");
      return;
    }
    if (stalls.some((stall) => stall.number === editData.number)) {
      toast.error("Stall number must be unique");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/stalls", editData);
      setStalls((prev) => [...prev, data]);
      setIsAdding(false);
      toast.success(`Stall ${data.number} added successfully`);
    } catch (error) {
      toast.error("Add stall error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* styles same as before */}
      <style>{`
        .stalls-container {
          position: relative;
          margin-bottom: 1rem;
        }
        .add-btn {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          transition: background-color 0.3s ease;
          z-index: 10;
        }
        .add-btn:hover {
          background-color: #1d4ed8;
        }
        .stalls-table-container {
          border-radius: 8px;
          overflow-x: auto;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          padding-top: 48px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 12px;
          border: 1px solid ${darkMode ? "#374151" : "#e5e7eb"};
          text-align: center;
        }
        th {
          background-color: ${darkMode ? "#1f2937" : "#f9fafb"};
        }
        .action-btn {
          padding: 6px 12px;
          margin: 0 4px;
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        .edit-btn {
          background-color: #3b82f6;
        }
        .delete-btn {
          background-color: #ef4444;
        }
        .status-badge {
          padding: 4px 16px;
          border-radius: 16px;
          display: inline-block;
          font-weight: 600;
          min-width: 80px;
          text-align: center;
          backdrop-filter: blur(4px);
        }
        .available-badge {
          background-color: rgba(173, 216, 130, 0.2);
          color: #0284c7;
        }
        .booked-badge {
          color: #dc2626;
          background-color: rgba(220, 38, 38, 0.1);
        }
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.3);
          z-index: 998;
        }
        .edit-panel {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #ffffff;
          padding: 40px 50px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          z-index: 999;
          min-width: 600px;
          max-width: 90vw;
        }
        .edit-panel label {
          display: block;
          margin-bottom: 8px;
          font-weight: 700;
          color: #222;
        }
        .edit-panel input,
        .edit-panel select {
          width: 100%;
          padding: 10px 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
          font-size: 16px;
        }
        .update-btn {
          background-color: #4f06f9e5;
          border: none;
          padding: 14px 20px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          width: 100%;
        }
        .update-btn:hover {
          background-color: #2811d8;
        }
        .close-btn {
          background: transparent;
          border: none;
          color: #555;
          font-size: 28px;
          position: absolute;
          top: 12px;
          right: 20px;
          cursor: pointer;
          font-weight: 700;
        }
        .no-data-message {
          text-align: center;
          margin-top: 60px;
          color: ${darkMode ? "#d1d5db" : "#374151"};
          font-size: 18px;
          font-weight: 600;
        }
      `}</style>

      <div className="stalls-container">
        <button className="add-btn" onClick={handleAddNew}>Add Stall</button>

        {(editingStall || isAdding) && (
          <div
            className="overlay"
            onClick={() => {
              setEditingStall(null);
              setIsAdding(false);
            }}
          />
        )}

        {stalls.length === 0 ? (
          <div className="no-data-message">No stalls available. Please add a stall.</div>
        ) : (
          <div className={`stalls-table-container ${darkMode ? "dark" : "light"}`}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" checked={selectedAll} onChange={handleSelectAll} />
                  </th>
                  <th>Stall No.</th>
                  <th>Size</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stalls.map((stall) => (
                  <tr key={stall.number}>
                    <td>
                      <input
                        type="checkbox"
                        checked={!!selectedRows[stall.number]}
                        onChange={handleSelectRow(stall.number)}
                      />
                    </td>
                    <td>{stall.number}</td>
                    <td>{stall.size}</td>
                    <td>
                      <div className={`status-badge ${stall.status === "booked" ? "booked-badge" : "available-badge"}`}>
                        {stall.status.charAt(0).toUpperCase() + stall.status.slice(1)}
                      </div>
                    </td>
                    <td>
                      <button className="action-btn edit-btn" onClick={() => handleEdit(stall)}>Edit</button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(stall.number)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {(editingStall || isAdding) && (
        <div className="edit-panel">
          <button className="close-btn" onClick={() => { setEditingStall(null); setIsAdding(false); }}>&times;</button>

          <label>Stall Number</label>
          <input
            type="text"
            value={editData.number}
            onChange={(e) => setEditData((prev) => ({ ...prev, number: e.target.value }))}
            disabled={!!editingStall}
          />

          <label>Size</label>
          <input
            type="text"
            value={editData.size}
            onChange={(e) => setEditData((prev) => ({ ...prev, size: e.target.value }))}
          />

          <label>Status</label>
          <select
            value={editData.status}
            onChange={(e) => setEditData((prev) => ({ ...prev, status: e.target.value }))}
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>

          {editingStall ? (
            <button className="update-btn" onClick={handleUpdate}>
              Update Stall
            </button>
          ) : (
            <button className="update-btn" onClick={handleAddSubmit}>
              Add Stall
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Stalls;
