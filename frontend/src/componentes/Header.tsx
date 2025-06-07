import NavLogo from "../assets/logo.svg"

export function Header(){
    return(
        <header className="bg-gray-700 h-[100px] flex items-center">
            <img src={NavLogo} alt="logo NFT Marketplace" className="pl-8" />
        </header>
    )
}