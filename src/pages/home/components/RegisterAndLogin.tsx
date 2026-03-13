import { Button } from "@/shared/components/ui/button";
import { Link } from "@tanstack/react-router";

const RegisterAndLogin = () => {
  return (
    <div className="flex gap-2 p-2 justify-end">
      <Button variant="link" className="inter cursor-pointer" asChild>
        <Link to="/login">Entrar</Link>
      </Button>
      {/* <Button className="inter cursor-pointer bg-[#C5A059] text-[#562F00]"> */}
      <Button
        className="relative overflow-hidden inter font-bold
    bg-[#C5A059] text-[#562F00] 
    transition-all duration-300
    cursor-pointer
    
    /* O Brilho  */
    before:absolute before:inset-0 
    before:translate-x-[-100%] 
    before:bg-gradient-to-r 
    before:from-transparent before:via-[#FFFDF1]/50 before:to-transparent 
    before:transition-transform before:duration-500
    
    /* Efeito no Hover */
    
    hover:before:translate-x-[100%]
    hover:scale-[1.02] active:scale-[0.98]
    hover:bg-[#C5A059]
    "
      >
        Inscrever-se
      </Button>
    </div>
  );
};

export default RegisterAndLogin;
