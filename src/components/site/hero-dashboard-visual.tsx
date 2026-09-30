import { motion } from "motion/react";
import { Activity, Boxes, Truck, TrendingUp } from "lucide-react";

const STATS = [
  { label: "Warehouse Accuracy", value: "98.6%", icon: Boxes },
  { label: "On-Time Deliveries", value: "94.2%", icon: Truck },
  { label: "Operational Uptime", value: "99.9%", icon: Activity },
];

export default function HeroDashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-2xl" />
      <div className="rounded-2xl border border-white/10 bg-[oklch(0.16_0.03_264)] p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-white/50">
            <span className="live-dot size-1.5 rounded-full bg-emerald-400" />
            Codefest Operations Console
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <stat.icon className="size-4 text-primary" />
              <div className="mt-2 text-lg font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-[10px] leading-tight text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="size-3.5 text-emerald-400" />
              Order Fulfillment Trend
            </span>
            <span className="text-emerald-400">+12.4%</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[40, 55, 48, 62, 58, 70, 66, 80, 75, 92, 85, 98].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.03, duration: 0.4 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent"
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] tracking-wide text-white/40 uppercase">
              Active Vehicles
            </div>
            <div className="mt-1 text-base font-semibold text-white">
              34 / 40
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] tracking-wide text-white/40 uppercase">
              Pending Dispatch
            </div>
            <div className="mt-1 text-base font-semibold text-white">76</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
