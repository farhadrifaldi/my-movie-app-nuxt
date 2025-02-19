<script setup lang="ts">
import { links } from "@/utils/constants/nagivations"
const open = ref(false)

</script>

<template>
    <button @click="open = !open">
        <Icon name="tdesign:view-list" size="28" />
    </button>
    <div
        :class="`bg-[#292e36] fixed top-14 right-0 h-screen transition-all overflow-hidden ${open ? 'w-[250px]' : 'w-0'}`">
        <div class="px-2">
            <AppHeaderSearch />
        </div>
        <ul class="mt-2">
            <li v-for="link in links" class="px-4 py-1 group">
                <template v-if="link?.child && link?.child.length > 0">
                    <div class="flex justify-between items-center">
                        {{ link.label }}
                        <Icon name="line-md:chevron-down" />
                    </div>
                    <ul class="pl-4 max-h-0 group-hover:max-h-screen overflow-hidden transition-all">
                        <li v-for="childLink in link.child" class="px-4 py-1">
                            <RouterLink :to="link.to">
                                {{ childLink.label }}
                            </RouterLink>
                        </li>
                    </ul>
                </template>
                <RouterLink v-else :to="link.to" class="text-white hover:text-gray-300">{{ link.label }}</RouterLink>
            </li>
        </ul>
    </div>
</template>