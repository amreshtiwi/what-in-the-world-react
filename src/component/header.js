import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';


export default function Header(){
    return (
        <Box sx={{
            position: 'fixed',
            backgroundColor: 'white',
            width: '100%',
            boxShadow: '0 1px 10px -7px #858585',
            zIndex: 2,
            fontSize: '20px',
            top: 0,
            height: '80px'
        }}>
            <Box className="header-container align-items-center container d-flex justify-content-between px-3 py-4 px-lg-0">
                <Box sx={{ fontWeight: 800,  }}>Where in the world?</Box>
                <Box>
                    <Button startIcon={<NightlightOutlinedIcon />} color='inherit'> Dark Mode
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}