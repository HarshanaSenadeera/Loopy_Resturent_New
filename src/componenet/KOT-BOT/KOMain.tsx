import FullFeaturedCrudGrid from "./KOT";
import KOT from "./KOT";
import Typography from "@mui/material/Typography";
import BOT from "./BOT";
import Divider from "@mui/material/Divider";

const KOMain = () => {

    return(

        <div>

            <Typography variant="h5">KOT Orders</Typography>
            <Typography>
                <KOT/>
            </Typography>
            <Divider />

            <Typography variant="h5">BOT Orders</Typography>
            <Typography>
                <BOT/>
            </Typography>



        </div>
    )
}

export default KOMain;
