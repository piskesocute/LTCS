<script setup>
const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

const scrollToForm = (target) => {
  if (isOpen.value) {
    isOpen.value = !isOpen.value;
  }
  const idx = document.getElementById(target);
  idx.scrollIntoView();
};
</script>
<template>
  <nav
    class="container-full fixed left-0 top-0 z-100 mx-auto w-full bg-[#ffffffcc] px-4 py-3 md:px-10 md:py-4"
  >
    <div class="relative z-10 h-full flex items-center justify-between">
      <div class="flex gap-x-4">
        <img class="max-w-[85px] md:max-w-[112px]" src="../assets/images/長期照顧-112.svg" alt="" />
        <img
          class="my-[2px] max-w-[111px] md-my-[3px] md:max-w-[146px]"
          src="../assets/images/衛福部-146.svg"
          alt=""
        />
      </div>
      <!-- 手機nav按鈕 -->
      <div class="relative h-[24px] w-[24px] md:hidden" @click="toggle">
        <div
          class="absolute top-[5px] h-[2px] w-[24px] rounded-[10px] bg-primary transition duration-200 ease-in-out"
          :class="isOpen ? 'rotate-45 translate-y-[6px]' : ''"
        >
          <span
            class="absolute right-0 top-0 h-[2px] w-full flex justify-end gap-x-[1px] rounded-[10px] transition ease-in-out"
            :class="isOpen ? 'opacity-0 ' : ''"
          >
            <span class="h-[2px] w-[2px] rounded-[10px] bg-secondary"></span>
            <span class="h-[2px] w-[5px] rounded-[10px] bg-secondary"></span>
          </span>
        </div>
        <div
          class="d absolute top-[11px] h-[2px] w-[24px] rounded-[10px] bg-primary transition duration-300 ease-in-out"
          :class="isOpen ? 'opacity-0 translate-x-[10px]' : ''"
        />
        <div
          class="absolute top-[17px] h-[2px] w-[24px] rounded-[10px] bg-primary transition duration-200 ease-in-out"
          :class="isOpen ? '-rotate-45 -translate-y-[6px]' : ''"
        />
      </div>
      <!-- 桌機 ul -->
      <ul class="hidden h-full items-center justify-center md:flex">
        <li class="group text-center">
          <button
            @click="scrollToForm('header')"
            href="#"
            class="block h-full px-[24px] text-center text-[24px] text-content font-medium transition duration-100 md:text-[16px] group-hover:text-secondary"
          >
            首頁
          </button>
          <div class="relative w-full">
            <div
              class="absolute left-1/2 top-0 h-[2px] w-[34px] bg-[#e4e4e4] opacity-0 transition duration-100 ease-in-out -translate-x-[50%] group-hover:opacity-100"
            >
              <span
                class="absolute right-0 top-0 h-[2px] w-full flex justify-end gap-x-[2px] rounded-[10px] transition"
              >
                <span class="h-[2px] w-[3px] rounded-[10px] bg-secondary"></span>
                <span class="h-[2px] w-[8px] rounded-[10px] bg-secondary"></span>
              </span>
            </div>
            <div
              class="absolute left-0 top-0 h-[2px] w-[0%] bg-primary transition duration-300 ease-in-out"
            ></div>
          </div>
        </li>
        <li class="h-[12px] w-[1px] bg-[#e4e4e4]" />
        <li class="group text-center">
          <button
            class="block h-full px-[24px] text-center text-[24px] text-content font-medium transition duration-100 md:text-[16px] group-hover:text-secondary"
            @click="scrollToForm('description')"
          >
            照顧現場
          </button>
          <div class="relative w-full">
            <div
              class="absolute left-1/2 top-0 h-[2px] w-[34px] bg-[#e4e4e4] opacity-0 transition duration-100 ease-in-out -translate-x-[50%] group-hover:opacity-100"
            >
              <span
                class="absolute right-0 top-0 h-[2px] w-full flex justify-end gap-x-[2px] rounded-[10px] transition"
              >
                <span class="h-[2px] w-[3px] rounded-[10px] bg-secondary"></span>
                <span class="h-[2px] w-[8px] rounded-[10px] bg-secondary"></span>
              </span>
            </div>
            <div
              class="absolute left-0 top-0 h-[2px] w-[0%] bg-primary transition duration-300 ease-in-out"
            ></div>
          </div>
        </li>
        <li class="h-[12px] w-[1px] bg-[#e4e4e4]" />
        <li class="group text-center">
          <button
            @click="scrollToForm('LTCS')"
            href="#"
            class="block h-full px-[24px] text-center text-[24px] text-content font-medium transition duration-100 md:text-[16px] group-hover:text-secondary"
          >
            一看就懂長照2.0
          </button>
          <div class="relative w-full">
            <div
              class="absolute left-1/2 top-0 h-[2px] w-[34px] bg-[#e4e4e4] opacity-0 transition duration-100 ease-in-out -translate-x-[50%] group-hover:opacity-100"
            >
              <span
                class="absolute right-0 top-0 h-[2px] w-full flex justify-end gap-x-[2px] rounded-[10px] transition"
              >
                <span class="h-[2px] w-[3px] rounded-[10px] bg-secondary"></span>
                <span class="h-[2px] w-[8px] rounded-[10px] bg-secondary"></span>
              </span>
            </div>
            <div
              class="absolute left-0 top-0 h-[2px] w-[0%] bg-primary transition duration-300 ease-in-out"
            ></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 手機nav -->
    <div class="md:hidden">
      <ul
        class="absolute left-0 top-[100%] w-full flex flex-col bg-[#ffffff] transition duration-300 ease-in-out h-svh"
        :class="isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[1000px]'"
      >
        <li class="text-center">
          <button
            class="block w-full py-4 text-[24px] text-content font-medium"
            @click="scrollToForm('header')"
          >
            首頁
          </button>
          <div
            class="relative bottom-0 left-1/2 h-[1px] w-[50%] bg-[#E4E4E4] -translate-x-[50%]"
          ></div>
        </li>
        <li class="text-center">
          <button
            class="block w-full py-4 text-[24px] text-content font-medium"
            @click="scrollToForm('description')"
          >
            照顧現場
          </button>
          <div
            class="relative bottom-0 left-1/2 h-[1px] w-[50%] bg-[#E4E4E4] -translate-x-[50%]"
          ></div>
        </li>
        <li class="text-center">
          <button
            @click="scrollToForm('LTCS')"
            class="block w-full py-4 text-[24px] text-content font-medium"
          >
            一看就懂長照2.0
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
