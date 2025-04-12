// import { useState } from "react";
// import sfqImage from "../images/sfq.jpg";
// import stqImage from "../images/stq.jpg";
// import fjqImage from "../images/fjq.jpg";

// const AboutPageSectionsContinued = () => {
//   // State to track which section is expanded in the accordion style
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleSection = (index) => {
//     setActiveSection(activeSection === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col gap-12 p-6 max-w-6xl mx-auto bg-gray-50">
//       {/* Company History - Card Style with Border */}
//       <section className="mt-14 bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-600">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Company History and Origins
//           </h2>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-2/3">
//               <p className="text-gray-700 mb-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
//                 nobis fuga blanditiis, nemo alias earum quaerat, at ad unde
//                 assumenda sed dolorem veniam illum quisquam dicta, fugiat vitae
//                 laboriosam amet! Alias officia voluptatibus cum in rerum
//                 praesentium porro doloremque molestias accusamus quos. Nesciunt
//                 unde dicta illum non, debitis minima accusamus?
//               </p>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
//                 porro voluptatem dolores corporis suscipit alias distinctio
//                 ducimus soluta necessitatibus. Maxime itaque quidem consectetur
//                 sunt. Possimus, ipsa illo. Numquam, id. Possimus.
//               </p>
//             </div>
//             <div className="md:w-1/3 bg-gray-100 rounded-lg p-4">
//               <h3 className="font-semibold text-lg mb-2">Key Milestones</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-center">
//                   <span className="text-green-600 font-bold mr-2">2005</span>
//                   <span>Company founded</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-green-600 font-bold mr-2">2010</span>
//                   <span>Expanded to commercial services</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-green-600 font-bold mr-2">2015</span>
//                   <span>Developed eco-friendly program</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-green-600 font-bold mr-2">2022</span>
//                   <span>Received sustainability award</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission and Values - Two Column with Background */}
//       <section className="bg-gray-800 text-white rounded-lg overflow-hidden">
//         <div className="p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Our Mission and Values
//           </h2>
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="md:w-1/2">
//               <div className="bg-gray-700 p-6 rounded-lg h-full">
//                 <h3 className="text-xl font-semibold mb-4 text-green-400">
//                   Our Mission
//                 </h3>
//                 <p className="mb-4">
//                   We are focused solely to provide our customers with innovative
//                   pest management, so as to create and establish a long-term and
//                   mutual reliance.
//                 </p>
//                 <p className="mb-4">
//                   We work towards a goal to become a trend setting pest
//                   mangaement organiwsation by implementing modern technoligies &
//                   incorporatiin advance work science in the effective management
//                   of pests.
//                 </p>
//                 <p>
//                   We strive every working moment to bring happiness to many, by
//                   efficiently mangaging whennever wherever & whatever pests.
//                 </p>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-gray-700 p-6 rounded-lg h-full">
//                 <h3 className="text-xl font-semibold mb-4 text-green-400">
//                   Our Core Values
//                 </h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <div className="mr-3 mt-1 text-green-400">•</div>
//                     <div>
//                       <span className="font-medium">
//                         Environmental Responsibility:
//                       </span>{" "}
//                       Using the least impactful methods possible
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="mr-3 mt-1 text-green-400">•</div>
//                     <div>
//                       <span className="font-medium">Customer Education:</span>{" "}
//                       Empowering you with knowledge
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="mr-3 mt-1 text-green-400">•</div>
//                     <div>
//                       <span className="font-medium">Integrity:</span>{" "}
//                       Transparent and honest in all practices
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="mr-3 mt-1 text-green-400">•</div>
//                     <div>
//                       <span className="font-medium">Innovation:</span>{" "}
//                       Constantly improving our methods
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Meet Our Team - Grid Layout */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
//                 <img
//                   src={fjqImage}
//                   alt="Tanya Williams"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg">Felix Quadros</h3>
//               <p className="text-green-600 mb-2">Environmental Specialist</p>
//               <p className="text-sm text-gray-600 text-center">
//                 MS in Environmental Science, focusing on natural deterrent
//                 methods.
//               </p>
//             </div>
//             <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
//                 <img
//                   src={sfqImage}
//                   alt="Dr. Sarah Johnson"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
//               <p className="text-green-600 mb-2">Founder & CEO</p>
//               <p className="text-sm text-gray-600 text-center">
//                 Ph.D. in Entomology with over 20 years of experience in
//                 sustainable pest management.
//               </p>
//             </div>

//             <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
//               <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
//                 <img
//                   src={stqImage}
//                   alt="Mark Rodriguez"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg">Mark Rodriguez</h3>
//               <p className="text-green-600 mb-2">Operations Manager</p>
//               <p className="text-sm text-gray-600 text-center">
//                 15 years in pest control with certification in Integrated Pest
//                 Management.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Approach - Icon Feature Style */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Our Approach to Pest Management
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Feature 1 */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   Lorem ipsum dolor sit amet.
//                 </h3>
//                 <p className="text-gray-700">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Praesentium velit suscipit quaerat!
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">Lorem, ipsum.</h3>
//                 <p className="text-gray-700">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
//                   facilis enim amet repellendus, quia praesentium?
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">Lorem, ipsum.</h3>
//                 <p className="text-gray-700">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Maiores deserunt perferendis expedita itaque deleniti
//                   doloremque, officia ut iste aliquam perspiciatis!
//                 </p>
//               </div>
//             </div>

//             {/* Feature 4 */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   Lorem, ipsum dolor.
//                 </h3>
//                 <p className="text-gray-700">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Ratione nam nostrum ipsum veniam aliquid.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications - Horizontal Cards */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Certifications and Credentials
//           </h2>
//           <div className="space-y-4">
//             <div className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hover:bg-gray-50 transition-colors">
//               <div className="bg-green-100 p-3 rounded-full text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-8 h-8"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex-grow text-center md:text-left">
//                 <h3 className="font-semibold text-lg">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab.
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Tempora doloribus deleniti temporibus incidunt, iure eos
//                   aliquam necessitatibus deserunt!
//                 </p>
//               </div>
//             </div>

//             <div className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hover:bg-gray-50 transition-colors">
//               <div className="bg-green-100 p-3 rounded-full text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-8 h-8"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex-grow text-center md:text-left">
//                 <h3 className="font-semibold text-lg">Lorem, ipsum dolor.</h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
//                   animi et in magnam provident inventore magni?
//                 </p>
//               </div>
//             </div>

//             <div className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hover:bg-gray-50 transition-colors">
//               <div className="bg-green-100 p-3 rounded-full text-green-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-8 h-8"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//               </div>
//               <div className="flex-grow text-center md:text-left">
//                 <h3 className="font-semibold text-lg">
//                   Lorem ipsum dolor sit amet.
//                 </h3>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Reprehenderit sunt perferendis repudiandae in soluta eveniet.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Areas - Map Style */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Service Areas
//           </h2>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-1/2 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
//               <img
//                 src="/api/placeholder/400/300"
//                 alt="Service Area Map"
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h3 className="font-semibold text-lg mb-3">We proudly serve:</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="bg-green-50 p-3 rounded-lg">
//                   <h4 className="font-medium text-green-800">North Region</h4>
//                   <ul className="text-sm text-gray-700 mt-1">
//                     <li>• Northville</li>
//                     <li>• Uptown</li>
//                     <li>• Highland Park</li>
//                   </ul>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-lg">
//                   <h4 className="font-medium text-green-800">South Region</h4>
//                   <ul className="text-sm text-gray-700 mt-1">
//                     <li>• Southport</li>
//                     <li>• Riverside</li>
//                     <li>• Valley View</li>
//                   </ul>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-lg">
//                   <h4 className="font-medium text-green-800">East Region</h4>
//                   <ul className="text-sm text-gray-700 mt-1">
//                     <li>• Eastwood</li>
//                     <li>• Lakeside</li>
//                     <li>• Sunrise Heights</li>
//                   </ul>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-lg">
//                   <h4 className="font-medium text-green-800">West Region</h4>
//                   <ul className="text-sm text-gray-700 mt-1">
//                     <li>• Westfield</li>
//                     <li>• Sunset Hills</li>
//                     <li>• Pine Ridge</li>
//                   </ul>
//                 </div>
//               </div>
//               <p className="mt-4 text-gray-700">
//                 Not sure if we service your area? Contact us today to find out!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Customer Success Stories - Testimonial Cards */}
//       <section className="bg-green-600 rounded-lg shadow-md overflow-hidden text-white">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Customer Success Stories
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Testimonial 1 */}
//             <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Jennifer R.</h3>
//                   <p className="text-green-100">Homeowner in Northville</p>
//                 </div>
//               </div>
//               <p className="italic">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
//                 cupiditate veniam mollitia molestias possimus deleniti rem
//                 voluptatibus aut esse id sint ut veritatis exercitationem,
//                 minima quos, suscipit rerum quo. Qui.
//               </p>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Marcus T.</h3>
//                   <p className="text-green-100">Restaurant Owner</p>
//                 </div>
//               </div>
//               <p className="italic">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
//                 deleniti vero, ducimus, ea quam nam totam odit dolore soluta
//                 nulla quibusdam laborum qui corporis sint iure veritatis
//                 aspernatur libero suscipit ex quod consequuntur blanditiis?
//                 Facere pariatur in voluptatum assumenda eos.
//               </p>
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <p className="mb-2">Success by the numbers:</p>
//             <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
//               <div className="bg-white bg-opacity-20 p-4 rounded-lg">
//                 <p className="text-3xl font-bold">98%</p>
//                 <p className="text-sm">First-time resolution rate</p>
//               </div>
//               <div className="bg-white bg-opacity-20 p-4 rounded-lg">
//                 <p className="text-3xl font-bold">5,000+</p>
//                 <p className="text-sm">Satisfied clients</p>
//               </div>
//               <div className="bg-white bg-opacity-20 p-4 rounded-lg">
//                 <p className="text-3xl font-bold">4.9/5</p>
//                 <p className="text-sm">Average rating</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Community Involvement - Timeline Style */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Community Involvement
//           </h2>
//           <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-200 md:before:mx-auto">
//             {/* Event 1 */}
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <div className="md:w-1/2 md:text-right">
//                 <h3 className="font-semibold text-lg">
//                   Annual School Education Program
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   We visit local schools to teach students about beneficial
//                   insects and responsible pest management.
//                 </p>
//               </div>
//               <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center z-10 flex-shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-5 h-5 text-green-600"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                   />
//                 </svg>
//               </div>
//               <div className="md:w-1/2 md:text-left">
//                 <img
//                   src="/api/placeholder/300/200"
//                   alt="School Education Program"
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>

