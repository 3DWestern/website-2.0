'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'motion/react';
import { faqs } from '@/components/data/faqs';

export function FAQSection() {
	return (
		<section className="py-12 lg:py-20" id="faq">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-20"
				>
					<h2 className={`font-bold text-3xl lg:text-5xl xl:text-6xl mb-4 `}>FAQs</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<motion.div
								key={faq.id}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-30px" }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
							>
								<AccordionItem
									value={`item-${faq.id}`}
									className="border-l-2 border-transparent hover:bg-grey-bg transition-colors data-[state=open]:bg-grey-bg data-[state=open]:border-purple-light"
								>
									<AccordionTrigger className="text-xl md:text-2xl text-left transition-colors hover:text-primary-text data-[state=open]:text-purple-light data-[state=open]:font-semibold">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-base lg:text-lg text-secondary-text pl-4">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}
