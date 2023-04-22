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
    primaryColor: '#01c4e2',
    primaryColorHover: '#24c4d6',
    primaryColorPressed: '0088a3',
    primaryColorSupp: '#24c4d6'
  }
}
</script>

<style lang="scss" scoped>

</style>