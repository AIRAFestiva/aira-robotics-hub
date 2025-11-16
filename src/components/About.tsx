import { Building2, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About AIRA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Who We Are ?</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  AIRA is a unit of Festiva Moments (MSME Udyam Reg: UDYAM-KR-03-0571027). 
                  We aim to bridge the gap between youth potential and real-world industry needs 
                  through innovative robotics education.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">What We Do ?</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We bring world-class robotics training directly to your school. Our comprehensive 
                  hands-on program for Classes 6-10 features expert trainers, ready-to-use lab kits, 
                  industry-aligned curriculum, and real robotic builds that ignite passion for STEM.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bringing World-Class Robotics Training to Your School
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              Our program transforms traditional learning environments into innovation hubs where 
              curiosity meets technology. Students don't just learn about robots—they build, program, 
              and bring them to life.
            </p>
            <ul className="space-y-3">
              {[
                "Expert trainers for every session",
                "Complete lab setup & management",
                "Hands-on project-based learning",
                "Industry-aligned curriculum",
                "Real robotic builds & prototypes",
                "Certification for every student"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
