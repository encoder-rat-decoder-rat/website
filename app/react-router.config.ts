import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: true,
  // return a list of URLs to prerender at build time
  async prerender() {
    return ["/", "/orfelia", "/orfelia/about", "/orfelia/gallery", "/orfelia/splunk", "/orfelia/messsy"];
  },
} satisfies Config;
