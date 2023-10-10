// config.js
export const formFields = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'fullName',
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'tel',
    label: 'Phone',
    name: 'phone',
    validation: {
      required: true,
      pattern: '[0-9]*',
    },
  },
  {
    type: 'select',
    label: 'Interest',
    name: 'interest',
    validation: {
      required: true,
    },
    options: ['Mountains', 'Oceans', 'Deserts'],
  },
  {
    type: 'text',
    label: 'Description',
    name: 'description',
    validation: {
      maxLength: 500,
    },
  },
  {
    type: 'checkbox-group',
    label: 'Travel',
    name: 'travel',
    validation: {
      required: true,
    },
    options: ['Car', 'Bus', 'Train'],
  },
];