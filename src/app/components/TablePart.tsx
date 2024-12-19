// // components/PricingTable.jsx
// export default function TablePart() {
//     return (
//       <div className="bg-gray-50 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Plan Cards */}
//             <PlanCard
//               title="Basic for residents"
//               price="£50"
//               description="Set up as a limited company and receive all legal paperwork"
//             />
//             <PlanCard
//               title="All-in-one for residents"
//               price="£289"
//               description="Register a limited company and get all needed compliance"
//             />
//             <PlanCard
//               title="All-in-one for foreigners"
//               price="£299"
//               description="Register a limited company as a non-UK resident"
//             />
//           </div>
  
//           {/* Features Section */}
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
//             {/* Column 1 */}
//             <FeatureCard
//               title="Setting up"
//               features={[
//                 "Company formation",
//                 "Companies House fee",
//                 "Live chat with an expert",
//                 "Registered London office address (£100/y)",
//                 "Exclusive offers from Banking Partners",
//               ]}
//             />
  
//             {/* Column 2 */}
//             <FeatureCard
//               title="Documents"
//               features={[
//                 "Digital incorporation certificates",
//                 "Share Certificate",
//                 "Same-day document scanning (£49)",
//                 "Manual document review",
//                 "Confirmation Statement (£100)",
//               ]}
//             />
  
//             {/* Column 3 */}
//             <FeatureCard
//               title="Beyond incorporation"
//               features={[
//                 "Unlimited corporate changes, 1 year",
//                 "VAT registration (£50)",
//                 "Accounting services (from £65/m)",
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   function PlanCard({ title, price, description }) {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-500 mb-4">{description}</p>
//         <p className="text-4xl font-bold text-gray-800">{price}</p>
//         <span className="text-sm text-gray-500">+ VAT</span>
//         <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
//           Get this plan
//         </button>
//       </div>
//     );
//   }
  
//   function FeatureCard({ title, features }) {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h4 className="text-lg font-semibold mb-4">{title}</h4>
//         <ul className="space-y-3 text-sm text-gray-700">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center">
//               <span className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"></span>
//               {feature}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  