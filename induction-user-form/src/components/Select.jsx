export default function Select({ placeHolder = "Select", options = [], selected, onChange }) {
    return <select value={selected} onChange={onChange} className="custom-input-select">
        <option value="">{placeHolder}</option>
        {options.map((opt, key) => {
            return <option key={key} value={opt.value}>
                {opt.label}
            </option>
        })}
    </select>
}