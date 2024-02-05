<script setup>
const data = ref([
  {
    url: 'https://event.cw.com.tw/_test-by-cwlab/doltc/slide1.jpg',
    title: '面對照顧壓力大？ 張曼娟：',
    title2: '記得提醒自己，這一切都會過去的',
    description:
      '各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。所幸，我們並不寂寞，我們在這條艱難的路上遇見彼此。'
  },
  {
    url: 'https://event.cw.com.tw/_test-by-cwlab/doltc/slide2.jpg',
    title: '小六生可能已是照顧者',
    title2: '日本小學生與失智者共開店',
    description:
      '當我們擔心學童與失智者接觸的安危，日本小學已納入課程，把長者視為社區的一份子。你我都可能是照護者，共生才能撐起高齡長照。。'
  },
  {
    url: 'https://event.cw.com.tw/_test-by-cwlab/doltc/slide3.jpg',
    title: '不想活得又老又窮',
    title2: '避開50歲最後悔的5個財務決定',
    description:
      '「早知道會活那麼久，當初就……」想避免退休後，活得又老又窮，盡量避開這些50歲以上的人最後悔的財務決定。'
  }
]);
const imageNow = ref(0);
let autoSlidePlayTimer;

const carouselChange = () => {
  // clearInterval(autoSlidePlayTimer);
  imageNow.value = (imageNow.value + 1) % 3;
  // autoSlidePlayTimer = autoSlidePlay();
};

const slideBtn = (index) => {
  clearInterval(autoSlidePlayTimer);
  imageNow.value = index;
  autoSlidePlayTimer = autoSlidePlay();
};

const autoSlidePlay = () => {
  return setInterval(() => {
    imageNow.value = (imageNow.value + 1) % 3;
  }, 5000);
};

onMounted(() => {
  autoSlidePlayTimer = autoSlidePlay();
});

