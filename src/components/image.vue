<template>
    <div v-if="src" @click="open" :class="[alignement]">
        <div> 
            <div :class="['r-image-wrapper', size]" :style="{ maxWidth: maxwidthcustom }">
                <img :src="src" :alt="content.alt"/>
            </div>
            <figcaption v-if="content.caption">
                <k-writer :value="content.caption"></k-writer>
            </figcaption>
        </div>
    </div>
    <div v-else>
        <button @click="open" type="button" class="k-button k-block-figure-empty">
            <k-icon type="image" />
            <span class="k-button-text"> Sélectionnez une image … </span>
        </button>
    </div>

</template>


<script>

export default {

    computed: {
        captionMarks() {
            return this.field("caption", { marks: true }).marks;
        },
        alignement() {
            return 'r-align-'+this.content.alignement || "r-align-left";
        },
        size() {
            if(this.content.size !== "custom"){
                return this.content.size || false;
            }
        },
        maxwidthcustom() {
            if(this.content.size === "custom"){
                return this.content.customsizevalue + this.content.customsizeunit || false;
            }
            return null;
        },
        src() {
            if (this.content.image[0] && this.content.image[0].url) {
                return this.content.image[0].url;
            }
            return false;
        },
    }
};
</script>

<style lang="scss">

    figcaption {
        color: var(--color-text-light);
        line-height: 1.5rem;
        font-size: var(--text-sm);
        padding-top: 0.5rem;
        
        
    }
    .r-image-wrapper {
        display: flex;
        max-width: 100%;
        align-items: flex-start;
        text-align: left;
    }
    .r-align-left {
        display: flex;
        justify-content: flex-start;
    }
    .r-align-center {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .r-align-right {
        display: flex;
        justify-content: flex-end;
        text-align: right;
    }
    
    .r-image-wrapper  img {
        max-width: 100%;
    }

 
    .r-image-wrapper.default {
        max-width: 100%;
        img {
        max-height: 80rem;

        }
    }
    .r-image-wrapper.xl {
        max-width: 50rem;
    }
    .r-image-wrapper.md {
        max-width: 35rem;
    }
    .r-image-wrapper.sm {
        max-width: 16rem;
    }
    .r-image-wrapper.xs {
        max-width: 4rem;
    }


</style>