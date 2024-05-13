import FullFeaturedCrudGrid from "./KOT";
import KOT from "./KOT";
import Typography from "@mui/material/Typography";
import BOT from "./BOT";
import Divider from "@mui/material/Divider";

const KOMain = () => {

    return(

        <div>

            <Typography variant="h5">KOT Orders</Typography>
            <hr/>
            <Typography>
                <KOT/>
            </Typography>


            <Typography variant="h5" sx={{
                mt:'40px'
            }}>BOT Orders</Typography>
            <hr/>
            <Typography>
                <BOT/>
            </Typography>


        </div>
    )
}

export default KOMain;
