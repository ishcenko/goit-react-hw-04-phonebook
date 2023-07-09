import React from 'react';
import PropTypes from 'prop-types';
import { Contacts, DeleteBtn } from './ContactList.styled';
import ContactsListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} name={name} number={number}>
            <DeleteBtn onClick={() => onDelete(id)} type="button">
              Delete
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
