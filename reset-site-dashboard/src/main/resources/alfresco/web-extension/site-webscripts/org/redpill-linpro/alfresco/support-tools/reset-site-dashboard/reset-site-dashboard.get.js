function main() {
  var shortName = args.shortName;
  var preset = args.preset;
  var tokens = new Array();
  model.result = "error";
  tokens["siteid"] = shortName;
  sitedata.newPreset(preset, tokens);
  model.result = "ok";
}
main();