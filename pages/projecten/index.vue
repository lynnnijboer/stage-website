<template>
  <section
    v-if="currentPage && currentPage.fields"
    class="container caseBlockModule"
  >
    <article
      class="caseBlockModule__text"
      :class="currentPage.fields.title ? 'transform-small' : ''"
    >
      <h3
        v-if="currentPage.fields.title"
        class="caseBlockModule__title h4 text-color-dark"
      >
        {{ currentPage.fields.title }}
      </h3>
      <p>{{ currentPage.fields.intro }}</p>
    </article>

    <div class="optionMenu mb-5">
      <select v-model="sortOption">
        <option value="">--Sorteren--</option>
        <option @click="changeSortOption('title')" value="title">
          Title (A to Z)
        </option>
        <option @click="changeSortOption('date')" value="date">
          Date (oldest to newest)
        </option>
      </select>
      <div class="optionMenu__checkbox--wrapper">
        <div v-for="tag in availableTags" :key="tag">
          <input type="checkbox" :value="tag" v-model="selectedTags" />
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <div v-if="projects" class="caseBlocks">
      <caseBlock
        v-for="(project, index) in projects"
        :icon="project.fields.icon"
        :key="index"
        :img="project.fields.img.fields.file.url"
        :title="project.fields.title"
        :text="project.fields.intro"
        :link="`/projecten/${project.fields.slug}`"
        :tags="project.fields.tags"
        :date="project.fields.date"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "projecten",
  data() {
    return {
      currentPage: {},
      projects: [],
      availableTags: ["javascript", "html", "css"],
      selectedTags: [],
      sortOption: "title",
    };
  },

  async fetch() {
    //project overview
    const { items } = await this.$contentful.getEntries({
      content_type: "projecten",
      include: 3,
    });

    [this.currentPage] = items;

    //project zelf
    console.log(this.availableTags);

    const projectItems = await this.$contentful.getEntries({
      content_type: "project",
      "fields.tags[in]": this.selectedTagsContentful,
      order: `fields.${this.sortOption}`,
    });

    this.projects = projectItems.items;
  },

  watch: {
    selectedTags: "$fetch",
    sortOption: "$fetch",
  },

  computed: {
    changeSortOption(option) {
      if (option === "title") {
        this.sortOption = "title"; // Ascending order (A to Z)
      } else if (option === "date") {
        this.sortOption = "date"; // Ascending order (oldest to newest)
      } else if (option === "oldest") {
        this.sortOption = "date_desc"; // Descending order (newest to oldest)
      }
    },
    selectedTagsContentful() {
      let queryString = "";
      if (this.selectedTags.length === 0) {
        this.availableTags.forEach((tag) => {
          queryString += `${tag},`;
        });
      } else {
        this.selectedTags.forEach((tag) => {
          queryString += `${tag},`;
        });
      }
      return queryString;
    },
  },
};
</script>

<style lang="scss" scoped>
.caseBlockModule {
  padding: {
    top: rem(100px);
    bottom: rem(100px);
  }

  &__title {
    margin: 0;
  }

  &__text {
    margin-bottom: 40px;
    color: var(text-color-beta);
  }

  .caseBlocks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    @include media-breakpoint-up(md) {
      grid-template-columns: 1fr 1fr;
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .optionMenu {
    display: flex;
    gap: 20px;
    justify-content: flex-end;

    &__checkbox--wrapper {
      display: flex;
      gap: 15px;
    }
  }
}
</style>
