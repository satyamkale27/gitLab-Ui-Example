<template>
  <div>
    <gl-button variant="primary">Click Me</gl-button>
    <gl-accordion variant="primary"> hii there</gl-accordion>
  </div>
</template>

<script>
import { GlButton } from "@gitlab/ui";
import { GlAccordion } from "@gitlab/ui";

export default {
  components: {
    GlButton,
    GlAccordion,
  },
};
</script>
