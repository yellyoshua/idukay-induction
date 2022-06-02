export default function ArrowSmDown({ width = 20, height = 20, color = "black" }) {
    return <svg {...{ width, height, color}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
    </svg>
}