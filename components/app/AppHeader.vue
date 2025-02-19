<script setup lang="ts">
import { AppHeaderNavigationMobile, AppHeaderSearch } from '#components';
import AppHeaderNavigation from './AppHeaderNavigation.vue';

const { isMobile } = useDevice()
</script>

<template>
    <div class="bg-white/5 px-2 md:px-0">
        <div class="container mx-auto flex items-center justify-between sticky h-16">
            <h1><img src="/images/MoovieTime-Logo.svg" alt="movie-logo" class="h-7"></h1>
            <AppHeaderSearch v-if="!isMobile" />
            <AppHeaderNavigationMobile v-if="isMobile" />
            <AppHeaderNavigation v-else />
        </div>
    </div>
</template>