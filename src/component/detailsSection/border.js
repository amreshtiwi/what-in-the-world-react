import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Border({ name, cca2 }) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/details/" + cca2)}
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 3px 10px -7px #858585",
      }}
    >
      {name}
    </Button>
  );
}
