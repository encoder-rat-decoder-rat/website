import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  // return a list of URLs to prerender at build time
  async prerender() {
    return [];
  },
} satisfies Config;
