<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view ></router-view>
    </n-config-provider>
  </div>
</template>

<script setup>
const themeOverrides =  {
  common: {
    primaryColor: '#3399ff',
    primaryColorHover: '#57aaf2',
    primaryColorPressed: '1d69bf',
    primaryColorSupp: '#57aaf2'
  }
}
</script>

<style lang="scss" scoped>

</style>