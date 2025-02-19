<script setup lang="ts">
import { Icon } from '#components';

const text = ref("")
</script>

<template>
    <div class="relative w-full md:w-1/2">
        <span class="absolute left-2 top-2"><img src="/images/movie-icon.svg" /></span>
        <input v-model="text" type="text" class="bg-[rgb(30,35,43)] border-0 h-10 rounded-sm w-full px-10"
            placeholder="Find Movie" />
        <span>
            <Icon v-if="text.length < 1" name="mdi-light:magnify" class="absolute right-2 top-2 text-neutral-500"
                size="25px" />
        </span>
        <ul v-if="text.length > 4" class="absolute w-full bg-black rounded-b-lg z-50 py-4">
            <li class="hover:bg-white/10 py-1 px-4">Test</li>
            <li class="hover:bg-white/10 py-1 px-4">Test</li>
            <li class="hover:bg-white/10 py-1 px-4">Test</li>
            <li class="hover:bg-white/10 py-1 px-4">Test</li>
        </ul>
    </div>
</template>