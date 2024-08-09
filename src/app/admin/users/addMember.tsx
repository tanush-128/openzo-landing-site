import { useState } from "react";
import { sendInvitation } from "../blog/action";
// import { sendInvitation } from "../lib/invite"; // Adjust the import path as needed

const AddMemberModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (loading) return;

    setLoading(true);

    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("role", role);

    try {
      await sendInvitation(formData);
      setEmail("");
      setRole("USER");
      setLoading(false);
      onClose();
    } catch (error) {
      console.error("Error sending invitation", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="rounded-lg bg-white p-4 lg:min-w-96 lg:px-6">
        <h2 className="mb-4 text-xl font-bold">Add Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-2 py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="mb-2 block">
              Role
            </label>
            <select
              id="role"
              className="w-full border px-2 py-1"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="ADMIN">Admin</option>
              <option value="EDITOR">Editor</option>
              <option value="USER">User</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 rounded border px-4 py-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              {loading ? <CircularProgress /> : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberModal;

const CircularProgress = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
    </div>
  );
};
