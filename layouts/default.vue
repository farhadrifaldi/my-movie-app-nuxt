<script setup lang="ts">
// import AppHeader from "@/src/components/AppFooter.vue"
</script>
<template>
    <AppHeader />
    <div class="container mt-16 py-4 mx-auto min-h-[calc(100vh-100px)]">
        <slot />
    </div>
    <AppFooter />
</template>