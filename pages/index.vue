<template>
    <div class="modules">
      <modules :modules="modules"/>
    </div>
</template>

<script>

export default {
  name: 'IndexPage',
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
              title: 'Where did i follow my internship?',
              text: 'Marketing content creation for brands & individuals. Providing graphic design.',
            },
            {
              title: 'Skills i have learne',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
              img: "https://images.pexels.com/photos/3007355/pexels-photo-3007355.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: "arrow-right"
            },
            {
              title: 'Project',
              img: "https://images.pexels.com/photos/6294444/pexels-photo-6294444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              icon: "arrow-right"
            },
            {
              title: 'Lynn',
              img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
              icon: "arrow-right"
            }
          ]
        },
        {
          type: 'textBlock',
          backgroundDark: true,
          textBlocks: [
            {
              title: 'Nuxt/Vue.js',
              text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
              buttonColor: 'alpha',
              buttonText: '',
            },
            {
              title: 'Nuxt.js',
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
          text: 'CO-DA Studios is a digital media content production company specializing in marketing content creation for brands & individuals. Providing graphic design, video production, photography, and animation that seek to inspire your brand’s clientele.',
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
