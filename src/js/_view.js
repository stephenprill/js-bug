/**
 * Selects a template from the DOM, merges it with a data object,
 * and injects the merged template into the DOM.
 *
 * @param  template  The source where a template is defined
 * @param  data      An object no more than one level deep
 * @param  id        The id of an element where you want the template placed
 */
const generateView = (template, data, id) => {
  let dest = document.getElementById(id),
      re  = /<%([^%>]+)?%>/g,
      match;

  // The above regular expression uses the "g" flag, so this exec() method can be called
  // multiple times to find successive matches in the same string. This will match
  // multipule <% prop %> variables in a template and eventually evaluate to null.
  while(match = re.exec(template)) {
    template = template.replace(match[0], data[match[1].trim('')]);
  }

  // Inject the generated template into the DOM.
  dest.innerHTML = template;
};
