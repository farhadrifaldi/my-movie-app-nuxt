<script setup lang="ts">
import { links } from "@/utils/constants/nagivations"

</script>

<template>
    <ul class="hidden md:flex">
        <li v-for="link in links" class="p-3 font-medium uppercase relative group hover:bg-[#1e232b] rounded-sm">
            <template v-if="link.child && link.child.length > 0">
                <a href="" class="flex items-center">
                    <Icon v-if="link.icon" :name="link.icon" size="25" class="mr-4" />
                    {{ link.label }}
                </a>
                <ul
                    class="p-0 group-hover:p-1 absolute bg-white text-black shadow-2xl rounded-md max-h-0 group-hover:max-h-[600px] overflow-hidden transition-all ease-in-out">
                    <li v-for="childNav in link.child"
                        class=" py-1 px-3 w-[150px] hover:bg-[#1e232b] hover:text-white rounded-sm">
                        <a :href="childNav.to" class="flex items-center">
                            <span class="mt-1">{{ childNav.label }}</span>
                        </a>
                    </li>
                </ul>
            </template>
            <a v-else :href="link.to">
                <Icon v-if="link.icon" :name="link.icon" size="25" class="mr-4" />
                <span class="mt-1">{{ link.label }}</span>
            </a>
        </li>
    </ul>
</template>