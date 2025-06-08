import { ContainerFooterExplore } from "./ContainerFooterExplore";
import { ContainerFooterMarketplace } from "./ContainerFooterMarketplace";
import { ContainerJoinOur } from "./ContainerJoinOur";

export function Footer(){
    return(
        <footer className="h-[334px] bg-gray-700 text-white flex justify-center items-center gap-4">
            <ContainerFooterMarketplace/>
            <ContainerFooterExplore/>
            <ContainerJoinOur/>
        </footer>
    )
}