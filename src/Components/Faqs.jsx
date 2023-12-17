// import React,{useState,useRef,useEffect} from 'react';

// function Faqs(){

    

//     return(
//         <>
//         <main className="p-5 bg-light-blue">
//       <div className="flex justify-center items-start my-8">
//         <div className="w-full sm:w-10/12 md:w-1/2 my-4">
//           <center>
//             <h2 className="text-4xl items-center justify-center font-semibold text-vnet-blue mb-2">Frequently asked questions</h2>
//             <p className=" text-sm pt-1 text-slate-500 mb-3 ">Everything you need to know about the product and billing</p>
//         </center>
//           <ul className="flex flex-col">
//             <li className="bg-white my-4" x-data="accordion(1)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>Is there a free trail available?</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className={`fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500 &{handleRotate()}`}
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 x-ref="tab"
//                 style={handleToggle()}
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//               >
//                 <p className="p-3 text-gray-900">
//                   Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation
//                 </p>
//               </div>
//             </li>
//             <li className="bg-white my-2 " x-data="accordion(2)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>Can I change my plan later?</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className="fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//                 x-ref="tab"
//                 // style="handleToggle()"
//               >
//                 <p className="p-3 text-gray-900">
//                   Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.
//                 </p>
//               </div>
//             </li>
//             <li className="bg-white my-2" x-data="accordion(3)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>What is your cancellation policy?</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className="fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//                 x-ref="tab"
//                 // style="handleToggle()"
//               >
//                 <p className="p-3 text-gray-900">
//                   We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.
//                 </p>
//               </div>
//             </li>
//             <li className="bg-white my-2 " x-data="accordion(4)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>Can other info be added to an invoice</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className="fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//                 x-ref="tab"
//                 // style="handleToggle()"
//               >
//                 <p className="p-3 text-gray-900">
//                   Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.
//                 </p>
//               </div>
//             </li>
//             <li className="bg-white my-2" x-data="accordion(5)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>How does billing work?</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className="fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//                 x-ref="tab"
//                 // style="handleToggle()"
//               >
//                 <p className="p-3 text-gray-900">
//                   For USA domestic orders we offer FedEx and USPS shipping.
//                 </p>
//               </div>
//             </li>
//             <li className="bg-white my-2" x-data="accordion(6)">
//               <h2
//                 onClick={handleHeight()}
//                 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
//               >
//                 <span>How do I change my account email?</span>
//                 <svg
//                 //   className="handleRotate()"
//                   className="fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
//                 </svg>
//               </h2>
//               <div
//                 className="border-l-2 border-slate-600 overflow-hidden max-h-0 duration-500 transition-all"
//                 x-ref="tab"
//                 // style="handleToggle()"
//               >
//                 <p className="p-3 text-gray-900">
//                   Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </main>
//     </>
//     )

// }

// export default Faqs;


import React, { useState } from 'react';

const AccordionItem = ({ idx, title, content }) => {
  const [tab, setTab] = useState(0);

  const handleClick = () => {
    setTab(tab === idx ? 0 : idx);
  };

  const handleRotate = () => {
    return tab === idx ? 'rotate-180' : '';
  };

  const handleToggle = () => {
    return tab === idx ? { maxHeight: '100%' } : { maxHeight: 0 };
  };

  return (
    <li className="bg-white my-2">
      <h2
        // onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer" 
      >
        <span>{title}</span>
        <svg
            onClick={handleClick}
            className={`fill-current text-slate-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        style={handleToggle()}
        className="border-l-2 border-slate-600 overflow-hidden duration-500 transition-all"
      >
        <p className="p-3 text-gray-900">{content}</p>
      </div>
    </li>
  );
};

const Accordion = () => {
  return (
    <div className="p-5 bg-white border-slate-900 pb-32">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
        <center>
            <h2 className="text-4xl items-center justify-center font-semibold text-vnet-blue mb-2">Frequently asked questions</h2>            <p className=" text-sm pt-1 text-slate-500 mb-3 ">Everything you need to know about the product and billing</p>
        </center>
          <ul className="flex flex-col ">
            <AccordionItem
              idx={1}
              title="Is there a free trail available?"
              content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation"
            />
            <hr class="h-px my-2 bg-slate-150 border-1"></hr>
            <AccordionItem
              idx={2}
              title="Can I change my plan later?"
              content="Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order."
            />
            <hr class="h-px my-2 bg-slate-150 border-1"></hr>

            <AccordionItem
              idx={3}
              title="What is your cancellation policy?"
              content="We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label."
            />
            <hr class="h-px my-2 bg-slate-150 border-1"></hr>
            <AccordionItem
              idx={4}
              title="Can other info be added to an invoice?"
              content="Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require."
            />
            <hr class="h-px my-2 bg-slate-150 border-1"></hr>
            <AccordionItem
              idx={5}
              title="How does billing work?"
              content="For USA domestic orders we offer FedEx and USPS shipping."
            />
            <hr class="h-px my-2 bg-slate-150 border-1"></hr>
            <AccordionItem
              idx={6}
              title="How do I change my account email?"
              content="Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
