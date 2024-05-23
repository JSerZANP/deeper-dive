function createSvgFromString(svgString) {
  const parser = new DOMParser();
  const svgElement = parser
    .parseFromString(svgString, "image/svg+xml")
    .querySelector("svg");
  return svgElement;
}

const getDiverSvg = () =>
  createSvgFromString(
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.21"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>scuba-diving</title><path class="cls-1" d="M100.07,67.24c-.44-10.1-3-13.34-6.11-13.38A59.88,59.88,0,0,1,93.86,80c3.5.24,5.78-3.94,6.21-12.77Zm18.27-47.48a4.54,4.54,0,1,1-4.53,4.53,4.53,4.53,0,0,1,4.53-4.53ZM109,0a7.23,7.23,0,1,1-7.22,7.22A7.22,7.22,0,0,1,109,0ZM18.12,87.85Zm45,2.47A10.29,10.29,0,1,1,52.83,100.6,10.29,10.29,0,0,1,63.11,90.32ZM9.66,69.89a6.14,6.14,0,0,1,3.09-2v-.34a63.9,63.9,0,0,1,1-10.52,16.18,16.18,0,0,1,4-9.2l.48-.5-1.43-.46c-2-62.7,96.25-54.49,94.79.4,0,.65,0,1.28-.11,1.88a14.68,14.68,0,0,1,2.37,8,55.7,55.7,0,0,1,1.06,10.4,46.07,46.07,0,0,1-1.05,10c-.1,5-1.71,8.52-4.59,10.91a12.08,12.08,0,0,1-4.78,2.41,43,43,0,0,1-8.84,15.58A43.87,43.87,0,0,1,81,117.25a41.53,41.53,0,0,1-17.13,3.8,35.7,35.7,0,0,1-16.47-3.92,35,35,0,0,1-28.06,2.07A30.84,30.84,0,0,1,6.85,111,26.13,26.13,0,0,1,.29,97.17C-.92,89,1.58,79.58,9.66,69.89Zm8.89-.56a.86.86,0,0,1,0,.8,56.09,56.09,0,0,0,.66,6.47,1,1,0,0,1,.13.78l.1.52c.72,5.21,3.6,7.5,7.89,7.89H43.43c10.35-.58,11.64-6.27,16.12-8.67a9.92,9.92,0,0,1,9.5.29c4.06,2.6,5.4,8.1,14.82,8.1H98.39c6.11.65,9.72-1.74,9.65-8.6a44.4,44.4,0,0,0,0-19.17c0-6.14-3.67-8.55-9.23-9H27.22c-4.23,1.18-7.11,3.86-7.75,9a56.23,56.23,0,0,0-.92,11.59ZM15.12,83.64C12.74,88,12,92,12.52,95.38A13.88,13.88,0,0,0,16,102.69a18.54,18.54,0,0,0,7.48,4.91,22.36,22.36,0,0,0,12.51.69C31.55,104,28.23,100.14,25.9,95.8A31.57,31.57,0,0,1,23.8,91a13,13,0,0,1-8.68-7.36Zm48,1.06a15.91,15.91,0,1,1-15.9,15.9,15.9,15.9,0,0,1,15.9-15.9Z"/></svg>`
  );

