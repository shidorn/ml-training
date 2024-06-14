import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  handleModalAddContact: (
    param: number,
    param1: string,
    param2: string
  ) => void;
  data: any;
}

const EditModal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  handleModalAddContact,
  data,
}) => {
  const [newContactName, setNewContactName] = useState<string>("");
  const [newContactNumber, setNewContactNumber] = useState<string>("");
  const [newContactId, setNewContactId] = useState<string>("");

  useEffect(() => {
    setNewContactId(data.data);
    setNewContactName(data.data1);
    setNewContactNumber(data.data2);
  }, [data.data, data.data1, data.data2]);

  if (!isOpen) return null;

  const handleEditContact = () => {
    handleModalAddContact(data.data, newContactName, newContactNumber);
    setNewContactName("");
    setNewContactNumber("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden z-10"
        style={{ width: "25%", height: "30%" }}
      >
        <div className="flex justify-end px-4 py-2">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={closeModal}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4">
          <p className="text-lg">EDIT CONTACT</p>
          <Input
            type="text"
            value={newContactName}
            onChange={(e) => setNewContactName(e.target.value)}
            style={{ marginTop: "10px" }}
          />
          <Input
            type="text"
            value={newContactNumber}
            onChange={(e) => setNewContactNumber(e.target.value)}
            placeholder="Number..."
            style={{ marginTop: "10px" }}
          />
          <Button
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto mt-4"
            onClick={handleEditContact}
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
