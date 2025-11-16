import { Users, Wrench, Lightbulb, GraduationCap, Award, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Industry Expert Support",
      description: "Guidance from industry professionals and partner companies who bring real-world experience to the classroom.",
    },
    {
      icon: Wrench,
      title: "Complete Lab Setup",
      description: "Full robotics lab setup and ongoing management, ensuring your school has everything needed for success.",
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learning",
      description: "Hands-on, practical learning approach where students build real working robots and automation projects.",
    },
    {
      icon: GraduationCap,
      title: "Expert Trainers",
      description: "Qualified and passionate trainers for every session who inspire and guide students throughout their journey.",
    },
    {
      icon: Award,
      title: "Student Certification",
      description: "Every student receives official certification recognizing their skills and achievements in robotics.",
    },
    {
      icon: Presentation,
      title: "Project Exhibition",
      description: "End-of-program exhibition where students showcase their creations to parents, peers, and the community.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose AIRA?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We turn classrooms into innovation hubs through structured, practical robotics education 
            that empowers students to become the creators of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
