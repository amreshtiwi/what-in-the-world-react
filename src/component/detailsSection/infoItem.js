export default function InfoItem({label, value}) {

    const labelStyle = {marginBottom: '12px', fontWeight: '600'};

    return <label style={labelStyle}>
        {label}
        <span> {value}</span>
    </label>
}