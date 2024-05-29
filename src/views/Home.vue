<template>
  <div class="home">
    <section class="intro-title">
      <div ref="titleRef">
        <h1>Front-End</h1>
        <p>프론트엔드 개발자 <strong>안예찬</strong>입니다.</p>
        <div> {{ introTitle.text }}</div>
      </div>
    </section>
    <!-- <section>
      <div>
        <h2>간단 소개</h2>
        <div> {{ introText.text }}</div>
      </div>
    </section> -->
  
    <!-- <section>
      <div>
        <h2>About Me</h2>
        <div> {{ aboutMe.text }}</div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { ref, reactive, onMounted  } from 'vue'


defineComponent({
  name: 'Home',
});

const titleRef = ref<HTMLDivElement | null>(null)

const introTitle = reactive({
  text : 
  ` 
  `
})

const introText = reactive({
  text : 
  ` 안녕하세요
    5년차 경력의 웹 프론트엔드 개발자입니다.
    주로 vue.js와 javascript, typescript, node.js와 같은 언어를 사용하였으며

    가입자 수 260만명, LIVE 동시 시청자 수 150만명 등의 스포츠 콘텐츠 서비스를 제공하는
    국내 OTT 기업에서 다양한 WEB 개발 경험을 쌓았습니다.

    주요 프로젝트로는 제휴사 연동, 플레이어 관련 개발, 모바일 웹 결제, 쿠폰 프로모션 
    회원통합(계정통합) ,UI/UX 개선 등이 있습니다.

    맡은 업무에 대한 이해도와 책임감을 바탕으로 더 나은 서비스를 제공하기 위해 노력하였으며
    기획/개발/배포/운영 등 프로젝트에 관계된 실무자들과 소통하고 협업하며 비즈니스 성장에 기여하였습니다.

    관리자(파트장)의 부재기간 약 1년동안 파트 업무를 담당하였으며, 소스관리(git) 및 버전관리, 
    CI/CD(젠킨스)를 통한 개발서버/운영서버 배포를 리드한 경험이 있습니다.

    주변의 동료들이 성장하고 잘되는 것이 결국 제 자신에게도 긍정적인 방향성을 제시한다는 생각을
    바탕으로 다 함께, 같이 성장하는 것을 좋아하고 지향합니다.
  `
})

const aboutMe = reactive({
  text : 
  ` - 웹 퍼블리셔로 개발 커리어를 시작하여 웹표준, 웹접근성, 크로스브라우징 대응이 가능하며
    반응형 웹 UI/UX를 고려한 퍼블리싱에 능숙합니다.

    - 업무와 관련하여 공격적인 커뮤니케이션을 지양하며 디자이너, 기획자등 개발 전반적인 과정에서
     다양한 직군들과의 소통을 중요하게 생각합니다.

     - 나의 생각이 틀릴 수도 있다는 점을 염두하고, 여러 의견을 수용하기 위한 자세를 유지합니다.
     협업을 중요하게 생각하기 때문에 팀원이 서로 존중하고 배려하는 업무 분위기를 지향합니다.
    
  `
})

onMounted (() => {
  if(titleRef.value) {
    setTimeout(() => {
      titleRef.value!.style.transform = 'translateY(0)';
    }, 0);
  }
})

</script>

<style scope lang="less">
  .home {
    width:100%;
    height: 100vh;
    background-image: url('@/assets/front_bg.jpg');
    section{
      width: 100%;
      padding: 10px 0;
      color: #fff;
      &>div {
        width: 1280px;
        margin: 0 auto;
        h2 {
          width: 96%;
          margin: 10px auto;
        }
        div {
          width: 96%;
          margin: 0 auto;
          font-size: 14px;
          white-space: pre-line;
        }
      }
    }
    .intro-title {
        &>div {
          transform:translatey(-400px);
          transition: transform 0.7s ease-in;
          background:rgba(107,190,210,0.5);
          text-align: center;
          h1 {
            font-size:140px;
          }
          p {
            font-size: 40px; 
            color: #000;
            letter-spacing: -2px;
          }
        }
      }
  }
</style>