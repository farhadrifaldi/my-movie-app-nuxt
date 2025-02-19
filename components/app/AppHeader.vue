<script setup lang="ts">
import { AppHeaderSearch } from '#components';
import AppHeaderNavigation from './AppHeaderNavigation.vue';

</script>

<template>
    <div class="bg-white/5">
        <div class="container mx-auto flex items-center justify-between sticky h-16">
            <h1><img src="/images/MoovieTime-Logo.svg" alt="movie-logo"></h1>
            <AppHeaderSearch />
            <AppHeaderNavigation />
        </div>
    </div>
</template>