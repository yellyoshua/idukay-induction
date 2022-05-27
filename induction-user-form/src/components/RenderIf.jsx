export default function RenderIf({children, condition}) {
    if (condition) return <>{children}</>
    return null;
}