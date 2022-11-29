import {Box, Typography} from "@mui/material";
import styled from "styled-components";

const RemoveBtn = styled(Typography)`
width: 30px;
height: 28px;
padding: 4px 5px;
font-size: 15px;
font-weight: 800;
background-color: #f8f9fa;
text-align: center;
border-radius: 20px;
: hover{
    cursor: pointer;
}
`;

export default function ListItem({src, name, removeItem}) {

    return <Box display={"flex"} alignItems={"center"} mb={1} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
            <img style={{height: '20px', width: '33px', borderRadius: '5px', objectFit: 'cover'}} src={src} alt={src}/>
            <Typography fontSize={'14px'} m={0} ml={'5px'} fontWeight={'600'}>
                {name}
            </Typography>
        </Box>
        <RemoveBtn variant={'span'}  onClick={() => removeItem(name)}>
            X
        </RemoveBtn>
    </Box>;
}