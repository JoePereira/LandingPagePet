import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                            src={about1Img}
                            alt="Foto do cachorro"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                        />
                    </div>
                    <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                        <Image
                            src={about2Img}
                            alt="Foto do gato"
                            fill
                            quality={100}
                            priority
                        />
                    </div>

                </div>

                <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="350">
                    <h2 className="text-4xl font-bold">SOBRE</h2>

                    <p>
                       Mais do que uma pet shop online. Nós abastecemos a parte divertida do seu lar e conectamos você com o que há de melhor na vida. Aqui você encontra uma diversidade incrível de produtos essenciais para cães, gatos, roedores, aves e outros animais, além de uma infinidade também para aquarismo, jardinagem e sua casa.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-600"/>
                            Aberto desde 2006.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-600"/>
                            Equipe com mais de 10 veterinarios.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-600"/>
                            Qualidade como nossa prioridade.
                        </li>
                    </ul>

                    <div className="flex gap-2">

                        <a 
                            target='_blank'
                            href={`https://wa.me/5511918701996?text=Ola vim pelo site e gostaria de mais informacoes`}
                            className="bg-[#E84C3D] text-white flex items-center w-fit gap-2 px-4 py-4 rounded-md"
                        >
                            <WhatsappLogo className="w-5 h-4 text-white"/>
                            Contato Via WhatsApp
                        </a>
                        
                        <a 
                            href="#"
                            className=" flex items-center w-fit gap-2 px-4 py-4 rounded-md"
                        >
                            Endereco da Loja
                            <MapPin className="w-5 h-5"/>
                        </a>
                    </div>
                </div>

                </div>

            </div>
        </section>
    )
}