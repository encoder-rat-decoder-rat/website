import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./MainLayout.tsx", [
    index("./pages/Home.tsx"),
    route("projects/gender-generator", "./pages/projects/GenderGenerator.tsx"),
  ]),
  ...prefix("orfelia", [
    layout("./pages/orfelia/Layout.tsx", [
      index("./pages/orfelia/Home.tsx"),
      route("about", "./pages/orfelia/About.tsx"),
      route("gallery", "./pages/orfelia/Gallery.tsx"),
      route("splunk", "./pages/orfelia/Splunk.tsx"),
      route("messsy", "./pages/orfelia/Messsy.tsx"),
    ]),
  ]),
  route("messsytix", "./pages/orfelia/MesssyTixRedirect.tsx"),
] satisfies RouteConfig;