<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  tags: string[];
  date: string;
}>();


const { tags } = toRefs(props);
</script>

<template>
  <div class="flex justify-between items-center mb-5 text-gray-500">
    <div>
      <span v-for="(tag, number) in tags" :key="`${number}_${tag}`"
            class="mr-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">{{
          tag
        }}</span>
    </div>
    <span class="text-sm">{{ date }}</span>
  </div>
</template>
