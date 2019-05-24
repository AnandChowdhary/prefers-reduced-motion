export default (fallbackToNone: Boolean = true) => {
  const testId = `test_${Math.random()
    .toString(36)
    .substring(2)}`;
  const css: HTMLStyleElement = document.createElement("style");
  const testElement: HTMLDivElement = document.createElement("div");
  testElement.innerHTML = "Test element";
  testElement.setAttribute("id", testId);

  css.innerHTML = /* css */ `
    html {
        content: "";
    }
    @media (prefers-reduced-motion: reduce) {
      html {
        content: "reduce";
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      html {
        content: "no-preference";
      }
    }
  `;

  // Append CSS and test element
  if (document.head || document.documentElement) {
    (document.head || document.documentElement).appendChild(css);
  }
  if (document.body) {
    document.body.appendChild(testElement);
  }

  // Fetch computed value
  const value =
    getComputedStyle(document.documentElement)
      .getPropertyValue("content")
      .replace(/"/g, "") || (fallbackToNone ? "no-preference" : "unknown");

  // Remove appended items from the DOM
  if (testElement.parentNode) {
    testElement.parentNode.removeChild(testElement);
  }
  if (css.parentNode) {
    css.parentNode.removeChild(css);
  }

  return value;
};
