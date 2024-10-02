import { Doctor } from '../features/doctors/models/doctor.model';

export const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Elm St',
      suite: 'Apt 1',
      city: 'Springfield',
      zipcode: '12345',
      geo: {
        lat: '40.7128',
        lng: '74.0060',
      },
    },
    phone: '555-1234',
    website: 'www.johndoe.com',
    company: {
      name: 'Doe Medical',
      catchPhrase: 'We care about your health',
      bs: 'Healthcare solutions',
    },
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    username: 'janesmith',
    email: 'jane.smith@example.com',
    address: {
      street: '456 Oak St',
      suite: 'Suite 200',
      city: 'Metropolis',
      zipcode: '54321',
      geo: {
        lat: '37.7749',
        lng: '122.4194',
      },
    },
    phone: '555-5678',
    website: 'www.janesmithmd.com',
    company: {
      name: 'Smith Healthcare',
      catchPhrase: 'Your health, our priority',
      bs: 'Innovative medical services',
    },
  },
];
