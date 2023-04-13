<template>
    <div class="modules">
      <modules :modules="modules"/>
    </div>
</template>

<script>
import modules from "../components/modules.vue";
import caseBlockModule from "../components/modules/caseBlockModule.vue";
import heroModule from "../components/modules/heroModule.vue";
export default {
  name: 'IndexPage',
  components: { modules, caseBlockModule, heroModule },
  data() {
    return {
      modules: [
        {
          type: 'hero',
          title: 'This is my website',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          buttonColor: 'alpha',
          secondButtonColor: '',
          buttonText: 'My work',
          secondButtonText: 'Contact me',
        },
        {
          type: 'skillBlock',
          skillBlocks: [
            {
              title: 'How i started',
              text: 'Marketing content creation for brands & individuals. Providing graphic design.',
            },
            {
              title: 'How i started',
              text: 'Marketing content creation for brands & individuals. Providing graphic design.',
            },
          ]
        },
        {
          type: 'textBlock',
          backgroundDark: false,
          textBlocks: [
            {
              title: 'How i started',
              text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
              buttonColor: 'alpha',
              buttonText: 'contact',
            },
          ]
        },
        {
          type: 'cases',
          title: 'My projects',
          caseBlocks: [
            {
              title: 'Hallo',
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: "arrow-right"
            },
            {
              title: 'Project',
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: "arrow-right"
            },
            {
              title: 'Lynn',
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: "arrow-right"
            }
          ]
        },
        {
          type: 'textBlock',
          backgroundDark: true,
          textBlocks: [
            {
              title: 'How i started',
              text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
              buttonColor: 'alpha',
              buttonText: '',
            },
            {
              title: '',
              text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
              buttonColor: 'alpha',
              buttonText: '',
            },
          ]
        },
        {
          type: 'imageTextBlock',
          buttonColor: 'alpha',
          buttonText: 'See more',
          title: 'How i started',
          img: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=800",
          textBlocks: [
            {
              text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
            },
            {
              text: 'Marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
            },
          ]
        },
        {
          type: 'textSlider',
          textSlider: [
            {
              word: 'designer'
            },
            {
              word: 'media'
            },
            {
              word: 'agency'
            },
            {
              word: 'designer'
            },
            {
              word: 'media'
            },
          ]
        },
      ]
    }
  }
}
</script>
