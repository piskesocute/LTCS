<script setup>
const infiniteAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    infiniteAnimation.value = true;
  }, 2000);
});
</script>

<template>
  <div class="id= pt-[55px] md:pt-[72px]" id="header"></div>
  <header
    class="reactive h-[calc(100dvh-55px)] w-full bg-[position:top_0%_left_30%] bg-[url(/images/header.png)] bg-cover bg-no-repeat md:h-[calc(100dvh-72px)] lg:flex lg:items-start lg:justify-end 2xl:bg-[position:top_40%_left_0px] md:bg-[position:top_60%_left_0px]"
  >
    <div class="mask lg:hidden"></div>
    <img
      class="absolute bottom-[64px] left-[50%] z-10 my-[24px] max-w-[327px] translate-x-[-50%] lg:hidden"
      src="../assets/images/title-m.svg"
      alt=""
    />
    <img
      src="../assets/images/title.svg"
      class="fadeInUp mr-[30px] mt-[152px] hidden max-w-[450px] xl:mr-[88px] lg:block xl:max-w-[594px]"
      :class="infiniteAnimation ? 'bob' : 'fadeInUp'"
      alt=""
    />
  </header>
</template>

<style lang="scss" scoped>
.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, #eff8f9 0%, #f2f9fad7 30%, #ffffff00);
  z-index: 1;
}
.fadeInUp {
  animation: fadeInUp 1.5s ease-in-out;
}
.bob {
  animation: bob 2.5s ease-in-out infinite;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
