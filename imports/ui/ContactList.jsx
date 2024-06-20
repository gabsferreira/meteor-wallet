import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
        ContactsCollection.find({}).fetch();
    }) 
    return (
        <div>
            <h1>Meteor Wallet</h1>
            {contacts?.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        <ul>
            <li>Gabs - gabs@meteor.com</li>
            <li>Gabs - gabs@meteor.com</li>
            <li>Gabs - gabs@meteor.com</li>
        </ul>
        </div>
    )
};