const deeperDiveLinks = {
  "/reference/react/useContext": [
    {
      title: "How does Context work internally in React?",
      link: "https://jser.dev/react/2021/07/28/how-does-context-work",
    },
  ],
  "/reference/react/useDeferredValue": [
    {
      title: "How does React.useDeferredValue() work internally?",
      link: "https://jser.dev/react/2022/01/26/how-does-react-usedeferredvalue-work",
    },
  ],
  "/reference/react/useEffect": [
    {
      title: "A Complete Guide to useEffect",
      link: "https://overreacted.io/a-complete-guide-to-useeffect/",
    },
    {
      title: "How does useEffect() work internally in React?",
      link: "https://jser.dev/2023-07-08-how-does-useeffect-work",
    },
    {
      title:
        "When do useEffect() callbacks get run? Before paint or after paint?",
      link: "https://jser.dev/2023-08-09-effects-run-paint/",
    },
    {
      title: "The lifecycle of effect hooks in React",
      link: "https://jser.dev/react/2022/01/26/how-does-react-usedeferredvalue-work",
    },
  ],
  "/reference/react/useId": [
    {
      title: "How does useId() work internally in React?",
      link: "https://jser.dev/2023-04-25-how-does-useid-work",
    },
  ],
  "/reference/react/useImperativeHandle": [
    {
      title: "How does useImperativeHandle() work internally?",
      link: "https://jser.dev/react/2021/12/25/how-does-useImperativeHandle-work",
    },
  ],
  "/reference/react/useInsertionEffect": [
    {
      title: "How does useInsertionEffect() work internally in React?",
      link: "https://jser.dev/2023-07-02-use-insertion-effect",
    },
  ],
  "/reference/react/useLayoutEffect": [
    {
      title: " How does useLayoutEffect() work internally?",
      link: "https://jser.dev/react/2021/12/04/how-does-useLayoutEffect-work",
    },
  ],
  "/reference/react/useRef": [
    {
      title: "How does useRef() work internally?",
      link: "https://jser.dev/react/2021/12/05/how-does-useRef-work",
    },
  ],
  "/reference/react/useState": [
    {
      title: "How does useState work internally?",
      link: "https://jser.dev/2023-06-19-how-does-usestate-work",
    },
  ],
  "/reference/react/useSyncExternalStore": [
    {
      title: "How useSyncExternalStore() works internally in React?",
      link: "https://jser.dev/2023-08-02-usesyncexternalstore/",
    },
  ],
  "/reference/react/useTransition": [
    {
      title: "How does useTransition() work internally?",
      link: "https://jser.dev/2023-05-19-how-does-usetransition-work",
    },
  ],
  "/reference/react/Suspense": [
    {
      title:
        "How Suspense works internally in Concurrent Mode 1 - Reconciling flow",
      link: "https://jser.dev/react/2022/04/02/suspense-in-concurrent-mode-1-reconciling",
    },
    {
      title:
        "How Suspense works internally in Concurrent Mode 2 - Offscreen component",
      link: "https://jser.dev/react/2022/04/17/offscreen-component",
    },
  ],
  "/reference/react/createContext": [
    {
      title: "How does Context work internally in React?",
      link: "https://jser.dev/react/2021/07/28/how-does-context-work",
    },
  ],
  "/reference/react/forwardRef": [
    {
      title: "How forwardRef() works internally in React?",
      link: "https://jser.dev/2023-07-28-how-forwardref-works-internally",
    },
  ],
  "/reference/react/lazy": [
    {
      title: "How lazy() works internally in React?",
      link: "https://jser.dev/2023-07-25-how-lazy-works-internally",
    },
  ],
  "/reference/react/memo": [
    {
      title: "How does React.memo() work internally?",
      link: "https://jser.dev/react/2022/01/11/how-react-memo-works",
    },
  ],
  "/reference/react/startTransition": [
    {
      title: "How does useTransition() work internally?",
      link: "https://jser.dev/2023-05-19-how-does-usetransition-work",
    },
  ],
  "/reference/react-dom/createPortal": [
    {
      title: "How does React Portal work internally ?",
      link: "https://jser.dev/react/2022/09/24/how-does-react-portal-work",
    },
  ],
  "/reference/react-dom/client/hydrateRoot": [
    {
      title: "How basic hydration works internally in React?",
      link: "https://jser.dev/react/2023/03/17/how-does-hydration-work-in-react",
    },
    {
      title: "How hydration works with Suspense internally in React?",
      link: "https://jser.dev/react/2023/03/27/hydration-with-suspense",
    },
    {
      title:
        "What is Progressive Hydration and how does it work internally in React?",
      link: "https://jser.dev/react/2023/03/30/progressive-hydration",
    },
  ],
  "/reference/react/use": [
    {
      title: "How does use() work internally in React?",
      link: "https://jser.dev/2024-03-16-how-does-use-work-internally-in-react/",
    },
  ],
  "/reference/react/useOptimistic": [
    {
      title: "How does useOptimistic() work internally in React?",
      link: "https://jser.dev/2024-03-20-how-does-useoptimisticwork-internally-in-react/",
    },
  ],
  "/reference/react/Component": [
    {
      title: "How does ErrorBoundary work internally?",
      link: "https://jser.dev/2023-05-26-how-does-errorboundary-work/",
    },
  ],
  "/learn/rendering-lists": [
    {
      title: "How does 'key' work internally in React",
      link: "https://jser.dev/react/2022/02/08/the-diffing-algorithm-for-array-in-react",
    },
  ],
};

const deeperDiveAnnotation = {
  "https://react.dev/reference/react/useEffect": [
    {
      type: "link",
      start: 74,
      end: 82,
      root: "#__next", // if root is null, then it is document.body
      path: [3, 1, 0, 0, 1, 0, 0, 13, 4, 0],
      nodeIndex: 0,
      text: "generally",
      link: "https://jser.dev/2023-08-09-effects-run-paint/",
    },
  ],
  "https://react.dev/reference/react/useState": [
    {
      type: "link",
      start: 35,
      end: 120,
      root: "#__next", // if root is null, then it is document.body
      path: [3, 1, 0, 0, 1, 0, 0, 25, 1, 0],
      nodeIndex: 6,
      text: "in some cases React may still need to call your component before skipping the children",
      link: "https://jser.dev/2023-06-19-how-does-usestate-work/#52-setstate-with-same-value-might-still-trigger-re-render",
    },
  ],
};

function generatePathToTargetNode(targetNode) {
  const path = [];
  let root = "body";

  let currentNode = targetNode.parentElement;

  const nodeIndex = Array.prototype.indexOf.call(
    currentNode.childNodes,
    targetNode
  );

  while (currentNode !== document.body) {
    // if element has id, use it as root
    if (currentNode.id) {
      root = currentNode.id;
      break;
    }

    const parent = currentNode.parentElement;
    const siblings = parent.children;
    const index = Array.prototype.indexOf.call(siblings, currentNode);
    path.push(index);
    currentNode = parent;
  }

  path.reverse();
  return {
    root,
    path,
    nodeIndex,
  };
}

