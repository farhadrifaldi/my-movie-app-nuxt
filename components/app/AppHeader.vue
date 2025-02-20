<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { AppHeaderNavigationMobile, AppHeaderSearch } from '#components';
import AppHeaderNavigation from './AppHeaderNavigation.vue';

const { isMobile } = useDevice()
const scrollY = ref(0)

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
function handleScroll() {
    scrollY.value = window.scrollY
}
</script>

<template>
    <div :class="`${scrollY < 50 ? 'bg-[#292e36]/60' : 'bg-[#292e36]'} px-2 md:px-0 fixed top-0 w-full z-50 transition-colors`">
        <div class="container mx-auto flex items-center justify-between h-16">
            <NuxtLink to="/">
                <h1><img src="/images/MoovieTime-Logo.svg" alt="movie-logo" class="h-7"></h1>
            </NuxtLink>
            <AppHeaderSearch v-if="!isMobile" />
            <AppHeaderNavigationMobile v-if="isMobile" />
            <AppHeaderNavigation v-else />
        </div>
    </div>
</template>