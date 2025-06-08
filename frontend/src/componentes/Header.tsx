import NavLogo from "../assets/logo.svg"

export function Header(){
    return(
        <header className="bg-gray-800 h-[100px] flex items-center pl-5">
            <img src={NavLogo} alt="logo NFT Marketplace"  />
        </header>
    )
}