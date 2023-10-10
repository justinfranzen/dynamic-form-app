// config/formConfig.js
export default [
  {
    type: 'text',
    label: 'Full Name',
    key: 'fullName',
    validation: {
      required: true,
      minLength: 3
    }
  },
  {
    type: 'tel',
    label: 'Phone',
    key: 'phone',
    validation: {
      required: true,
      pattern: /^\d{10}$/ // Example pattern for a 10-digit phone number
    }
  },
  {
    type: 'select',
    label: 'Interest',
    key: 'interest',
    options: ['Mountains', 'Oceans', 'Deserts'],
    validation: {
      required: true
    }
  },
  {
    type: 'textarea',
    label: 'Description',
    key: 'description',
    validation: {
      maxLength: 500
    }
  },
  {
    type: 'checkbox-group',
    label: 'Travel',
    key: 'travel',
    options: ['Car', 'Bus', 'Train'],
    validation: {
      required: true
    }
  }
]