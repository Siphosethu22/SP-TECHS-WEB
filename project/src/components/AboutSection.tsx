import { Award, Users, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About SP Techs</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto mb-12 text-center">
            <p className="text-gray-600">
              SP Techs is your premier technology solutions provider in South Africa. With years of experience
              in computer repairs and web development, we've built a reputation for excellence, reliability,
              and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Committed to delivering top-quality services and solutions</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with extensive technical expertise</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-600">Reliable support you can count on</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}