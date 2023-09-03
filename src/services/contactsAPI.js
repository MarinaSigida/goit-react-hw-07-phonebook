import axios from 'axios';

const BASE_URL = 'https://64f34f15edfa0459f6c67afa.mockapi.io/'; 


export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};


export const addContact = async (contact) => {
  const response = await axios.post(`${BASE_URL}/contacts`, contact);
  return response.data;
};


export const deleteContact = async (contactId) => {
  const response = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  return response.data;
};
