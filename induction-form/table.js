export function createTable(data = []) {
    const table = document.createElement('table');

    function createTableHeader(fields) {
        const tableHeader = document.createElement('thead');
        const tableHeaderRow = document.createElement('tr');
        fields.forEach(field => {
            const tableHead = document.createElement('th')
            tableHead.innerText = field;
            tableHeaderRow.appendChild(tableHead)
        });

        tableHeader.append(tableHeaderRow);
        return tableHeader;
    }

    const header = createTableHeader(Object.keys(data[0]));
    table.appendChild(header);

    function creaTeTableBody(data) {
        const tableBody = document.createElement('tbody');
        data.forEach(row => {
            const tableRow = document.createElement('tr');
            Object.values(row).forEach(value => {
                const isBolean = typeof value === 'boolean';
                const tableBox = document.createElement('td')
                tableBox.innerText = isBolean ? (value ? 'Yes' : 'No') : value;
                tableRow.appendChild(tableBox)
            });
            tableBody.appendChild(tableRow);
        });
        return tableBody;
    }

    const tbody = creaTeTableBody(data);
    table.appendChild(tbody);

    return table;
}