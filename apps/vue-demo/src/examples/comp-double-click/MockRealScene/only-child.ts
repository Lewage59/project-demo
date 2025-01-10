import {
  cloneVNode,
  Comment,
  defineComponent,
  Fragment,
  h,
  Text,
  withDirectives,
  inject,
} from "vue";
import type { VNode } from "vue";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};
const isObject = (val: unknown) => typeof val === "object" && !!val;

const NAME = "OnlyChild";

function wrapTextContent(s: string | VNode) {
  return h("span", { class: "el-only-child__content" }, [s]);
}

function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null;
  const children = node as VNode[];
  for (let i = 0; i < children.length; i++) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
    const child = children[i];
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          // eslint-disable-next-line no-continue
          continue;
        case Text:
          return wrapTextContent(child);
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children as VNode[]);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}

const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    return () => {
      console.log("🚀 ~ setup ~ attrs:", attrs);
      const defaultSlot = slots.default?.(attrs);
      if (!defaultSlot) return null;

      if (defaultSlot.length > 1) {
        console.warn(NAME, "ElOnlyChild requires exact only one valid child.");
        return null;
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        console.warn(NAME, "no valid child node found", attrs);
        return null;
      }

      return withDirectives(cloneVNode(firstLegitNode, attrs), []);
    };
  },
});

export default OnlyChild;
