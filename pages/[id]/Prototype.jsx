import ApsyPrototype from "@/components/landing/LatestWork/Apps/DetailComponents/ApsyDetails/ApsyPrototype";
import Prototype from "@/components/landing/LatestWork/Apps/DetailComponents/ShopeyeQDetails/Prototype";
import { useRouter } from "next/router";
import { LoadingIcon } from "../../public/Icons/LoadingIcon";
import YouDooPrototype from "@/components/landing/LatestWork/Apps/DetailComponents/YouDooDetails/YouDooPrototype";

const PrototypePage = () => {
    const router = useRouter();
    const { id } = router.query;
    function Detail() {
        if (!id) return <LoadingIcon />;
        else {
            if (id == "Apsy") {
                return <ApsyPrototype />;
            }
            if (id == "ShopeyeQ") {
                return <Prototype />;
            }
            if (id == "YouDoo") {
                return <YouDooPrototype />;
            }
        }
    }
    return <>{Detail()}</>;
};

export default PrototypePage;
