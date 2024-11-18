import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GraduationCap, Library, Users } from 'lucide-react'
import Link from "next/link"

export default function SchoolProfile() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Evergreen Academy</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#programs" className="hover:underline">Programs</Link></li>
              <li><Link href="#facilities" className="hover:underline">Facilities</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Evergreen Academy</h2>
          <p className="text-lg mb-4">
            Evergreen Academy is a prestigious institution dedicated to nurturing young minds and fostering academic excellence. 
            With a rich history spanning over 50 years, we pride ourselves on our innovative curriculum, experienced faculty, 
            and state-of-the-art facilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,500+</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Programs Offered</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20+</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Library Books</CardTitle>
                <Library className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50,000+</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Extracurricular Activities</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30+</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="programs" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Science & Technology', 'Arts & Humanities', 'Business Studies', 'Languages', 'Physical Education', 'Music & Performing Arts'].map((program) => (
              <Card key={program}>
                <CardHeader>
                  <CardTitle>{program}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our {program} program offers students a comprehensive curriculum designed to challenge and inspire.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="facilities" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>State-of-the-Art Laboratories</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our labs are equipped with the latest technology to provide hands-on learning experiences in sciences and technology.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Modern Library</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our extensive library houses over 50,000 books and provides digital access to numerous academic journals and resources.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sports Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our sports complex includes indoor and outdoor facilities for a wide range of sports and physical activities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Auditorium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our modern auditorium hosts various events, performances, and guest lectures throughout the academic year.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2"><strong>Address:</strong> 123 Education Lane, Learningville, EV 12345</p>
              <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="mb-2"><strong>Email:</strong> info@evergreenacademy.edu</p>
              <Button className="mt-4">Schedule a Visit</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Evergreen Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}