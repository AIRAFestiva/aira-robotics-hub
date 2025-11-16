import { Card, CardContent } from "@/components/ui/card";
import robotWired from "@/assets/wire.jpeg";
import robotLine from "@/assets/line.jpeg";
import robotObstacle from "@/assets/obstacle.jpeg";
import robotBluetooth from "@/assets/bluetooth.jpeg";
import robotTraffic from "@/assets/traffic.jpeg";
import robotNight from "@/assets/lights.jpeg";

const Models = () => {
  const models = [
    {
      image: robotWired,
      title: "Wired Remote Car",
      description: "A fundamental project teaching circuit basics, motor control, and mechanical assembly through hands-on building.",
    },
    {
      image: robotLine,
      title: "Line Following Robot",
      description: "Advanced sensor integration project using infrared sensors for autonomous navigation and path tracking.",
    },
    {
      image: robotObstacle,
      title: "Obstacle Avoidance Robot",
      description: "Smart robot using ultrasonic sensors to detect and navigate around obstacles autonomously.",
    },
    {
      image: robotBluetooth,
      title: "Bluetooth Controlled Car",
      description: "Wireless communication project combining smartphone technology with robotics for remote control.",
    },
    {
      image: robotTraffic,
      title: "Traffic Light with Timer",
      description: "Automation project simulating real-world traffic systems with programmable LED sequences and timing.",
    },
    {
      image: robotNight,
      title: "Automatic Night Light",
      description: "Sensor-based automation using light-dependent resistors (LDR) to create smart, energy-efficient lighting.",
    },
  ];

  return (
    <section id="models" className="py-20 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Robots Made by Our Young Minds
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Real projects built by real students—from concept to working prototype
          </p>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile & Tablet: Horizontal Scroll */}
        <div className="lg:hidden relative">
          <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4">
            {models.map((model, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 overflow-hidden hover:shadow-2xl transition-all duration-300 snap-center"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
