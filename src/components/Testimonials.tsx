
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Gastei R$ 0 com agência. Fiz meu funil e campanha de lançamento com a IA da plataforma. Vendi 35 mil em uma semana.",
      author: "André",
      role: "dono de loja online"
    },
    {
      quote: "Economizei semanas de trabalho e finalmente entendi minha estratégia.",
      author: "Clara",
      role: "consultora independente"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-atlas">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-background">
            Empreendedores como você <span className="text-atlas-secondary">já estão usando</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 relative"
            >
              <div className="absolute -top-5 left-10 text-atlas-highlight text-6xl font-serif">"</div>
              <p className="text-xl text-gray-700 mb-6 pt-4 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-atlas-highlight to-atlas-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-atlas-background">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
