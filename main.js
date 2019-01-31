Vue.component('movie-card', {
    props: ['image', 'title'],
    template: `
      <div>
        <img width="100" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{ title }}</h2>
      </div>
    `,
  })

  new Vue({
    el: '#app',
    data: {
      name: 'Movies',
      movies: [
        { title: 'Avangers Part 1', image: '1.jpeg' },
        { title: 'Avangers Part 2', image: '2.jpeg' },
        { title: 'Avangers Part 3', image: '3.jpg' }
      ]
    },
    template: `
      <div>
        <movie-card v-for="(movie, index) in movies"
          :key="index"
          :title="movie.title"
          :image="movie.image">
        </movie-card>
      </div>
    `
  })
