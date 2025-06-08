import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

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

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(signInSchema)})

    function onSubmit(){

    }
    return(
        <div className="bg-gray-800 flex items-center w-full text-white">
            <img src={ImgForm} alt="" className="h-[691px] w-1/2" />
            <div className="flex flex-col text-center w-1/2 gap-2">
                <h2>Create Account</h2>
                <p>Bem-vindo! Insira seus dados e comece a criar, colecionar e vender NFTs.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-stretch gap-3">
                    <Input legend="Nome" type="text" placeholder="Digite seu nome" error={errors.nome?.message} {...register('nome')} />
                    <Input legend="E-mail" type="email" placeholder="Digite seu E-mail" error={errors.email?.message}{...register('email')}  />
                    <Input legend="senha" type="password" placeholder="Digite sua senha" error={errors.senha?.message} {...register('senha')} />
                    <Input legend="Confirmar Senha" type="password" placeholder="Confirme sua senha" error={errors.confirmarSenha?.message} {...register('confirmarSenha')}  />
                </form>
            </div>
        </div>
    )
}