//             {/* Event 2 */}
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <div className="md:w-1/2 md:text-right">
//                 <img
//                   src="/api/placeholder/300/200"
//                   alt="Community Garden"
//                   className="rounded-lg md:ml-auto"
//                 />
//               </div>
//               <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center z-10 flex-shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-5 h-5 text-green-600"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div className="md:w-1/2 md:text-left">
//                 <h3 className="font-semibold text-lg">
//                   Community Garden Support
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   We provide free consultations and natural pest control
//                   solutions to community gardens throughout the region.
//                 </p>
//               </div>
//             </div>

//             {/* Event 3 */}
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <div className="md:w-1/2 md:text-right">
//                 <h3 className="font-semibold text-lg">
//                   Habitat Restoration Project
//                 </h3>
//                 <p className="text-gray-600 mb-2">
//                   Our team volunteers quarterly to help restore natural habitats
//                   that support beneficial insects and natural pest predators.
//                 </p>
//               </div>
//               <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center z-10 flex-shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-5 h-5 text-green-600"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>
//               </div>
//               <div className="md:w-1/2 md:text-left">
//                 <img
//                   src="/api/placeholder/300/200"
//                   alt="Habitat Restoration"
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Commitment to Safety - Accordion Style */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Our Commitment to Safety
//           </h2>
//           <div className="space-y-4">
//             {/* Accordion Item 1 */}
//             <div className="border border-gray-200 rounded-lg overflow-hidden">
//               <button
//                 className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 onClick={() => toggleSection(0)}
//               >
//                 <h3 className="font-semibold text-lg">Family and Pet Safety</h3>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className={`w-5 h-5 transition-transform ${
//                     activeSection === 0 ? "transform rotate-180" : ""
//                   }`}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {activeSection === 0 && (
//                 <div className="p-4 border-t border-gray-200">
//                   <p className="text-gray-700 mb-3">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Aut incidunt sunt hic iure, porro blanditiis possimus
//                     ducimus explicabo sequi voluptatem quae repellendus magnam,
//                     ut reprehenderit dolorem dicta vel cum maiores.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Low-toxicity formulations whenever possible</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Strategic placement of products in inaccessible
//                         locations
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Clear guidance on re-entry times and precautions
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Pet-friendly options for households with animals
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Accordion Item 2 */}
//             <div className="border border-gray-200 rounded-lg overflow-hidden">
//               <button
//                 className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 onClick={() => toggleSection(1)}
//               >
//                 <h3 className="font-semibold text-lg">
//                   Environmental Protection
//                 </h3>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className={`w-5 h-5 transition-transform ${
//                     activeSection === 1 ? "transform rotate-180" : ""
//                   }`}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {activeSection === 1 && (
//                 <div className="p-4 border-t border-gray-200">
//                   <p className="text-gray-700 mb-3">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Earum quod saepe officia repudiandae id, in laboriosam
//                     recusandae rerum obcaecati asperiores, labore sit quibusdam
//                     nihil? A quisquam quam ullam?
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Reduced-risk pesticides and biological controls
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Precise application methods to prevent runoff</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Selective targeting of pest species only</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Bee-friendly practices that protect pollinators
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Accordion Item 3 */}
//             <div className="border border-gray-200 rounded-lg overflow-hidden">
//               <button
//                 className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 onClick={() => toggleSection(2)}
//               >
//                 <h3 className="font-semibold text-lg">
//                   Technician Training and Safety
//                 </h3>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className={`w-5 h-5 transition-transform ${
//                     activeSection === 2 ? "transform rotate-180" : ""
//                   }`}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {activeSection === 2 && (
//                 <div className="p-4 border-t border-gray-200">
//                   <p className="text-gray-700 mb-3">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Iusto porro nisi excepturi veritatis ducimus saepe placeat
//                     ullam omnis, amet reprehenderit reiciendis corrupti!
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Comprehensive initial training program</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Regular safety refresher courses</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>Proper personal protective equipment</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span>
//                         Continuous education on new products and techniques
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section - Clean Two Column */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Frequently Asked Questions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* FAQ Item 1 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </h3>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Numquam consequuntur placeat sequi deleniti, ab, nostrum eaque
//                 aspernatur facere, quasi commodi non earum veritatis quo
//                 exercitationem nobis tenetur fugiat a! Nobis voluptate tempore
//                 ut iusto! Quasi labore ad dolorem natus inventore?
//               </p>
//             </div>

