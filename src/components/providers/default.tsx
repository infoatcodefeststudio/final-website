import { MotionConfig } from "motion/react";
import { AuthProvider } from "./auth.tsx";
import { ConvexProvider } from "./convex.tsx";
import { QueryClientProvider } from "./query-client.tsx";
import { ThemeProvider } from "./theme.tsx";
import { Toaster } from "../ui/sonner.tsx";
import { TooltipProvider } from "../ui/tooltip.tsx";

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <AuthProvider>
        <ConvexProvider>
          <QueryClientProvider>
            <TooltipProvider>
              <ThemeProvider>
                <Toaster />
                {children}
              </ThemeProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </ConvexProvider>
      </AuthProvider>
    </MotionConfig>
  );
}
