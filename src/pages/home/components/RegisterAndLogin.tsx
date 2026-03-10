import { Button } from "@/shared/components/ui/button";
import { Link } from "@tanstack/react-router";

const RegisterAndLogin = () => {
  return (
    <div className="flex gap-2 p-2 justify-end">
      <Button variant="link" className="inter cursor-pointer" asChild>
        <Link to="/login">Entrar</Link>
      </Button>
      <Button className="inter cursor-pointer bg-[#562F00] text-[#FFCE99]">
        Inscrever-se
      </Button>
    </div>
  );
};

export default RegisterAndLogin;
