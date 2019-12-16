<template>
  <ol class="table-of-contents">
    <li
      class="table-of-contents__item"
      v-for="(chapter, index) in chapters"
      :key="index"
    >
      <router-link :to="chapter.route">{{ chapter.title }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    const titles = [
      '忉利天宫神通品第一',
      '分身集会品第二',
      '观众生业缘品第三',
      '阎浮众生业感品第四',
      '地狱名号品第五',
      '如来赞叹品第六',
      '利益存亡品第七',
      '阎罗王众赞叹品第八',
      '称佛名号品第九',
      '校量布施功德缘品第十',
      '地神护法品第十一',
      '见闻利益品第十二',
      '嘱累人天品第十三',
    ]
    return {
      chapters: titles.map((t, i) => ({
        route: `/chapter/${i + 1}`,
        title: t,
      })),
    }
  },
}
</script>

<style lang="scss">
.table-of-contents {
  margin: 0;
  margin-top: 1.999em;

  &__item {
    font-size: 0.707em;
    line-height: 2;
  }
}

@media screen and (min-width: 400px) {
  .table-of-contents {
    margin: 1em;
    margin-top: 1.999em;

    &__item {
      font-size: 1em;
    }
  }
}
</style>
