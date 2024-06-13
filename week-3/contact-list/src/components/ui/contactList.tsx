"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchContacts, addContact } from "@/app/api";
import Modal from "@/components/ui/modal";

interface Contacts {
  id: number;
  name: string;
  number: number;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts[]>([]);

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleModalAddContact = async (name: string, number: string) => {
    const newContacts = await addContact({
      name,
      number,
    });
    console.log(newContacts);
    setContacts([...contacts, newContacts]);
    closeModal();
  };

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
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} --- {contact.number}
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
