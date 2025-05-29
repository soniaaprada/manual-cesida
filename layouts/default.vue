<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import NavMenu from '~/components/NavMenu.vue';

const sidebar_visible = ref(false);

function toggleSidebar() {
    sidebar_visible.value = !sidebar_visible.value;
}

const sidebar_ref = ref(null);
const toggle_button_ref = ref(null);

function handleClickOutside(event) {
    if (sidebar_visible.value) {
        if (
            sidebar_ref.value &&
            !sidebar_ref.value.contains(event.target) &&
            toggle_button_ref.value &&
            !toggle_button_ref.value.contains(event.target)
        ) {
            sidebar_visible.value = false;
        }
    }
}

const router = useRouter();

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    sidebar_visible.value = false;
    router.afterEach(() => {
        sidebar_visible.value = false;
    });
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div class="viewport">
        <button ref="toggle_button_ref" class="sidebar_toggle" @click="toggleSidebar">
            ☰
        </button>
        <aside ref="sidebar_ref" class="sidebar" :class="{ visible: sidebar_visible }">
            <NavMenu />
        </aside>
        <div class="content_wrapper">
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.viewport {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .content_wrapper {
        display: flex;
        padding: 2rem;
        justify-content: center;
        flex: 1;
        overflow: scroll;
        transition: filter 0.3s ease;

        .content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            height: fit-content;
            width: clamp(40vw, 50%, 80vw);
        }
    }
}

.sidebar_toggle {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    color: $negro;
    border: none;
    padding: 0.5rem .75rem;
    font-size: 1.5rem;
    cursor: pointer;
}

.sidebar {
    display: flex;
    width: 25%;
    min-width: fit-content;
    background: $blanco;
    transition: transform 0.3s ease;
    z-index: 1000;
}

@media (max-width: 768px) {
    .viewport {
        flex-direction: column;

        .content_wrapper {
            .content {
                width: clamp(70vw, 80%, 90vw);
            }
        }
    }

    .sidebar_toggle {
        display: block;
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        max-width: fit-content;
        background: $blanco;
        transform: translateX(-100%);
        overflow-y: scroll;

        &.visible {
            transform: translateX(0);
        }
    }
}
</style>