//             {/* FAQ Item 2 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </h3>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
//                 minima odit nam eaque minus a voluptatem eveniet fuga amet?
//                 Dolore ad debitis, assumenda praesentium laborum sed reiciendis
//                 qui quo distinctio, recusandae eum error veritatis dolores.
//               </p>
//             </div>

//             {/* FAQ Item 3 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
//                 dolorum eaque expedita.
//               </h3>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
//                 perferendis non ratione esse velit? Laborum blanditiis commodi
//                 obcaecati fugiat magnam numquam? Alias omnis ipsam recusandae
//                 nostrum unde, saepe ratione vitae!
//               </p>
//             </div>

//             {/* FAQ Item 4 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Reiciendis atque voluptates quidem!
//               </h3>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
//                 consequuntur ipsam, sapiente, dolore sunt sit temporibus
//                 voluptates nostrum, error aliquam esse in! Modi ullam sint
//                 ipsum, praesentium optio error tempora aperiam dolorem culpa ad
//                 exercitationem architecto ipsam eligendi deserunt provident
//                 reprehenderit! Accusamus, fuga. Consequuntur, aspernatur.
//               </p>
//             </div>

//             {/* FAQ Item 5 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Accusantium impedit corrupti sed!
//               </h3>
//               <p className="text-gray-700">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Repellendus nobis iste fugiat explicabo sunt doloribus nemo
//                 quibusdam, dolorem, iure, aspernatur ut ducimus rem. Suscipit
//                 animi unde, odit ipsa veritatis tempora delectus. Beatae quia
//                 nihil magni enim tenetur, fuga nobis consectetur.
//               </p>
//             </div>

