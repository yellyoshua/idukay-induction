const countries = [
	{ value: "US", label: "United States" },
	{ value: "CA", label: "Canada" },
	{ value: "MX", label: "Mexico" },
	{ value: "EC", label: "Ecuador" },
];

export default function CountriesSelector({ className, selected, onChange }) {
	return <select value={selected} onChange={onChange} className={className}>
			<option value="">Select country</option>
			{countries.map((opt, key) => {
					return <option key={key} value={opt.value}>
							{opt.label}
					</option>
			})}
	</select>
}