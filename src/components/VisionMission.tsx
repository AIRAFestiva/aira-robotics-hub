import { Eye, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Vision</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                To transform traditional learning environments into innovation hubs where students 
                learn by building, experimenting, and creating. We envision a future where every 
                young mind has the opportunity to become a creator, not just a consumer, of technology.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Mission</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Equip students with robotics, programming, and real technical skills that prepare 
                    them for the future workforce
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Partner with schools to deliver sustainable long-term STEM programs that make 
                    lasting impact on education
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
