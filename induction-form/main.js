import './style.css'
import { createTable } from "./table"
import { createForm } from "./form"

const app = document.getElementById('app');

const table = createTable([
  {
    name: 'Jose',
    country: 'Italy',
    is_iron_man: false,
  },
  {
    name: 'Maria',
    country: 'Ecuador',
    is_iron_man: true,
  }
]);

const countries = [
  {
    label: 'Ecuador',
    value: 'ec',
  },
  {
    label: 'Italy',
    value: 'it',
  }
]

const onFormSubmit = (state) => {
  console.log(state);
};

const formTitle = document.createElement('h2');
formTitle.innerText = 'Person Form';

const form = createForm([
  { label: 'Name', id: 'name',  selector: 'name-id', type: 'text' },
  { label: 'Country', id: 'country', selector: 'country-id', type: 'select', options: countries },
  { label: 'Is Iron Man', id: 'is-iron-man', selector: 'ironman-id', type: 'radio' },
], onFormSubmit, {
  formTitle,
  submitButtonText: "Save"
});

const container = document.createElement('div');
container.classList.add('container');

container.appendChild(form);
container.appendChild(table);

app.appendChild(container);