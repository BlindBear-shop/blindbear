import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  index?: number;
}

const CategoryCard = ({ title, image, link, index = 0 }: CategoryCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
  >
    <Link to={link} className="group relative block overflow-hidden aspect-[3/4]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-background leading-tight mb-1">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-body tracking-[0.15em] uppercase text-background/60 group-hover:text-background transition-colors">
          Shop Now
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  </motion.div>
);

export default CategoryCard;
