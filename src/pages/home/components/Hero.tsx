const Hero = () => {
  return (
    <>
      <div className="p-2 select-none space-y-4">
        <h2 className="porter text-9xl md:text-[12rem] text-[#562F00] leading-tight">
          PERSONAL <br /> FINANCE
        </h2>
        <div className="h-1 w-24 bg-[#562F00] mx-auto opacity-20" />{" "}
        {/* Linha sutil para separar */}
        <p className="inter text-[#562F00] font-light text-2xl italic opacity-80">
          “Onde seu dinheiro para de sumir e começa a render.”
        </p>
      </div>
    </>
  );
};

export default Hero;
