<template>
  <footer>
  	<p>{{title1}}---{{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      title1:'copyright 2019 demo'
    }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		background: #222;
		padding: 20px 0;
		text-align: center;
	}
	p {
		color: lightgreen;
	}
</style>