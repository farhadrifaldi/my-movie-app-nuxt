<template>
  <div class="bg-neutral-100 text-black p-4 shadow-md rounded-lg">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="bg-neutral-300 w-[50px] h-[50px] rounded-full mr-3">&nbsp;</div>
        <div>
          <p class="font-semibold">{{ review.author }}</p>
          <p class="text-sm text-neutral-600">{{ $dayjs(review.created_at).format('MMMM DD, YYYY') }}</p>
        </div>
      </div>
      <div class="flex items-start bg-neutral-200 rounded-md px-2 py-3">
        <Icon name="material-symbols:star" size="24" class="text-yellow-400 mr-1" />
        <span class="font-semibold text-4xl">{{ review.author_details.rating }}</span>
      </div>
    </div>
    <p class="mt-5 italic">{{ trimDesc(review.content) }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { MovieReview } from '~/utils/types/movies';

const { review } = defineProps<{ review: MovieReview }>()

function trimDesc(desc: string) {
  return desc.length > 100 ? desc.substring(0, 500) + '...' : desc;
}

</script>

<style></style>