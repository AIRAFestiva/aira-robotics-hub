import { Card, CardContent } from "@/components/ui/card";
import mitLogo from "@/assets/mit-logo.png";
import festivaLogo from "@/assets/festiva-logo.png";
import cybertrinetraLogo from "@/assets/cybertrinetra-logo.png";

const TrustedPartners = () => {
  const partners = [
    {
      logo: mitLogo,
      name: "MIT Training Academy",
      role: "Primary Partner",
      description: "Registered Training Academy to provide trainers",
    },
    {
      logo: festivaLogo,
      name: "Festiva Moments",
      role: "Parent Organization",
      description: "Institutional support and organizational guidance",
    },
    {
      logo: cybertrinetraLogo,
      name: "CyberTrinetra",
      role: "Technology Partner",
      description: "Your Guardian Against Digital Threats",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="border-2 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-lg font-semibold text-primary mb-3">
                  {partner.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
