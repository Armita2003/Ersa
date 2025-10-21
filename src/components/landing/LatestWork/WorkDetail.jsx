import { useRouter } from "next/router";
import { LoadingIcon } from "../../../../public/Icons/LoadingIcon";
import { Appbaker } from "./Apps/Appbaker";
import { Apsy } from "./Apps/Apsy";
import { Hudu } from "./Apps/Hudu";
import { ShopeyeQ } from "./Apps/ShopeyeQ";
import { Welf } from "./Apps/Welf";
import { YatYap } from "./Apps/YatYap";

export default function WorkDetail() {
    const router = useRouter();
    const { id } = router.query;
    function Detail() {
        if (!id) return <LoadingIcon />;
        else {
            if (id == "Apsy") {
                return <Apsy />;
            }
            if (id == "ShopeyeQ") {
                return <ShopeyeQ />;
            }
            if (id == "HUDU") {
                return <Hudu />;
            }
            if (id == "Yat-Yap") {
                return <YatYap />;
            }
            if (id == "WelfLab") {
                return <Welf />;
            }
            if (id == "AppBaker") {
                return <Appbaker />;
            }
        }
    }
    return <>{Detail()}</>;
}
