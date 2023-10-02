<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <div v-else>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Blog
              All Posts</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Example for Vue 3 + TypeScript + Vite +
              Vue Apollo + json-graphql-server</p>
          </div>

          <div class="grid gap-8 lg:grid-cols-2">
            <Article v-for="post in posts" :post="post" :key="post.id"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Article from '@/components/Article.vue'

const ALL_POSTS = gql`
  query GetAllPosts {
    allPosts {
      id
      title
      content
      tags
      date
      User {
        name
      }
      Comments {
        body
      }
    }
  }
`;

const { result, loading, error } = useQuery(ALL_POSTS);


const posts = computed(() => {
  if (result.value && result.value.allPosts) {
    return result.value.allPosts;
  }
  return [];
});
</script>
