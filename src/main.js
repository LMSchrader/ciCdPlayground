import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Lisa Schrader",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automation, asure quality on master branch"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, ArgoCD",
    // What do you want to learn in this workshop?
    expectations: ["Getting to know the workshop. Finding out if I like to be a tutor."],
  },
});
