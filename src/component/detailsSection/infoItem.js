import styled from "styled-components";

const StyledLabel = styled.label`
font-weight: 600;
margin-bottom: 12px;
`;

const StyledSpan = styled.span`
font-weight: 300;
`;

export default function InfoItem({label, value}) {


    return <StyledLabel>
        {label}
        <StyledSpan> {value}</StyledSpan>
    </StyledLabel>
}