onUnmounted(() => {
  clearInterval(autoSlidePlayTimer);
});
</script>
<template>
  <main id="description">
    <div class="py-[56px] pl-[24px] md:my-[30px] md:py-[70px] md:pl-[40px] xl:pl-[120px]">
      <div class="md:ml-[180px] md:flex md:items-start md:justify-start">
        <div class="mr-[24px] hidden lg:block">
          <p
            class="relative mt-[9px] text-[12px] text-primary font-semibold tracking-[0.225rem] write-vertical-left"
          >
            LTCS LIVE<span class="absolute left-0 top-0 h-[15px] w-[1px]">
              <span class="absolute left-0 top-0 h-[11px] w-[1px] bg-secondary" />
              <span class="absolute left-0 top-[15px] h-[4px] w-[1px] bg-secondary" />
            </span>
          </p>
        </div>
        <div>
          <h2 class="text-[32px] text-content font-semibold leading-[42px] tracking-[0.4rem]">
            照顧現場
          </h2>
          <h3 class="text-[32px] text-primary font-semibold leading-[42px] tracking-[0.4rem]">
            預見安心變老
          </h3>
          <p class="relative text-[12px] text-primary font-semibold tracking-[0.225rem] lg:hidden">
            LTCS LIVE<span class="absolute bottom-0 left-0 h-[1px] w-full">
              <span class="absolute left-0 top-0 h-[1px] w-[11px] bg-secondary" />
              <span class="absolute left-[15px] top-0 h-[1px] w-[4px] bg-secondary" />
            </span>
          </p>
        </div>
      </div>

      <div class="relative z-10 mt-[24px] max-h-[640px] w-full overflow-hidden rounded-tl-[40px]">
        <button
          type="button"
          class="bg-main absolute right-[40px] top-1/2 z-10"
          @click="carouselChange"
        >
          <img src="../assets/images/slidebutton.svg" class="block" alt="" />
        </button>
        <img
          src="https://event.cw.com.tw/_test-by-cwlab/doltc/slide1.jpg"
          alt=""
          class="block max-w-[327px] opacity-0 md:max-w-[955px] sm:max-w-[600px] xl:max-w-[1200px]"
        />
        <img
          src="https://event.cw.com.tw/_test-by-cwlab/doltc/slide1.jpg"
          alt=""
          class="absolute left-0 top-0 max-w-[500px] w-full object-cover transition-transform duration-500 ease-in-out md:max-w-[955px] sm:max-w-[600px] xl:max-w-[1200px]"
          :class="[
            { 'translate-x-0 z-[0] md:-translate-x-[50px]  lg:translate-x-0': imageNow === 0 },
            { 'translate-x-[90%] z-[1] ]': imageNow === 2 },
            { 'translate-x-[180%] z-[-1] ': imageNow === 1 }
          ]"
        />
        <img
          src="https://event.cw.com.tw/_test-by-cwlab/doltc/slide2.jpg"
          alt=""
          class="absolute left-0 top-0 h-full max-w-[500px] w-full object-cover transition-transform duration-500 ease-in-out md:max-w-[955px] sm:max-w-[600px] xl:max-w-[1200px]"
          :class="[
            { 'translate-x-0 z-[0] md:-translate-x-[50px] lg:translate-x-0': imageNow === 1 },
            { 'translate-x-[90%] z-[1] ': imageNow === 0 },
            { 'translate-x-[180%] z-[-1]': imageNow === 2 }
          ]"
        />
        <img
          src="https://event.cw.com.tw/_test-by-cwlab/doltc/slide3.jpg"
          alt=""
          class="absolute left-0 top-0 h-full max-w-[500px] w-full object-cover transition-transform duration-500 ease-in-out md:max-w-[955px] sm:max-w-[600px] xl:max-w-[1200px]"
          :class="[
            { 'translate-x-0 z-[0] md:-translate-x-[50px] lg:translate-x-0': imageNow === 2 },
            { 'translate-x-[90%] z-[1] ': imageNow === 1 },
            { 'translate-x-[180%] z-[-1]': imageNow === 0 }
          ]"
        />
        <div class="absolute left-[180px] top-[369px] z-10 hidden md:block">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="mt-[16px] pr-[16px] transition duration-500 ease-in-out"
            v-show="imageNow === index"
          >
            <h3 class="text-[32px] text-white font-semibold leading-[44.8px]">{{ item.title }}</h3>
            <h3 class="text-[32px] text-white font-semibold leading-[44.8px]">{{ item.title2 }}</h3>
            <p
              class="w-1/2 truncate text-ellipsis text-[16px] text-white font-normal leading-[25.6px] tracking-[1.6px]"
            >
              {{ item.description }}
            </p>
            <img src="../assets/images/rectangle.svg" class="mt-[24px]" alt="" />
            <div class="mt-[16px] w-[48px] flex items-center justify-between md:mt-[40px]">
              <div
                class="h-[8px] w-[8px] border-[1px] rounded-full"
                :class="
                  imageNow === 0
                    ? 'bg-secondary border-[#CADEDF00]'
                    : 'bg-[#00000000] border-[#CADEDF]'
                "
                @click="slideBtn(0)"
              ></div>
              <div
                class="h-[8px] w-[8px] border-[1px] rounded-full"
                :class="
                  imageNow === 1
                    ? 'bg-secondary border-[#CADEDF00]'
                    : 'bg-[#00000000] border-[#CADEDF]'
                "
                @click="slideBtn(1)"
              ></div>
              <div
                class="h-[8px] w-[8px] border-[1px] rounded-full"
                :class="
                  imageNow === 2
                    ? 'bg-secondary border-[#CADEDF00]'
                    : 'bg-[#00000000] border-[#CADEDF]'
                "
                @click="slideBtn(2)"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(item, index) in data"
        :key="index"
        class="mt-[16px] pr-[16px] transition duration-500 ease-in-out md:hidden"
        v-show="imageNow === index"
      >
        <h3 class="text-[20px] font-semibold leading-[28px]">{{ item.title }}</h3>
        <h3 class="text-[20px] font-semibold leading-[28px]">{{ item.title2 }}</h3>
        <p
          class="h-[40px] truncate text-ellipsis text-[14px] font-normal leading-[22.4px] tracking-[1.4px]"
        >
          {{ item.description }}
        </p>
        <img src="../assets/images/rectangle.svg" alt="" />
        <div class="mt-[16px] w-[48px] flex items-center justify-between">
          <div
            class="h-[8px] w-[8px] border-[1px] rounded-full"
            :class="
              imageNow === 0 ? 'bg-secondary border-[#CADEDF00]' : 'bg-[#00000000] border-[#CADEDF]'
            "
            @click="slideBtn(0)"
          ></div>
          <div
            class="h-[8px] w-[8px] border-[1px] rounded-full"
            :class="
              imageNow === 1 ? 'bg-secondary border-[#CADEDF00]' : 'bg-[#00000000] border-[#CADEDF]'
            "
            @click="slideBtn(1)"
          ></div>
          <div
            class="h-[8px] w-[8px] border-[1px] rounded-full"
            :class="
              imageNow === 2 ? 'bg-secondary border-[#CADEDF00]' : 'bg-[#00000000] border-[#CADEDF]'
            "
            @click="slideBtn(2)"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.writing-mode {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
</style>
