import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import country from "../mock-details.json";

export default function Details(){
    const navigate = useNavigate();

    return(
        <div className="container px-4 px-lg-0 " style={{ padding: "1rem 0", marginTop: "100px", }}>
            <Button startIcon={<ArrowBackIcon />} onClick={()=> navigate('/')} sx={{ backgroundColor: "white", color: "black" , boxShadow: "0 3px 10px -7px #858585"}}> Back</Button>
            <div className="my-3 py-5 row justify-content-between align-items-center">
                <img src={country.flags.svg} alt={country.name.common} className="col col-lg-5 mb-5 mb-lg-0" style={{height: "400px", objectFit: "cover",}} ></img>
                <div className="col-lg-6">
                    <h2 className="fs-2 fw-bold">{country.name.official}</h2>
                    <div className="row justify-content-between">
                        <div className="my-3 col-lg-6">
                            <p className="my-2"><strong className="fw-semibold">Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</p>
                            <p className="my-2"><strong className="fw-semibold">Population:</strong> {country.population.toLocaleString()}</p>
                            <p className="my-2"><strong className="fw-semibold">Region:</strong> {country.region}</p>
                            <p className="my-2"><strong className="fw-semibold">Sub Region:</strong> {country.subregion}</p>
                            <p className="my-2"><strong className="fw-semibold">Capital:</strong> {country.capital}</p>
                        </div>

                        <div className="my-3 col-lg-6">
                            <p className="my-2"><strong className="fw-semibold">Top Level Domain:</strong> {country.tld}</p>
                            <p className="my-2"><strong className="fw-semibold">currencies:</strong> {Object.values(country.currencies).map(cur => cur.name).join(",")}</p>
                            <p className="my-2"><strong className="fw-semibold">Languages:</strong> {Object.values(country.languages).join(", ")}</p>
                        </div>

                        <div className="row align-items-center my-3 ">
                            <div className="col-lg-3 mb-3 mb-lg-0"><strong className="fw-semibold">Border Countries:</strong></div>
                            <div className="borderBtns col-lg-9 d-flex flex-wrap justify-content-start gap-2" id="borderBtns"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    )
}