"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  updateContact,
  deleteContact,
  fetchContacts,
  addContact,
} from "@/app/api";
import Modal from "@/components/ui/modal";
import EditModal from "@/components/ui/editModal";

interface Contacts {
  id: number;
  name: string;
  number: number;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [editData, setEditData] = useState({ data1: "", data2: "" });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const contacts = await fetchContacts();
    setContacts(contacts);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = (data: any) => {
    setEditData(data);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleModalAddContact = async (name: string, number: string) => {
    const newContacts = await addContact({
      name,
      number,
    });
    setContacts([...contacts, newContacts]);
    closeModal();
  };

  const handleModalEditContact = async (
    id: number,
    name: string,
    number: string
  ) => {
    const newContacts = await updateContact({
      id,
      name,
      number,
    });
    if (newContacts) {
      // setContacts([...contacts, newContacts]);
      loadContacts();
    }
    closeEditModal();
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = async (contactId: number) => {
    const removeContact = await deleteContact({
      contactId,
    });
    // console.log(removeContact);
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const filteredData = contacts.filter((name) =>
    name.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
        CONTACT LIST
      </h1>
      <div style={{ display: "inline-flex" }}>
        {" "}
        <Input
          type="text"
          placeholder="Search contact..."
          value={filter}
          onChange={handleFilterChange}
          style={{ marginRight: "10px" }}
        />
        <Button onClick={openModal}>+</Button>
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          handleModalAddContact={handleModalAddContact}
        />
      </div>
      <div>
        {/* <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} --- {contact.number}
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </li>
          ))}
        </ul> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name} </td>
                <td>{contact.number}</td>
                <td>
                  <Button
                    variant="outline"
                    onClick={() =>
                      openEditModal({
                        data: contact.id,
                        data1: contact.name,
                        data2: contact.number,
                      })
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteContact(contact.id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <EditModal
          isOpen={editModalOpen}
          closeModal={closeEditModal}
          handleModalAddContact={handleModalEditContact}
          data={editData}
        />
      </div>
    </div>
  );
};

export default ContactList;
