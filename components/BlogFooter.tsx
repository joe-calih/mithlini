import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#e4e4e7] text-gray-800">
      <div className="container mx-auto max-w-[1200px] px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Components</h3>
            <ul className="space-y-4">
              {["Hero Sections", "Logo Clouds", "Bento Grids", "CTA Sections", "Testimonials", "Feature Sections"].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Templates</h3>
            <ul className="space-y-4">
              {["Startup Landing Page Template", "AI SaaS Template", "Proactiv Marketing Template", "Agenlabs Agency Template", "DevPro Portfolio Template"].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Aceternity UI</h3>
            <ul className="space-y-4">
              {["Aceternity Studio", "Licence", "Refunds", "Privacy Policy", "Terms and Conditions"].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-4">
              {["Best Modern Design Templates", "Best AI SaaS Templates", "Best Marketing Templates",  "Agenlabs Agency Template", "DevPro Portfolio Template"].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-500s">© {new Date().getFullYear()} Mithlini. Powered by Mithlini Inc.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-gray-500s">
              <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms</Link>
              <Link href="/cookies" className="hover:text-gray-900">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