//             {/* FAQ Item 6 */}
//             <div className="border-b border-gray-200 pb-4">
//               <h3 className="font-semibold text-lg mb-2 text-green-700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
//                 amet cumque quos.
//               </h3>
//               <p className="text-gray-700">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
//                 asperiores labore, porro placeat ea sit, cumque fugiat illum
//                 iure rerum molestias et quae, explicabo nulla cupiditate. Sequi
//                 quasi aliquam veniam!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information - Split with CTA */}
//       <section className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           <div className="p-6 md:w-1/2 bg-gray-50">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">
//               Get In Touch
//             </h2>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Phone</h3>
//                   <p className="text-gray-700">(555) 123-4567</p>
//                   <p className="text-sm text-gray-500">
//                     Available 24/7 for emergencies
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Email</h3>
//                   <p className="text-gray-700">info@ecopestsolutions.com</p>
//                   <p className="text-sm text-gray-500">
//                     We respond within 24 hours
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Office Location</h3>
//                   <p className="text-gray-700">123 Main Street, Suite 456</p>
//                   <p className="text-gray-700">Anytown, ST 12345</p>
//                   <p className="text-sm text-gray-500">
//                     Mon-Fri: 8am-6pm, Sat: 9am-2pm
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Follow Us</h3>
//                   <div className="flex space-x-3 mt-2">
//                     <a
//                       href="#"
//                       className="bg-gray-200 hover:bg-green-100 text-gray-700 hover:text-green-600 p-2 rounded-full transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                       >
//                         <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                       </svg>
//                     </a>
//                     <a
//                       href="#"
//                       className="bg-gray-200 hover:bg-green-100 text-gray-700 hover:text-green-600 p-2 rounded-full transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                       >
//                         <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                       </svg>
//                     </a>
//                     <a
//                       href="#"
//                       className="bg-gray-200 hover:bg-green-100 text-gray-700 hover:text-green-600 p-2 rounded-full transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                       >
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 md:w-1/2 bg-green-700 text-white flex flex-col justify-center">
//             <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
//             <p className="mb-6">
//               Schedule your free inspection today and take the first step toward
//               a pest-free environment for your home or business.
//             </p>
//             <div className="space-y-4">
//               <button className="w-full bg-white text-green-700 hover:bg-green-100 py-3 px-6 rounded-lg font-semibold transition-colors">
//                 Schedule Free Inspection
//               </button>
//               <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-green-700 py-3 px-6 rounded-lg font-semibold transition-colors">
//                 Request a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final Design - Clean Branded Close */}
//       <section className="bg-green-600 text-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-8 text-center">
//           <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-12 h-12 text-green-600"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">
//             Choose the Safer, Smarter Approach to Pest Management
//           </h2>
//           <p className="mb-6 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
//             nulla nemo ratione, quasi fuga quae labore deserunt nam tempora
//             eveniet aperiam corrupti?
//           </p>
//           <button className="bg-white text-green-700 hover:bg-green-100 py-3 px-8 rounded-lg font-semibold transition-colors">
//             Contact Us Today
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPageSectionsContinued;
