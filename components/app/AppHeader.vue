<script setup lang="ts">
import { AppHeaderNavigationMobile, AppHeaderSearch } from '#components';
import AppHeaderNavigation from './AppHeaderNavigation.vue';

const { isMobile } = useDevice()
</script>

<template>
    <div class="bg-[#292e36] px-2 md:px-0 fixed top-0 w-full z-50">
        <div class="container mx-auto flex items-center justify-between h-16">
            <h1><img src="/images/MoovieTime-Logo.svg" alt="movie-logo" class="h-7"></h1>
            <AppHeaderSearch v-if="!isMobile" />
            <AppHeaderNavigationMobile v-if="isMobile" />
            <AppHeaderNavigation v-else />
        </div>
    </div>
</template>