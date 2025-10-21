import ApsyPrototype from "@/components/landing/LatestWork/Apps/DetailComponents/ApsyDetails/ApsyPrototype";
import Prototype from "@/components/landing/LatestWork/Apps/DetailComponents/ShopeyeQDetails/Prototype";
import { useRouter } from "next/router";
import { LoadingIcon } from "../../public/Icons/LoadingIcon";

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
        }
    }
    return <>{Detail()}</>;
};

export default PrototypePage;
