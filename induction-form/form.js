import { deepClone } from "./utils";

function createTextField(field, state, onFieldUpdate) {
    const text = document.createElement('input');
    text.classList.add("custom-input-select")
    text.setAttribute("id", field.selector);
    text.setAttribute("name", field.id);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", field.label);
    state[field.id] ??= "";
    text.value = state[field.id];

    text.addEventListener('input', function(e) {
        onFieldUpdate(field.id, e.target.value);
    });

    return text;
}

function createSelectField(field, state, updateField) {
    const select = document.createElement('select');
    select.setAttribute("id", field.selector);
    select.setAttribute("name", field.id);
    select.setAttribute("type", "select");
    select.setAttribute("placeholder", field.label);
    select.classList.add("custom-input-select");
    state[field.id] ??= "";
    select.value = state[field.id];

    const optionIndicator = document.createElement('option');
    optionIndicator.setAttribute("value", '');
    optionIndicator.innerText = "Select a option";
    select.appendChild(optionIndicator);

    field.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute("value", option.value);
        optionElement.innerText = option.label;
        select.appendChild(optionElement);
    });

    select.addEventListener('input', function(e) {
        updateField(field.id, e.target.value);
    });

    return select;
}

function createRadioField(field, state, updateField) {
    const trueRadio = document.createElement('input');
    trueRadio.setAttribute("id", field.selector);
    trueRadio.setAttribute("name", field.id);
    trueRadio.setAttribute("type", "radio");
    state[field.id] ??= false;
    trueRadio.checked = state[field.id] || false;

    const falseRadio = document.createElement('input');
    falseRadio.setAttribute("id", field.selector);
    falseRadio.setAttribute("name", field.id);
    falseRadio.setAttribute("type", "radio");
    falseRadio.checked = !state[field.id] || false;

    trueRadio.addEventListener('click', function() {
        updateField(field.id, true);
    });

    falseRadio.addEventListener('click', function() {
        updateField(field.id, false);
    });


    const trueRadioBox = document.createElement('div');
    trueRadioBox.classList.add("radio-box");
    trueRadioBox.innerHTML = "Yes ";

    const falseRadioBox = document.createElement('div');
    falseRadioBox.classList.add("radio-box");
    falseRadioBox.innerHTML = "No ";

    trueRadioBox.appendChild(trueRadio);
    falseRadioBox.appendChild(falseRadio);

    const radios = document.createElement('div');
    radios.classList.add("radios-group");

    const radiosContainer = document.createElement('div');
    radiosContainer.classList.add("radios-container");

    const radioLabel = document.createElement('p');
    radioLabel.classList.add("radio-label");
    radioLabel.innerText = field.label;

    radiosContainer.appendChild(trueRadioBox);
    radiosContainer.appendChild(falseRadioBox);

    radios.appendChild(radioLabel);
    radios.appendChild(radiosContainer);

    return radios;
}

function createActionsField(field) {
    const container = document.createElement("div");

    field.actions.forEach((action) => {
        const editAction = document.createElement("button");
        editAction.classList.add("edit-action");
        editAction.innerHTML = action.label;
        editAction.addEventListener("click", () => action.handler(field));
        container.appendChild(editAction);
    });


    return container;
}

const fieldBuilder = (onFieldUpdate) => {
    const state = {};

    const updateField = (field_id, value) => {
        state[field_id] = value;
        onFieldUpdate(state);
    }

    return {
        "text": (field) => createTextField(field, state, updateField),
        "select": (field) => createSelectField(field, state, updateField),
        "radio": (field) => createRadioField(field, state, updateField),
        "actions": (field) => createActionsField(field),
    }
}

function createFormField(field, fields_constructor) {
    const inputField = fields_constructor[field.type](field);

    const fieldBox = document.createElement('div');
    fieldBox.classList.add('field-box');
    fieldBox.appendChild(inputField);
    return fieldBox;
}

export function createForm(form, fields = [], onSubmitForm, formSettings = {}) {
    let formState = {};

    function resetForm() {
        formState = {};
        form.innerHTML = "";
        createForm(form, fields, onSubmitForm, formSettings);
    }

    const fields_constructor = fieldBuilder(function (state) {
        formState = state;
    });

    form.classList.add('form-box');

    formSettings.formTitle && form.appendChild(
        formSettings.formTitle,
    );

    fields.forEach(field => {
        form.appendChild(
            createFormField(
                field,
                fields_constructor,
            ),
        );
    });

    const submitButton = document.createElement('button');
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add('submit-button');
    submitButton.innerText = formSettings.submitButtonText || 'Submit';

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex-center-center');
    buttonContainer.appendChild(submitButton);
    form.appendChild(buttonContainer);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (Object.keys(formState).length) {
            const state = deepClone(formState);
            resetForm();
            onSubmitForm(state);
        }
        resetForm();
    });
    return form;
}
