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
    <Link
      to={link}
      className="group relative flex items-center justify-center overflow-hidden aspect-[4/5] bg-white"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white leading-tight mb-1">
          {title}
        </h3>

        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
          Shop Now
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Link>
  </motion.div>
);

export default CategoryCard;