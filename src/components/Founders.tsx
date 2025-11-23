import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderRohith from "@/assets/rohit.jpeg";
import founderHari from "@/assets/Hari.png";
import founderGagan from "@/assets/gagan.png";
import founderBhuvan from "@/assets/bhuvan.jpeg";
import founderSaritha from "@/assets/saritha.jpeg";

const Founders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const founders = [
    {
      name: "Rohith S V",
      image: founderRohith,
      quote: "AIRA doesn't teach robotics - we ignite curiosity, confidence, and purpose within every young creator.",
    },
    {
      name: "Hari Prasad",
      image: founderHari,
      quote: "Robotics is a mindset of solving, questioning, and building boldly. That's what AIRA brings to students.",
    },
    {
      name: "Gagan Ramesh",
      image: founderGagan,
      quote: "When imagination becomes a real working model, learning becomes excitement. That moment is AIRA's mission.",
    },
    {
      name: "Bhuvan B",
      image: founderBhuvan,
      quote: "AIRA was created to make robotics learning hands-on for every student.",
    },
    {
      name: "Saritha Kumari K",
      image: founderSaritha,
      quote: "AIRA began with the idea of bringing quality robotics education directly to schools.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [founders.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Words From Our Founders
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <Card className="border-2 border-primary/20 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="w-10 h-10 text-primary/30 mb-4 mx-auto md:mx-0" />
                      <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                        "{founder.quote}"
                      </p>
                      <p className="text-xl font-bold text-primary">{founder.name}</p>
                      <p className="text-muted-foreground">Founder, AIRA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 hover:bg-primary/10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 hover:bg-primary/10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {founders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
