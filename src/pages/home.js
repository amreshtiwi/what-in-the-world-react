
import Countries from '../countries.json';
import { InputBase } from '@mui/material';
import CountryCard from '../component/card';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SelectLabels from '../component/filter';


export default function Home (){
    const keys = Object.keys(Countries);
    const cards =[];
    keys.forEach((key) => {
        cards.push(
            <CountryCard key={key} country={Countries[key]}></CountryCard>
        )
    })

    return(
        <div className="container px-4 px-lg-0" style={{ padding: "1rem 0", marginTop: "100px", }}>
            <div className="d-lg-flex justify-content-lg-between flex-lg-nowrap mx-auto align-items-center mb-lg-0 mb-5">
                <div className="bg-white col-lg-4 px-2 d-flex align-items-center shadow rounded mb-5 mb-lg-0">
                    <SearchRoundedIcon/>
                    <InputBase
                        sx={{ ml: 1, flex: 1, m: 1, p:1}}
                        placeholder="Search for a country..."
                        inputProps={{ 'aria-label': 'search for a country...' }}
                    />
                </div>

                <SelectLabels></SelectLabels>
            </div>

            <div className="mt-5 pt-5 pt-xl-0 mt-lg-5 d-lg-flex">
                <div className="bg-white d-none d-lg-block rounded shadow-sm  me-0  flex-shrink-0 pt-4 px-4 " style={{width:" 20rem", height:"62vh" , }} name="element" id="fav-section">
                    <h5 className="fw-bold">Favourites</h5>
                    <div className="d-block overflow-auto" style={{width:"100%", height:"50vh" , }}  id="fav-list" >

                    </div>
                </div>
                
                <div className="row gx-5 overflow-auto ms-0" style={{width:"100%", height:"62vh" , }}  id="countriesBody">
                    {cards}
                </div>
            </div>

        </div>
    )
    
}