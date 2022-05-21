import { ref, watch } from "vue";
import {
  TransitionPresets,
  useElementBounding,
  useTransition,
  useWindowScroll,
  watchDebounced,
} from "@vueuse/core";

export const useSmoothScroll = () => {
  let startScrollPosition = 0;
  const additionalScrollValueRef = ref(0);
  const disabledTransitionRef = ref(true);
  const computedAdditionalScrollValueRef = useTransition(
    additionalScrollValueRef,
    {
      duration: 700,
      transition: TransitionPresets.easeOutQuart,
      disabled: disabledTransitionRef,
    }
  );
  watch(computedAdditionalScrollValueRef, (additionalScrollValue) => {
    if (disabledTransitionRef.value) return;
    window.scrollTo(0, startScrollPosition + additionalScrollValue);
  });
  watchDebounced(
    computedAdditionalScrollValueRef,
    () => {
      disabledTransitionRef.value = true;
      additionalScrollValueRef.value = 0;
    },
    { debounce: 300 }
  );

  const windowScroll = useWindowScroll(window);
  const targetElRef = ref(null);
  const targetBounding = useElementBounding(targetElRef);
  const scrollToTarget = () => {
    disabledTransitionRef.value = false;
    startScrollPosition = windowScroll.y.value;
    additionalScrollValueRef.value = targetBounding.y.value;
  };

  return { targetElRef, scrollToTarget };
};