function targetNodeFromPath({ root = "body", path, nodeIndex }) {
  let currentNode = document.querySelector(root);

  if (currentNode == null) {
    return null;
  }

  try {
    for (const index of path) {
      currentNode = currentNode.children[index];
    }
    return currentNode.childNodes[nodeIndex];
  } catch (e) {
    return null;
  }
}

function getTextFromTextNode(node, start, end) {
  if (node.nodeType === 3) {
    return node.textContent.slice(start, end + 1);
  }
  return "";
}

function transformTextToLinkNode(textNode, start, end, link) {
  const before = getTextFromTextNode(textNode, 0, start - 1);
  const after = getTextFromTextNode(
    textNode,
    end + 1,
    textNode.textContent.length
  );

  const linkNode = document.createElement("a");
  linkNode.href = link;
  linkNode.target = "_blank";
  linkNode.title = "Deeper Dive!";
  linkNode.className =
    "inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal";
  linkNode.append(
    document.createTextNode(textNode.textContent.slice(start, end + 1))
  );

  const diverSvg = getDiverSvg();
  diverSvg.style.width = "14px";
  diverSvg.style.height = "14px";
  diverSvg.style.display = "inline-block";
  diverSvg.style.fill = "currentColor";
  diverSvg.style.margin = "0 4px";
  linkNode.append(diverSvg);

  const container = document.createElement("span");
  container.append(before);
  container.append(linkNode);
  container.append(after);

  textNode.parentNode.replaceChild(container, textNode);
}

function extendReactDev() {
  // apply annotation first.
  Object.keys(deeperDiveAnnotation).forEach((url) => {
    if (location.origin + location.pathname === url) {
      const annotations = deeperDiveAnnotation[url];
      annotations.forEach((annotation) => {
        if (annotation.type === "link") {
          const targetNode = targetNodeFromPath(annotation);
          if (targetNode == null) {
            return;
          }
          const text = getTextFromTextNode(
            targetNode,
            annotation.start,
            annotation.end
          );
          if (text !== annotation.text) {
            return;
          }
          const { start, end } = annotation;
          transformTextToLinkNode(targetNode, start, end, annotation.link);
        }
      });
    }
  });

  // add links to navigation and ToC section
  Object.keys(deeperDiveLinks).forEach((path) => {
    const navLink = document.querySelector(
      `nav[role="navigation"] a[href="${path}"]`
    );

    // extend left navigation
    if (navLink != null && navLink.querySelector(".ddi_link_icon") == null) {
      const diver = document.createElement("span");
      diver.className = "ddi_link_icon";
      const diverSvg = getDiverSvg();
      diverSvg.style.width = "16px";
      diverSvg.style.height = "16px";
      diverSvg.style.display = "inline-block";
      diverSvg.style.fill = "currentColor";
      diverSvg.title = "Deeper Dive";
      diver.append(diverSvg);

      const link = navLink?.firstElementChild;
      if (link) {
        link.style.display = "flex";
        link.style.alignItems = "center";
        link.append(diver);
      }
    }

    // extend ToC
    if (location.pathname.endsWith(path)) {
      const toc = document.querySelector(".list-disc");
      if (toc && toc.querySelector(".ddi_toc") == null) {
        const liClass = "ddi_toc " + (toc.firstElementChild?.className ?? "");
        const heading = document.createElement("p");
        heading.className =
          "inline border-b border-link border-opacity-0  duration-100 ease-in transition leading-normal";
        const diverSvg = getDiverSvg();
        diverSvg.style.width = "16px";
        diverSvg.style.height = "16px";
        diverSvg.style.display = "inline-block";
        diverSvg.style.fill = "currentColor";
        diverSvg.style.marginRight = "5px";
        heading.append(diverSvg);
        heading.append("Deeper Dive");

        const li = document.createElement("li");
        li.className = liClass ?? "";
        li.append(heading);

        const ul = document.createElement("ul");
        ul.className = "ms-6 my-3 list-disc";

        const links = deeperDiveLinks[path];
        links.forEach((link) => {
          const a = document.createElement("a");
          a.href = link.link;
          a.target = "_blank";
          a.className =
            "inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal";

          const title = document.createTextNode(link.title);
          a.append(title);

          const domain = new URL(link.link).hostname;
          const small = document.createElement("small");
          small.className = "text-tertiary";
          small.append(" - " + domain);
          a.append(small);

          const li = document.createElement("li");
          li.append(a);
          ul.append(li);
        });

        li.append(ul);
        toc.append(li);
      }
    }
  });
}

const observerOptions = {
  childList: true,
  subtree: true,
};

function onDOMChange(records) {
  // skip if addedNodes are only ddi_
  let shouldExtend = false;
  outer: for (const record of records) {
    if (record.addedNodes) {
      for (const node of record.addedNodes) {
        if (!node.className?.startsWith("ddi_")) {
          shouldExtend = true;
          break outer;
        }
      }
    }
  }
  if (shouldExtend) {
    extendReactDev();
  }
}

extendReactDev();
const observer = new MutationObserver(onDOMChange);
observer.observe(document.body, observerOptions);
