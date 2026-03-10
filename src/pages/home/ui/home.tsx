import Hero from "../components/Hero";
import RegisterAndLogin from "../components/RegisterAndLogin";

export default function Home() {
  return (
    <>
      <section className="bg-[#FFFDF1] inter h-screen flex flex-col justify-between p-6">
        <RegisterAndLogin />

        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="porter text-[12rem] leading-none text-[#562F00] opacity-5 select-none absolute">
            CASH
          </h1>
          <Hero />
        </div>

        <div className="flex justify-center animate-bounce text-[#562F00] opacity-50">
          ↓
        </div>
      </section>
      <section className="bg-white py-20 px-10 border-t border-[#562F00]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="porter text-4xl text-[#562F00] mb-8">
            Por que usar o Personal Finance?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <div className="text-3xl">📊</div>
              <h4 className="inter font-bold text-[#562F00]">
                Dashboard Simples
              </h4>
              <p className="inter text-sm text-gray-600">
                Tudo o que você precisa ver em uma única tela, sem complicações.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-3xl">🛠</div>
              <h4 className="inter font-bold text-[#562F00]">
                Em desenvolvimento
              </h4>
              <p className="inter text-sm text-gray-600">
                Sempre crescendo e melhorando, para atender a todos os públicos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-3xl">🤑</div>
              <h4 className="inter font-bold text-[#562F00]">Gratuito</h4>
              <p className="inter text-sm text-gray-600">
                Totalmente gratuito e sem anúncios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
