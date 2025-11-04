import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for card variants
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        purple: "bg-primary text-primary-foreground",
        blue: "bg-blue-500 text-primary-foreground",
        gray: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps extends VariantProps<typeof cardVariants> {
  /**
   * The main title of the card.
   */
  title: string;
  /**
   * The URL the card's link should point to.
   */
  href?: string;
  /**
   * The source URL for the decorative image.
   */
  imgSrc?: string;
  /**
   * The alt text for the decorative image, for accessibility.
   */
  imgAlt?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href, imgSrc, imgAlt }, ref) => {
    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          {href && (
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto flex items-center text-sm font-semibold group-hover:underline pt-4"
          >
            LEARN MORE
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          )}
        </div>
        
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="absolute -right-8 -bottom-8 w-40 h-40 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400"
          />
        )}
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
