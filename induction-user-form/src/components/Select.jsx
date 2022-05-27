export default function Select({ placeHolder = "Select", className, options = [], selected, onChange }) {
    return <select value={selected} onChange={onChange} className={className}>
        <option value="">{placeHolder}</option>
        {options.map((opt, key) => {
            return <option key={key} value={opt.value}>
                {opt.label}
            </option>
        })}
    </select>
}