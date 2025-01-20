import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./MainLayout.tsx", [
    index("./routes/Home.tsx"),
    route("/projects/gender-generator", "./routes/projects/GenderGenerator.tsx"),
  ]),
  ...prefix("orfelia", [
    layout("./routes/orfelia/Layout.tsx", [
      index("./routes/orfelia/Home.tsx"),
      route("about", "./routes/orfelia/About.tsx"),
      route("gallery", "./routes/orfelia/Gallery.tsx"),
      route("splunk", "./routes/orfelia/Splunk.tsx"),
      route("messsy", "./routes/orfelia/Messsy.tsx"),
    ]),
  ]),
  route("messsytix", "./routes/orfelia/MesssyTixRedirect.tsx"),
] satisfies RouteConfig;