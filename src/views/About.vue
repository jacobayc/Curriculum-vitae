<template>
  <div class="dev-log">
    <ul>
      <li v-for="(postCard, id) in postCards" :key="id" @click="moveToDetail(`${postCard.id}`)" ref="postCardsRefs">
        <div class="image-frame"><img :src="postCard.imgUrl" alt=""></div>
        <div class="contents">
          <p>{{ postCard.title }}</p>
          <p> {{ postCard.mainText }} </p>
          <p> {{ postCard.etc }} </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref  } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const postCards = reactive([
  {
    id: '1', 
    imgUrl: "https://promotion.spotvnow.co.kr/ucl/img/DOR_4-1.png", 
    title: "[준결승 1차전]", 
    mainText:"지금 가입하고 챔피언스리그 결승전과 MLB 까지 만나보세요!",
    etc: "고객센터 1833-8910"
  },
  {
    id: '2', 
    imgUrl: "https://promotion.spotvnow.co.kr/ucl/img/realmadrid@2x.png", 
    title: "[레알마드리드]", 
    mainText:"지금 가입하고 챔피언스리그 결승전과 MLB 까지 만나보세요!",
    etc: "고객센터 1833-8910"
  },
  {
    id: '2', 
    imgUrl: "https://promotion.spotvnow.co.kr/ucl/img/dortmund@2x.png", 
    title: "[레알마드리드]", 
    mainText:"지금 가입하고 챔피언스리그 결승전과 MLB 까지 만나보세요!",
    etc: "고객센터 1833-8910"
  },
  {
    id: '2', 
    imgUrl: "https://promotion.spotvnow.co.kr/ucl/img/banner.png", 
    title: "[레알마드리드]", 
    mainText:"지금 가입하고 챔피언스리그 결승전과 MLB 까지 만나보세요!",
    etc: "고객센터 1833-8910"
  },
  {
    id: '2', 
    imgUrl: "https://promotion.spotvnow.co.kr/ucl/img/intro.png", 
    title: "[레알마드리드]", 
    mainText:"지금 가입하고 챔피언스리그 결승전과 MLB 까지 만나보세요!",
    etc: "고객센터 1833-8910"
  }
]) 

const postCardsRefs = ref<HTMLLIElement[]>([]);

const moveToDetail = (path: string) => {
  router.push(`/detail/${path}`)
}

const setUpIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
         // 한 번 애니메이션이 실행된 후 관찰 해제
         observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  postCardsRefs.value.forEach((postCardRef: any) => {
    if (postCardRef) {
      observer.observe(postCardRef);
    }
  });
};

onMounted(() => {
  setUpIntersectionObserver();
});

</script>

<style scoped lang="less">
  .dev-log {
    width: 100%;
    margin:200px auto 0;
    height: 100vh;
    color: #000;
    &>ul {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      &>li {
        width: 320px;
        height: 377px;
        background: #ebebeb;
        margin-right: 11px;
        margin-left: 11px;
        margin-bottom: 22px;
        transform:scale(0);
        transition: transform .8s ease-in-out;
        cursor: pointer;
        &.visible {
          transform:scale(1);
        }
        .image-frame {
          width: 100%;
          height: 167px;
          &>img {
            width: 100%;
            height: 167px;
          }
        }
        .contents {
          padding: 20px;
          p {
            padding: 8px 0;
            &:first-child {
              font-size: 18px;
              font-weight: 700;
            }
            &:last-child {
              color: #8e8e96;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    .dev-log {
    margin:100px auto 0;
    &>ul {
      width: 90%;
      margin: 0 auto;
      &>li {
        width: 46%;
        height: 250px;
        justify-content: space-around;
        margin-left: 2%;
        margin-right: 2%;
        transform:scale(0);
        transition: transform .8s ease-in-out;
        cursor: pointer;
        &.visible {
          transform:scale(1);
        }
        .image-frame {
          width: 100%;
          height: 100px;
          &>img {
            width: 100%;
            height: 100px;
          }
        }
        .contents {
          padding: 20px;
          p {
            font-size: 12px;
            padding: 2px 0;
            &:first-child {
              font-weight: 700;
            }
            &:last-child {
              color: #8e8e96;
            }
          }
        }
      }
    }
  }
  }
</style>