import {useForm} from "react-hook-form"
import {z} from "zod"

import ImgForm from "../assets/Placeholder.png";

import { Input } from "../componentes/Input";


const signInSchema = z.object({
    nome: z.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .max(50, 'O nome deve ter no máximo 50 caracteres'),
    
    email: z.string()
        .email('Email inválido')
        .min(1, 'O email é obrigatório'),
    
    senha: z.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
        .regex(/[0-9]/, 'A senha deve conter pelo menos um número'),
    
    confirmarSenha: z.string()
        .min(1, 'A confirmação de senha é obrigatória')
        }).refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"]
});

export function SignIn(){
    return(
        <div className="bg-gray-800">
            <img src={ImgForm} alt="" className="h-[691px]" />
            <div>
                <h2>Create Account</h2>
                <p>Bem-vindo! Insira seus dados e comece a criar, colecionar e vender NFTs.</p>
                <form onSubmit={}>
                    <Input/>
                </form>
            </div>
        </div>
    )
}