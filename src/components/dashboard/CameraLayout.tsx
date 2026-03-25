import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courts = Array.from({ length: 8 }, (_, i) => i + 1);

const CameraLayout = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h3 className="font-bold text-foreground mb-1">Camera Configuration</h3>
      <p className="text-xs text-muted-foreground mb-5">1 PTZ camera per court — 8 courts, 8 cameras</p>
      <div className="grid grid-cols-4 gap-3">
        {courts.map((num) => (
          <div
            key={num}
            className="relative aspect-[3/2] rounded-xl bg-secondary/80 border border-border flex flex-col items-center justify-center gap-1.5"
          >
            <Camera size={16} className="text-primary" />
            <span className="text-xs font-bold text-foreground">Court {num}</span>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 italic">
        Cameras installed on ceiling mounts — no court modifications required
      </p>
    </motion.div>
  );
};

export default CameraLayout;
