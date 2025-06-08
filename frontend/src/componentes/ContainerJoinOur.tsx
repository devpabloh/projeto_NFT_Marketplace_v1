import { Input } from "./Input";


export function ContainerJoinOur(){
    return(
        <div className="w-[420px] h-[191px]">
            <h2 className="text-2xl font-semibold">Join Our Weekly Digest</h2>
            <p>receba promoções e atualizações exclusivas diretamente na sua caixa de entrada
            </p>
            <div>
                <Input/>
                <button type="button">Inscreva-se</button>
            </div>
        </div>
    )
}   