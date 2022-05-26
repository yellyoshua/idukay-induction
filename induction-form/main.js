import './style.css'
import { createTable } from "./table"
import { createForm } from "./form"
import randomId from "./random-id"

const app = document.getElementById('app');

const users = [];

const countries = [
  {
    label: 'Ecuador',
    value: 'Ecuador',
  },
  {
    label: 'Italy',
    value: 'Italy',
  }
];

const formFields = [
  { label: 'Name', id: 'name',  selector: 'name-id', type: 'text' },
  { label: 'Country', id: 'country', selector: 'country-id', type: 'select', options: countries },
  { label: 'Is Iron Man', id: 'is-iron-man', selector: 'ironman-id', type: 'radio' },
  { type: "actions", actions: [
    {
      label: "Update",
      handler: () => {
        console.log("click");
      }
    }
  ] }
];

const formRef = document.createElement('form');
const formTitle = document.createElement('h2');
formTitle.innerText = 'Person Form';
const tableRef = document.createElement('table');
createTable(users, tableRef);

const onFormSubmit = (state, resetForm) => {
  const id = randomId();
  users.push({ id, ...state });
  createTable(users, tableRef);
  // resetForm();
};

createForm(
  formRef,
  formFields,
  onFormSubmit,
  { formTitle, submitButtonText: "Save" },
);

const container = document.createElement('div');
container.classList.add('container');

container.appendChild(formRef);
container.appendChild(tableRef);

app.appendChild(container);