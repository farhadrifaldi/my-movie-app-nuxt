<script setup lang="ts">
// import AppHeader from "@/src/components/AppFooter.vue"
</script>
<template>
    <div class="bg-[#1e232b] min-h-screen w-full text-white">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>