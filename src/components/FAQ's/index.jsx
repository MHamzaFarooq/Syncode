import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/utils/faqs";
const FAQs = () => {
  const element = faqs.map((item, index) => {
    return (
      <Accordion key={index} type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });

  return <div className="my-[160px]">{element}</div>;
};

export default FAQs;
