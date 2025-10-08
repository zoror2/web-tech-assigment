import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Biodata = () => {
  const personalInfo = [
    { label: "Full Name", value: "John Michael Doe" },
    { label: "Date of Birth", value: "January 15, 1995" },
    { label: "Age", value: "29 years" },
    { label: "Gender", value: "Male" },
    { label: "Nationality", value: "American" },
    { label: "Marital Status", value: "Single" },
    { label: "Religion", value: "Christian" },
    { label: "Blood Group", value: "O+" }
  ];

  const contactInfo = [
    { label: "Email", value: "john.doe@email.com" },
    { label: "Phone", value: "+1 (234) 567-890" },
    { label: "Alternate Phone", value: "+1 (234) 567-891" },
    { label: "Address", value: "123 Main Street, Apt 4B" },
    { label: "City", value: "San Francisco" },
    { label: "State", value: "California" },
    { label: "ZIP Code", value: "94102" },
    { label: "Country", value: "United States" }
  ];

  const familyInfo = [
    { label: "Father's Name", value: "Michael Robert Doe" },
    { label: "Father's Occupation", value: "Business Owner" },
    { label: "Mother's Name", value: "Sarah Elizabeth Doe" },
    { label: "Mother's Occupation", value: "Teacher" },
    { label: "Siblings", value: "1 Brother, 1 Sister" }
  ];

  const additionalInfo = [
    { label: "Languages Known", value: "English (Native), Spanish (Fluent), French (Basic)" },
    { label: "Hobbies", value: "Reading, Coding, Hiking, Photography" },
    { label: "Emergency Contact", value: "Sarah Doe - +1 (234) 567-892" },
    { label: "LinkedIn", value: "linkedin.com/in/johndoe" },
    { label: "GitHub", value: "github.com/johndoe" },
    { label: "Portfolio", value: "johndoe.dev" }
  ];

  const InfoSection = ({ title, data }: { title: string; data: { label: string; value: string }[] }) => (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-3 border-b border-border last:border-0">
              <dt className="font-medium text-muted-foreground">{item.label}</dt>
              <dd className="md:col-span-2 text-foreground">{item.value}</dd>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Bio-data</h1>
          <p className="text-xl text-white/90">Personal Information</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Personal Information */}
          <InfoSection title="Personal Information" data={personalInfo} />

          {/* Contact Information */}
          <InfoSection title="Contact Information" data={contactInfo} />

          {/* Family Information */}
          <InfoSection title="Family Information" data={familyInfo} />

          {/* Additional Information */}
          <InfoSection title="Additional Information" data={additionalInfo} />

          {/* Declaration */}
          <Card className="card-hover border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Declaration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I hereby declare that all the information provided above is true and correct to the best of my knowledge and belief.
                I understand that any false information may result in the rejection of my application or termination of employment.
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-medium">John Michael Doe</p>
                <p className="text-sm text-muted-foreground">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Biodata;
