import Discord from '../assets/DiscordLogo.svg';
import Twitter from '../assets/TwitterLogo.svg';
import Instagram from '../assets/InstagramLogo.svg';  
import Youtube from '../assets/YoutubeLogo.svg';  

export function ContainerFooterMarketplace(){
    return(
        <div className='w-[328px] h-[191px]'>
            <h3 className='text-2xl font-semibold'>NFT Marketplace</h3>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <div>
                <p>Entre nossa comunidade</p>
                <div className='flex justify-between'>
                    <a href="">
                        <img src={Discord} alt="" />
                    </a>
                    <a href="">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="">
                        <img src={Youtube} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}