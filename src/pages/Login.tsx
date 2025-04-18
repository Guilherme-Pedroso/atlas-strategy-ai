
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, User, Phone, LockKeyhole, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email");
  const [loginData, setLoginData] = useState({
    email: "",
    cpf: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login realizado com sucesso!",
        description: "Redirecionando para o dashboard...",
      });
      
      // Salvar no localStorage que o usuário está logado
      localStorage.setItem("isLoggedIn", "true");
      
      navigate("/dashboard");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    
    // Simulação de login com Google
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login com Google realizado!",
        description: "Redirecionando para o dashboard...",
      });
      
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-atlas-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Marketing<span className="text-atlas-highlight">Atlas</span>
          </h1>
          <p className="text-atlas-neutral mt-2">Acesse sua conta e continue sua jornada estratégica</p>
        </div>

        <Card className="bg-atlas-background/50 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-xl text-center">Login</CardTitle>
            <CardDescription className="text-center text-atlas-neutral">
              Escolha como deseja acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-atlas-background/50">
                <TabsTrigger value="email" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                  Email
                </TabsTrigger>
                <TabsTrigger value="cpf" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                  CPF
                </TabsTrigger>
                <TabsTrigger value="phone" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                  Celular
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleLogin}>
                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-atlas-neutral" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        className="bg-white/5 border-white/20 pl-10"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cpf" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-atlas-neutral" />
                      <Input
                        id="cpf"
                        name="cpf"
                        placeholder="123.456.789-00"
                        className="bg-white/5 border-white/20 pl-10"
                        value={loginData.cpf}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="phone" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Celular</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-atlas-neutral" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(99) 99999-9999"
                        className="bg-white/5 border-white/20 pl-10"
                        value={loginData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </TabsContent>

                <div className="space-y-2 mt-4">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-atlas-neutral" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Sua senha"
                      className="bg-white/5 border-white/20 pl-10 pr-10"
                      value={loginData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-8 w-8 text-atlas-neutral"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-atlas-highlight hover:bg-atlas-highlight/90 text-atlas-background"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                        Entrando...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Entrar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-atlas-background px-2 text-atlas-neutral">ou continue com</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent border-white/10 hover:bg-white/5 text-white"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-atlas-neutral text-center">
              Ainda não tem uma conta?{" "}
              <Link to="/signup" className="text-atlas-highlight hover:underline">
                Criar conta
              </Link>
            </div>
            <div className="text-xs text-atlas-neutral text-center">
              <Link to="/" className="hover:underline">
                Voltar para a página inicial
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
