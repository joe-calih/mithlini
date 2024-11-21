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
import BlogFooter from "@/components/BlogFooter"
import HeaderNew from "@/components/HeaderNew"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeaderNew/> 

        {/* Keyword Research Section */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4 pb-4">
                <div className="space-y-2">
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover high-performing keywords and optimize your content strategy with our advanced research tools.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 pb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Competitor keyword analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Long-tail keyword suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Search volume and difficulty metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Search volume and difficulty metrics</span>
                  </div>
                </div>
                <Button className="w-fit">Learn More  
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div><div className="overflow-hidden rounded-[0_360px_360px_0] lg:order-first">
              <Image
                src="/1.jpg?height=400&width=600"
                alt="People doing calisthenics exercises"
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
                alt="People doing calisthenics exercises"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get deep insights into your website&apos;s SEO performance with our comprehensive analytics tools.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What metrics are included?</AccordionTrigger>
                    <AccordionContent>
                      Our analytics cover keyword rankings, organic traffic, backlink profile, and more.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How often is data updated?</AccordionTrigger>
                    <AccordionContent>
                      Data is refreshed daily, with real-time updates available for premium users.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How often is data updated?</AccordionTrigger>
                    <AccordionContent>
                      Data is refreshed daily, with real-time updates available for premium users.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button className="inline-flex items-center justify-center">
                    Goople Play
                  </Button>
                  <Button variant="outline">App Store</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time SEO Monitoring */}
        <section className="w-full py-12 md:py-24 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4 pb-4">
                <div className="space-y-2">
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover high-performing keywords and optimize your content strategy with our advanced research tools.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 pb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Competitor keyword analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Long-tail keyword suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Search volume and difficulty metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Search volume and difficulty metrics</span>
                  </div>
                </div>
                <Button className="w-fit">Learn More  
                <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div><div className="overflow-hidden rounded-[0_360px_360px_0] lg:order-first">
              <Image
                src="/3.jpg?height=400&width=600"
                alt="People doing calisthenics exercises"
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
              <p className="mt-4 text-gray-500 md:text-xl">Select the perfect plan for your SEO needs</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For small businesses and startups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$49/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Basic keyword research
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      On-page SEO analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Monthly site audit
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
                  <CardDescription>For growing businesses and agencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$99/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Advanced keyword research
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Competitor analysis
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Weekly site audits
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Content optimization
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large businesses and enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Custom</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      All Professional features
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      API access
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Custom integrations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
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

        {/* FAQ&apos;s Section */}
        <section id="faq" className="py-12">
          <div className="container mx-auto max-w-[800px] px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">What is a keyword generator?</AccordionTrigger>
                <AccordionContent>
                  A keyword generator is a tool that helps you discover relevant search terms and phrases related to your topic or niche. It&apos;s designed to assist in creating effective SEO and content strategies by providing a list of keywords that your target audience is likely to use when searching for information online.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">How does the keyword generator work?</AccordionTrigger>
                <AccordionContent>
                  Our keyword generator uses advanced algorithms and data from various sources to analyze your input and generate a list of related keywords. It considers factors such as search volume, competition, and relevance to provide you with the most useful keyword suggestions for your content and SEO efforts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">Can I use the generated keywords for PPC campaigns?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely! The keywords generated by our tool can be used for various purposes, including Pay-Per-Click (PPC) campaigns. They can help you identify potential ad keywords, improve your ad targeting, and optimize your campaign structure for better performance and ROI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">How often is the keyword data updated?</AccordionTrigger>
                <AccordionContent>
                  We update our keyword data regularly to ensure you have access to the most current and relevant information. Our system refreshes the data weekly, incorporating the latest search trends and algorithm changes from major search engines.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base text-gray-600 hover:text-gray-900">Is there a limit to how many keywords I can generate?</AccordionTrigger>
                <AccordionContent>
                  The number of keywords you can generate depends on your subscription plan. Free users have a daily limit, while paid plans offer higher or unlimited keyword generation. Check our pricing page for detailed information on the limits for each plan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>





      </main>
      <BlogFooter />
    </div>
  );
};
