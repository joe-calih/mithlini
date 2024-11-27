import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Check} from "lucide-react"
import MainComponent from "@/components/MainComponent"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
   <MainComponent/>

{/* Personalized Fitness Insights Section */}
<section className="w-full py-12 md:py-24 lg:py-16 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      <div className="flex flex-col justify-center space-y-4 pb-4">
        <div className="space-y-2">
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Uncover insights tailored to your fitness journey and optimize your training strategy with our advanced tools.
          </p>
        </div>
        <div className="flex flex-col space-y-4 pb-6">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Personalized workout recommendations</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Detailed calorie tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Progress tracking and insights</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Goal setting and achievement tracking</span>
          </div>
        </div>
        <Button className="w-fit">
          Learn More  
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden rounded-[0_360px_360px_0] lg:order-first">
        <Image
          src="/1.jpg?height=400&width=600"
          alt="Personalized fitness journey insights"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


{/* Feature Spotlight Section */}
<section className="w-full py-12 md:py-24 lg:py-16 bg-gray-100">
  <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      <div className="overflow-hidden rounded-[360px_0_0_360px] lg:order-2">
        <Image
          src="/6.jpg?height=400&width=600"
          alt="Fitness enthusiasts analyzing workout performance"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Gain valuable insights into your fitness progress and optimize your training regimen with our advanced analytics tools.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What metrics are included?</AccordionTrigger>
            <AccordionContent>
              Our analytics track workout performance, calorie burn, heart rate trends, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How often is data updated?</AccordionTrigger>
            <AccordionContent>
              Data is synced with your fitness tracker daily, with real-time updates available for premium users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I share my progress?</AccordionTrigger>
            <AccordionContent>
              Yes, you can share your progress with friends or coaches directly from the app.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
          <Button className="inline-flex items-center justify-center">
            Google Play
          </Button>
          <Button variant="outline">App Store</Button>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Real-time Fitness Monitoring */}
<section className="w-full py-12 md:py-24 lg:py-16 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      <div className="flex flex-col justify-center space-y-4 pb-4">
        <div className="space-y-2">
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Track your fitness journey, optimize your workouts, and achieve your goals with our advanced monitoring tools.
          </p>
        </div>
        <div className="flex flex-col space-y-4 pb-6">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Personalized workout recommendations</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Real-time progress tracking</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Fitness analytics and insights</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-red-500" />
            <span>Goal-oriented training plans</span>
          </div>
        </div>
        <Button className="w-fit">
          Learn More  
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-hidden rounded-[0_360px_360px_0] lg:order-first">
        <Image
          src="/8.jpg?height=400&width=600"
          alt="People using fitness tracking tools"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



{/* Pricing Plans */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
    <div className="text-center mb-12">
      <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">Fitness Plans</h2>
      <p className="mt-4 text-gray-500 md:text-xl">Choose the perfect plan to achieve your fitness goals</p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription>For beginners starting their fitness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$29/mo</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Access to beginner workout programs
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Basic nutrition guidance
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Weekly progress tracking
            </li><li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Video Animated Fitness Guide
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Professional</CardTitle>
          <CardDescription>For those looking to take their fitness to the next level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">$59/mo</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Personalized workout plans
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Detailed meal plans
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Access to live fitness classes
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Weekly performance analysis
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Elite</CardTitle>
          <CardDescription>For advanced athletes and fitness enthusiasts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">Custom</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              1-on-1 personal coaching
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Advanced nutrition plans
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              Exclusive access to fitness tools
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-red-500" />
              VIP community support
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Contact Us</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>


         {/* SEO Audit Tool */}
         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E5E5E5]">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Testimonials</h2>
              <p className="mt-4 text-gray-500 md:text-xl">Identify and fix SEO issues across your entire website</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Project Manager',
                  image: '/15.jpg?height=200&width=400',
                  content: 'ProductX has transformed how we manage projects. It&apos;s intuitive and powerful!',
                  avatar: 'A',
                },
                {
                  name: 'Sarah Lee',
                  role: 'Designer',
                  image: '/16.jpg?height=200&width=400',
                  content: 'The collaboration features in ProductX are game-changing. Our team&apos;s productivity has soared!',
                  avatar: 'S',
                },
                {
                  name: 'Mike Brown',
                  role: 'Developer',
                  image: '/22.jpg',
                  content: 'I&apos;ve tried many tools, but ProductX stands out with its seamless integration and user-friendly interface.',
                  avatar: 'M',
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
        </section>

        {/* FAQ's Section */}
<section id="faq" className="py-12">
  <div className="container mx-auto max-w-[800px] px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">
          What are the benefits of weightlifting?
        </AccordionTrigger>
        <AccordionContent>
          Weightlifting improves muscle strength, boosts metabolism, and enhances bone density. It also helps in body toning and reduces the risk of injuries by strengthening the muscles around your joints.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">
          How does yoga improve flexibility?
        </AccordionTrigger>
        <AccordionContent>
          Yoga involves various poses and stretches that target different muscle groups. Regular practice increases flexibility, improves posture, and reduces muscle tension, making it an excellent complement to any fitness routine.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">
          Is calisthenics suitable for beginners?
        </AccordionTrigger>
        <AccordionContent>
          Yes, calisthenics is ideal for beginners. It uses body weight for resistance, focusing on basic movements like push-ups, pull-ups, and squats. As you progress, you can incorporate more advanced exercises into your routine.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">
          What is the difference between cardio and HIIT?
        </AccordionTrigger>
        <AccordionContent>
          Cardio involves steady-state exercises like jogging or cycling, aimed at improving endurance. HIIT (High-Intensity Interval Training) alternates short bursts of intense activity with rest, offering both cardiovascular benefits and fat-burning advantages.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">
          How often should I work out to see results?
        </AccordionTrigger>
        <AccordionContent>
          The frequency of workouts depends on your fitness goals. Generally, 3-5 sessions per week, including a mix of strength, cardio, and flexibility exercises, is effective. Ensure you allow time for recovery and rest days to avoid overtraining.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>

      </main>
    </div>
  );
};
