"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchContacts } from "@/app/api";

interface Contacts {
  id: number;
  name: string;
  number: number;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts[]>([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const contacts = await fetchContacts();
    console.log(contacts);
    setContacts(contacts);
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
          //   value={}
          //   onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Search contact..."
          style={{ marginRight: "10px" }}
        />
        <Button>+</Button>
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
