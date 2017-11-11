<template>
    <ais-index index-name="instant_search" app-id="latency" api-key="6be0576ff61c053d5f9a3225e2a90f76">
        <div class="flex flex-wrap -mx-4">
            <div class="w-1/4 px-4">
                <ais-tree-menu :attributes="['hierarchicalCategories.lvl0']"></ais-tree-menu>
                <ais-refinement-list attribute-name="brand"></ais-refinement-list>
            </div>
            <div class="w-3/4 px-4">           
                <ais-results>
                    <template slot-scope="{ result }">
                        <div class="mb-4">
                            {{ result.name }}
                        </div>
                    </template>
                </ais-results>
            </div>
        </div>
    </ais-index>
</template>

<script>
    export default {

    }
</script>